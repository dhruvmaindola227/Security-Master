import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const EquityTabs = () => {
  let [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ style: { backgroundColor: "#EEC643" } }}
        sx = {{bgcolor : "#50514F"}}
      >
        <Tab label={<span style={{ color: "#EEC643" }}>Secruity Summary</span>}></Tab>
        <Tab label={<span style={{ color: "#EEC643" }}>Secruity Identifier</span>}></Tab>
        <Tab label={<span style={{ color: "#EEC643" }}>Secruity Details</span>}></Tab>
        <Tab label={<span style={{ color: "#EEC643" }}>Risk</span>}></Tab>
        <Tab label={<span style={{ color: "#EEC643" }}>Regulatory Details</span>}></Tab>
        <Tab label={<span style={{ color: "#EEC643" }}>Reference Data</span>}></Tab>
        <Tab label={<span style={{ color: "#EEC643" }}>Pricing Details</span>}></Tab>
        <Tab label={<span style={{ color: "#EEC643" }}>Divident History</span>}></Tab>
        
      </Tabs>
    </div>
  );
};

export default EquityTabs;
