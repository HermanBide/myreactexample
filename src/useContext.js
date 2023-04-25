import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const userContext = createContext({});

export function useContext({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then((data) => {
        setUser(data);
        setLoading(true);
      });
    }
  }, [user]);

  return (
    <userContext.Provider value={{ user, setUser, loading }}>
      userContext
      {children}
    </userContext.Provider>
  );
}

export default useContext;
