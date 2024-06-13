import { Toolbar, Typography, TextField } from "@mui/material";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const Navbar = () => {
  const obj = useContext(UserContext);
  console.log(obj);
  return (
    <Toolbar>
      <Typography variant="h6">JSONPlaceholder Posts</Typography>
      <TextField
        label="Search by Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={obj.searchQuery}
        onChange={(e) => obj.setSearchQuery(e.target.value)}
      />
    </Toolbar>
  );
};

export default Navbar;
