import { Avatar, ConfigProvider, Typography } from "antd";
import React from "react";

const { Text } = Typography;

type XUserDisplayProps = {
  username: string;
};

const XUserDisplay = (props: XUserDisplayProps) => {
  return (
    <ConfigProvider>
      <div className="flex items-center justify-between">
        <Avatar
          className="items-center"
          size={36}
          style={{ backgroundColor: "red", color: "#ffffff", display: "flex" }}
        >
          <span style={{ fontSize: "14px" }}> {props.username[0].toUpperCase()} </span>
        </Avatar>
        <div className="flex flex-col ml-2 items-start justify-between">
          <Text className="mt-1" style={{ fontSize: "16px", color: "#fff" }}>
            {props.username}
          </Text>
          <Text className="mb-1" style={{ fontSize: "12px", color: "#fff" }}>
            User
          </Text>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default XUserDisplay;
