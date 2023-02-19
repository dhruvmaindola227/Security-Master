import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import companyLogo from "./images/ivp-footer-logo.png";
import { height } from "@mui/system";
import { Margin } from "@mui/icons-material";
import { Tab, Tabs } from "@mui/material";
import TabBar from './TabBar'

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
        <Box ml = {"auto"} pt = {1}>
          <Typography sx={{color : "#EEC643"}}> SECURITY MASTER </Typography>
        </Box>
        <Box ml = {"auto"} pt = {5}>
          <TabBar></TabBar>
        {/* <Tabs >
            <Tab label = {<span style={{color : "#EEC643"}}>Equities</span>}></Tab>
            <Tab label = {<span style={{color : "#EEC643" }}>Bonds</span>}></Tab>
        </Tabs> */}
        </Box>
      </Toolbar>
    </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
