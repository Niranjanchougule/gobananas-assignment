import React from "react";
import { Container } from "@mui/material";
import Posts from "./Posts";

const App = () => {
  return (
    <div>
      <Container style={{ marginTop: "20px" }}>
        <Posts />
      </Container>
    </div>
  );
};

export default App;
