import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GetBonds from "./GetBonds";
import GetEquities from "./GetEquities";
import { color } from "@mui/system";
import BondTabs from "./Bond Tabs/BondsTabs";
import EquityTabs from "./Equity Tabs/EquityTabs";
import { useState, useEffect } from "react";
import { TabList } from "@mui/lab";
import { useTabs } from "@mui/base";
import { AppBar } from "@mui/material";
// import React from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {

  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}



export default function BasicTabs() {
  let [value, setValue] = React.useState(0);
  let [isSelected , setSelected] = React.useState(false);
  let [equitiesSelected , setequitiesSelected] = React.useState(true);
  let [bondsSelected , setbondsSelected] = React.useState(false);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelected(isSelected = !isSelected);
    console.log(isSelected);
    console.log(newValue);

  };

  useEffect(() => {
    setequitiesSelected(equitiesSelected => {
      equitiesSelected = !equitiesSelected;
    })
  },[bondsSelected]);


  useEffect(() => {
    setbondsSelected(bondsSelected => {
      bondsSelected = !bondsSelected;
    })
  },[equitiesSelected]);

  return (
    <Box>
      <AppBar sx={{bgcolor : "#141414"}} position = "right">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{ style: { backgroundColor: "#EEC643"}}}
          // sx = {{width : "100%"}}
          variant = "fullWidth"

        >
          <Tab
            label={<span style={{ color: "#EEC643"  , width : "50%"}}>Equities</span>}
            {...a11yProps(0)}
            onClick = {() => {
              setequitiesSelected(true);
             }}
          />
          <Tab
            label={<span style={{ color: "#EEC643" , width : "50%" }}>Bonds</span>}
            {...a11yProps(1)}
            onClick = {() => 
            {setbondsSelected(true)}}
            
          />
        </Tabs>
      </AppBar>
      <Box>
        {equitiesSelected && <EquityTabs/>}
        {bondsSelected && <BondTabs/>}
      </Box>
      
      {/* {equitiesSelected == true ? <BondTabs/>: <EquityTabs/>}  */}
    </Box>
  );
}
