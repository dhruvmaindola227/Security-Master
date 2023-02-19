import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";


const EquityTabs = () => {
  return (
    <div>
      <Tabs variant="fullWidth">
        <Tab label="Security Summary" wrapped ></Tab>
        <Tab label="Security Identifier" wrapped></Tab>
        <Tab label="Security Details" wrapped></Tab>
        <Tab label="Risk" wrapped></Tab>
        <Tab label="Regulatory details" wrapped></Tab>
        <Tab label="Reference Data" wrapped></Tab>
        <Tab label="Pricing Details" wrapped></Tab>
        <Tab label="Divident History" wrapped></Tab>
      </Tabs>
    </div>
  );
};

export default EquityTabs;
