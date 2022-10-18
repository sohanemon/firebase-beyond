import { createContext, useState } from "react";
import "../styles/globals.css";

export const UserContext = createContext({});
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({});

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Component {...pageProps} />;
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
