import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { WidthFull } from "@mui/icons-material";

const BondTabs = () => {
  return (
    <div>
      <Tabs variant="fullWidth">
        <Tab label="Security Summary" wrapped></Tab>
        <Tab label="Security Identifier" wrapped></Tab>
        <Tab label="Security Details" wrapped></Tab>
        <Tab label="Risk" wrapped></Tab>
        <Tab label="Regulatory details" wrapped></Tab>
        <Tab label="Reference Data" wrapped></Tab>
        <Tab label="Put Schedule" wrapped></Tab>
        <Tab label="Pricing and Analytics" wrapped></Tab>
        <Tab label="Call Schedule" wrapped></Tab>
      </Tabs>
    </div>
  );
};

export default BondTabs;
