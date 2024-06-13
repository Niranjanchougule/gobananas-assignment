import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <UserContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
