import {
  Avatar,
  Button,
  Card,
  ConfigProvider,
  Divider,
  Typography,
} from "antd";
import React from "react";

import "./style.scss";
import CompanyDisplay from "./CompanyDisplay";

const { Text } = Typography;

const JobCard: React.FC = () => {
  return (
    <ConfigProvider>
      <Card className={`p-0 pt-2 max-w-lg ${true ? "job-item-selected" : ""}`} bordered={false} hoverable >
        <div className="title max-w-lg flex flex-col items-start">
          <Text className="mt-2" style={{ color: "#a6a6a6", fontSize: "14px" }}>
            Đăng vào 1 giờ trước
          </Text>
          <Text
            className="my-4"
            style={{ fontSize: "18px", fontWeight: "bold" }}
          >
            Senior Data Engineer (Python, Data Warehouse, Alert)
          </Text>
          <CompanyDisplay />

          <Text
            className="my-3"
            style={{ fontSize: "16px", fontWeight: "bold" }}
          >
            5000$
          </Text>
          <Divider dashed style={{ color: "#a6a6a6", margin: 0 }} />
          <Text
            className="my-1"
            style={{ color: "#a6a6a6", fontSize: "14px", fontWeight: "500" }}
          >
            Tại văn phòng
          </Text>
          <Text
            className="my-2"
            style={{ fontSize: "14px", color: "#a6a6a6", fontWeight: "500" }}
          >
            Hồ Chí Minh
          </Text>

          <div className="skill-list mb-2">
            {["SQL", "C#", "Database"].map((e) => {
              return <Button className="mr-2" style={{height: "28px", borderRadius: "20px", fontSize: "14px"}} key={e}>{e}</Button>;
            })}
          </div>
        </div>
      </Card>
    </ConfigProvider>
  );
};

export default JobCard;
