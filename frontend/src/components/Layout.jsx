import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-black font-mono">
      <div className="bg-violet-900/20 antialiased min-h-screen flex items-center justify-center tracking-tight">
        <div className="max-w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
