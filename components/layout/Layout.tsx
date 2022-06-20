import React, { PropsWithChildren } from "react";
import { Navbar } from "./Navbar";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen h-auto bg-gradient-to-br from-[#162b45] via-[#07121e] to-[#142133]">
        <div className="container max-w-screen-xl px-4 mx-auto">{children}</div>
      </main>
    </>
  );
};