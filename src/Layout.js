import { Outlet } from "react-router-dom";
import { CssBaseline, AppBar } from "@mui/material";
import UserContextProvider from "./context/UserContextProvider";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <UserContextProvider>
      <CssBaseline />
      <AppBar position="static">
        <Navbar />
      </AppBar>
      <Outlet />
    </UserContextProvider>
  );
};

export default Layout;
