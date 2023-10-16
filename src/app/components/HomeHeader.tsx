"use client";

import React, { useState } from "react";

import "@/theme/themeConfig";
import { Header } from "antd/es/layout/layout";
import { Avatar, Button, Image, Menu, MenuProps } from "antd";
import { useRouter } from "next/navigation";
import "../home/styles.scss";
import XUserDisplay from "@/app/components/XUserDisplay";

const menu = [
  {
    key: "it_job",
    label: "Việc làm IT",
    level: 1,
    children: [
      {
        key: "rank",
        label: "Việc làm IT theo cấp bậc",
        level: 1,
        // children: [],
      },
      {
        key: "skill",
        label: "Việc làm IT theo kỹ năng",
        level: 2,
        // children: [],
      },
      {
        key: "company",
        label: "Việc làm IT theo công ty",
        level: 3,
        // children: [],
      },
      {
        key: "city",
        label: "Việc làm IT theo thành phố",
        level: 4,
        children: [
          {
            key: "ha_noi",
            label: "Hà Nội",
            level: 1,
          },
          {
            key: "ho_chi_minh",
            label: "Hồ Chí Minh",
            level: 2,
          },
          {
            key: "da_nang",
            label: "Đà Nẵng",
            level: 3,
          },
        ],
      },
    ],
  },
  {
    key: "top_it_company",
    label: "Top công ty IT",
    level: 2,
    children: [
      {
        key: "best_company",
        label: "Công ty IT tốt nhất",
        level: 1,
        // children: [],
      },
      {
        key: "review_company",
        label: "Đánh giá công ty",
        level: 2,
        // children: [],
      },
    ],
  },
  {
    key: "salary_survey",
    label: "Khảo sát lương",
    level: 3,
    // children: [],
  },
];

const HomeHeader = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("user"));
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        background: "#000",
        justifyContent: "space-between",
      }}
    >
      <div className="header_menu flex items-center">
        <div className="demo-logo flex items-center mr-4">
          <Image
            src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png"
            height={"40px"}
            width={"108px"}
            preview={false}
            onClick={() => router.push("/home")}
          />
        </div>
        <Menu
          style={{ background: "#000", color: "#fff" }}
          theme="dark"
          mode="horizontal"
          items={menu}
          onClick={(item) => router.push(`./job`)}
        ></Menu>
      </div>
      {isAuth ? (
        <div
          onClick={() => {
            localStorage.removeItem("user");
            setIsAuth(false);
          }}
        >
          <XUserDisplay
            username={localStorage.getItem("user")?.toString() || ""}
          />
        </div>
      ) : (
        <div
          className="flex items-center justify-between"
          style={{ width: "200px" }}
        >
          <Button
            type="primary"
            color="white"
            style={{ background: "red", width: "96px" }}
            href="./auth/login"
          >
            Đăng nhập
          </Button>
          <Button
            type="primary"
            color="white"
            style={{ background: "black", width: "96px" }}
            href="./auth/register"
          >
            Đăng ký
          </Button>
        </div>
      )}
    </Header>
  );
};

export default HomeHeader;
