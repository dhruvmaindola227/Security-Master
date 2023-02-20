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


export default function BasicTabs() {
  let [value, setValue] = React.useState(0);
  let [equitiesSelected, setequitiesSelected] = React.useState(true);
  let [bondsSelected, setbondsSelected] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <Box >
      <AppBar sx={{ bgcolor: "#50514F" }} position="sticky">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{ style: { backgroundColor: "#EEC643" } }}
          variant="fullWidth"
        >
          <Tab
            label={
              <span style={{ color: "#EEC643", width: "50%" }}>Equities</span>
            }
            onClick={() => {
              setequitiesSelected(true);
              setbondsSelected(false);
            }}
          />
          <Tab
            label={
              <span style={{ color: "#EEC643", width: "50%" }}>Bonds</span>
            }
            onClick={() => {
              setbondsSelected(true);
              setequitiesSelected(false);
            }}
          />
        </Tabs>
      </AppBar>
      <Box>
        {equitiesSelected && <EquityTabs type="equity"/>}
        {bondsSelected && <BondTabs type='bond' />}
      </Box>
    </Box>
  );
}