"use client";

import React from "react";
import { Layout, Slider } from "antd";
import HomeHeader from "../components/HomeHeader";
import StyledComponentsRegistry from "@/lib/AntdRegistry";

const { Content, Footer } = Layout;

const HomeLayout: React.FC = ({ children }: React.PropsWithChildren) => {
  return (
    <Layout className="layout">
      <HomeHeader />
      <Content style={{background: "#fff"}}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default HomeLayout;
