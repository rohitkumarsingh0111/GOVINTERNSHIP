// src/context/UserContext.js
import React, { createContext, useState } from "react";

// Context create kiya
export const UserContext = createContext();

// Provider banaya
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
