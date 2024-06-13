import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPosts, fetchUsers } from "./api";
import { Container, Typography, CircularProgress, Box } from "@mui/material";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsData, usersData] = await Promise.all([
          fetchPosts(),
          fetchUsers(),
        ]);
        const post = postsData.find((post) => post.id === parseInt(id));
        setPost(post);
        setUsers(usersData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const findUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown";
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!post) {
    return (
      <Container>
        <Typography variant="h5" gutterBottom>
          Post not found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {post.body}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        By: {findUserName(post.userId)}
      </Typography>
    </Container>
  );
};

export default Post;
