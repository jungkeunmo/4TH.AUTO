import React from "react";
import "antd/dist/antd.css";

const AppShell = ({ Component }) => {
  return (
    <>
      <Component />
    </>
  );
};

export default AppShell;