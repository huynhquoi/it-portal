import React from "react";
import { Button, ConfigProvider } from "antd";

import theme from "../theme/themeConfig";
import { redirect } from "next/navigation";

const HomePage = async () => {
  redirect("/home");
  return (
    <>
      <div>Main</div>
    </>
  );
};

export default HomePage;
