import { Avatar, ConfigProvider, Typography } from "antd";
import React from "react";

const { Text } = Typography;

const CompanyDisplay: React.FC = () => {
  return (
    <ConfigProvider>
      <div className="flex items-center justify-between">
        <Avatar
          className="items-center"
          shape="square"
          size={48}
          style={{ backgroundColor: "red", color: "#ffffff", display: "flex" }}
          src={
            "https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd00vSEE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--485f524bcdc3be1fd8dbe4984e01a15b79a99f2f/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oSnlaWE5wZW1WZmRHOWZabWwwV3dkcEFhb3ciLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb0ebae071595ab1791dc0ad640ef70a76504047/images.png"
          }
        >
          <span style={{ fontSize: "14px" }}> HV </span>
        </Avatar>
        <Text className="ml-3" style={{ fontSize: "16px", color: "#000", fontWeight: "500" }}>
          Simple Tech Investment
        </Text>
      </div>
    </ConfigProvider>
  );
};

export default CompanyDisplay;
