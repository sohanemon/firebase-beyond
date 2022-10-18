import { createContext, useState } from "react";
import Index from "../components/home";
import Head from "next/head";

export const UserContext = createContext({});
export default function Home() {
  const [user, setUser] = useState({});
  return (
    <div>
      <Head>
        <title>Firebase Beyond</title>
      </Head>
      <UserContext.Provider value={{ user, setUser }}>
        <Index /> {/* home */}
      </UserContext.Provider>
    </div>
  );
}
