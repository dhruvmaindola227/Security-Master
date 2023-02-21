import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import companyLogo from "./images/ivp-footer-logo.png";
import { height } from "@mui/system";
import { Margin } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogTitle, Tab, Tabs } from "@mui/material";
import TabBar from './TabBar'



function LandingPage() {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <>
    <AppBar
      position="sticky"
      style={{ backgroundColor: "#141414", height: "60px" }}
    >
      <Toolbar >
        <Box m={1}>
          <img src={companyLogo} width={"200px"} height={"45px"}></img>
        </Box>
       
        <Box ml = {"auto"}>
          <Typography sx={{color : "#EEC643"}}> SECURITY MASTER </Typography>
        </Box>
        <Box ml = {"auto"}>
          <Button variant = "contained" sx = {{backgroundColor : "#EEC643" , color : "black"}}
          onClick = {() => {
              setOpen(true);
          }}>
            create 
          </Button>
        </Box>
      </Toolbar>
    </AppBar>

    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Do you want to create Equity or Bond?</DialogTitle>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => {
              
            }}
          >
            Equity
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              // setModalOpen(true);
            }}
          >
            Bond
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              handleClose();
            }}
          >
            Cancel
          </Button>
          </DialogActions>
          </Dialog>
          
    </>
  );
}
export default LandingPage;
