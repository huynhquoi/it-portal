import theme from "@/theme/themeConfig";
import { ConfigProvider } from "antd";
import React from "react";

const JobPageSearch = () => {
    return <ConfigProvider theme={theme}>
        <>Job Page Search</>
    </ConfigProvider>
}

export default JobPageSearch;