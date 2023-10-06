import theme from "@/theme/themeConfig";
import { ConfigProvider } from "antd";
import React from "react";
import HomeSearch from "../components/HomeSearch";

const JobPage = () => {
  return (
    <ConfigProvider theme={theme}>
      <div  style={{height: "216px"}} className="search flex items-start justify-center pt-10">
        <HomeSearch />
      </div>
      <>Job Page</>
    </ConfigProvider>
  );
};

export default JobPage;
