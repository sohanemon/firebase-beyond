import { createContext, useState } from "react";
import Index from "../components/home";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Firebase Beyond</title>
      </Head>
      <Index /> {/* home */}
    </div>
  );
}
