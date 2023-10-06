"use client"

import React from "react";
import { Button, ConfigProvider } from "antd";

import theme from "@/theme/themeConfig";

import "./styles.scss"
import HomeSearch from "../components/HomeSearch";

const MainPage = () => {
  return (
    <ConfigProvider theme={theme}>
      <div className="search flex items-center justify-center">
        <HomeSearch />
      </div>
    </ConfigProvider>
  );
};

export default MainPage;
