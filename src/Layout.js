import { Outlet } from "react-router-dom";
import { CssBaseline, AppBar, Toolbar, Typography } from "@mui/material";

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">JSONPlaceholder Posts</Typography>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Layout;
