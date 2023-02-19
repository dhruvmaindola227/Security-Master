import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const EquityTabs = () => {
  let [currentValue, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        variant="fullWidth"
        value={currentValue}
        onChange={handleChange}
        TabIndicatorProps={{ style: { backgroundColor: "#02111B" } }}
        sx = {{bgcolor : "#D3D0CB"}}
      >
        <Tab label={<span style={{ color: "#02111B" }}>Secruity Summary</span>}> </Tab>
        <Tab label={<span style={{ color: "#02111B" }}>Secruity Identifier</span>}></Tab>
        <Tab label={<span style={{ color: "#02111B" }}>Secruity Details</span>}></Tab>
        <Tab label={<span style={{ color: "#02111B" }}>Risk</span>}></Tab>
        <Tab label={<span style={{ color: "#02111B" }}>Regulatory Details</span>}></Tab>
        <Tab label={<span style={{ color: "#02111B" }}>Reference Data</span>}></Tab>
        <Tab label={<span style={{ color: "#02111B" }}>Pricing Details</span>}></Tab>
        <Tab label={<span style={{ color: "#02111B" }}>Divident History</span>}></Tab>
      </Tabs>
    </div>
  );
};

export default EquityTabs;
