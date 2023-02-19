import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import companyLogo from "./images/ivp-footer-logo.png";
import { height } from "@mui/system";
import { Margin } from "@mui/icons-material";
import { Tab, Tabs } from "@mui/material";
import TabBar from './TabBar'



function LandingPage() {
  
  return (
    <>
    <AppBar
      position="sticky"
      style={{ backgroundColor: "#141414", height: "80px" }}
    >
      <Toolbar >
        <Box m={1} pt={1}>
          <img src={companyLogo} width={"200px"} height={"45px"}></img>
        </Box>
        <Box ml = {"auto"} pt = {0}>
          <Typography sx={{color : "#EEC643"}}> SECURITY MASTER </Typography>
        </Box>
        <Box ml = {"auto"} pt = {4}>
          <TabBar></TabBar>
        </Box>
      </Toolbar>
    </AppBar>
    </>
  );
}
export default LandingPage;
