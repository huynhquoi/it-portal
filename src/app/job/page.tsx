"use client";

import theme from "@/theme/themeConfig";
import { Button, Col, ConfigProvider, Row, Typography } from "antd";
import React from "react";
import HomeSearch from "../components/HomeSearch";
import JobCard from "../components/JobCard";

const { Text } = Typography;

const JobPage = () => {
  return (
    <ConfigProvider theme={theme}>
      <div
        style={{ height: "216px" }}
        className="search flex items-start justify-center pt-10"
      >
        <HomeSearch />
      </div>
      <div className="job-page flex items-center justify-center bg-gray-100">
        <div className="job-page__container" style={{ width: "1300px" }}>
          <div
            className="job-page__info flex items-center justify-between"
            style={{ height: "100px" }}
          >
            <Text strong style={{ fontSize: "28px" }}>
              Hiện tại có 500 việc làm IT phù hợp yêu cầu của bạn
            </Text>
            <Button
              type="primary"
              danger
              ghost
              style={{
                fontWeight: "600",
                fontSize: "18px",
                width: "148px",
                height: "48px",
              }}
            >
              {" "}
              Bộ lọc
            </Button>
          </div>
          <Row>
            <Col flex={2} className="pr-6">
              <div className="card my-3">
                <JobCard />
              </div>
              <div className="card my-3">
                <JobCard />
              </div>
              <div className="card my-3">
                <JobCard />
              </div>
              <div className="card my-3">
                <JobCard />
              </div>
              <div className="card my-3">
                <JobCard />
              </div>
            </Col>
            <Col flex={3}>3 / 5</Col>
          </Row>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default JobPage;
