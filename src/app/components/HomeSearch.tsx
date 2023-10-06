"use client";

import { Button, Input, Select } from "antd";
import React, { useRef } from "react";
type HomeSearchProps = {
  keywords?: string;
  city?: string;
};

const HomeSearch = (props: HomeSearchProps) => {
  const keywords = useRef("");
  const city = useRef("all");
  const handleChange = (value: string) => {
    city.current = value;
  };
  return (
    <div
      className="flex items-center justify-between"
      style={{ width: "1120px" }}
    >
      <Select
        defaultValue={city.current}
        style={{ height: "56px", width: "256px"}}
        onChange={handleChange}
        options={[
          { value: "all", label: "Tất cả thành phố" },
          { value: "ha_noi", label: "Hà Nội" },
          { value: "ho_chi_minh", label: "Hồ Chí Minh" },
          { value: "da_nang", label: "Đà Nẵng" },
          { value: "khac", label: "Thành phố khác" },
        ]}
      />
      <Input
        size="large"
        style={{
          height: "56px",
          width: "640px",
          fontSize: "16px",
          padding: "11px 20px",
        }}
        placeholder="Nhập từ khóa tìm kiếm công việc..."
        onChange={(e) => {
          keywords.current = e.target.value;
        }}
        onPressEnter={() => console.log(keywords.current, city.current)}
        allowClear
      />
      <Button
        style={{
          height: "56px",
          width: "178px",
          fontSize: "16px",
          padding: "11px",
          color: "#fff",
          background: "red",
          border: "none",
        }}
        onClick={() => console.log(keywords.current, city.current)}
      >
        Tìm kiếm
      </Button>
    </div>
  );
};

export default HomeSearch;
