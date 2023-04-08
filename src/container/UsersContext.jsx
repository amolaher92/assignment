import React, { useState, useMemo, createContext } from "react";

export const usersContext = createContext(null);

export default function UsersContext({ children }) {
  const [users, setUsers] = useState([]);
  const value = useMemo(() => {
    return {
      users,
      setUsers,
    };
  }, [users]);

  return <usersContext.Provider value={value}>{children}</usersContext.Provider>;
}
