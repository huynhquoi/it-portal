"use client";

import React from "react";
import { Layout, Slider } from "antd";
import StyledComponentsRegistry from "@/lib/AntdRegistry";

const { Content, Footer } = Layout;

const BRG = "https://i.redd.it/n6fd1y3tbmb51.jpg";

const AuthLayout: React.FC = ({ children }: React.PropsWithChildren) => {
  return (
    <Layout className="layout">
      <Content className="flex items-center justify-center" style={{backgroundImage: `url("${BRG}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh"}}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </Content>
    </Layout>
  );
};

export default AuthLayout;
