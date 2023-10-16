import React from "react";
import { Button, ConfigProvider } from "antd";

import { redirect } from "next/navigation";

const AuthPage = async () => {
  redirect("/auth/login");
  return (
    <>
      <div>AuthPage</div>
    </>
  );
};

export default AuthPage;
