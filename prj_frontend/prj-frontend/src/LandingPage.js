import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import companyLogo from "./images/ivp-footer-logo.png";
import { height } from "@mui/system";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
import GetEquities from "./GetEquities";

const pages = ["Equities", "Bonds"];

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
    <AppBar position="sticky" style={{ backgroundColor: "#2A2B2A"  , height : "75px"}}>
      <Stack
        direction={"row"}
        spacing={47}
        mt = {"15px"}
      >
        <img
          src={companyLogo}
          alt="Indus Valley Partners"
          style={{ width: "200px", height: "45px" ,marginLeft : "10px"}}
        />
        <Box>
          <Typography sx={{ color: "#F5CB5C"}} marginTop = "10px">SECURITY MASTER</Typography>
        </Box>

        
          <Button
            sx={{ color: "black"  , bgcolor : "#F5CB5C" , marginLeft : "20px"}}
          >
            CREATE 
          </Button>

        
      </Stack>
    </AppBar>
  );
}
export default ResponsiveAppBar;
