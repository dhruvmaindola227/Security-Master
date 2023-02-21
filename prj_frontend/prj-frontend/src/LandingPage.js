import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import companyLogo from "./images/ivp-footer-logo.png";
import { height } from "@mui/system";
import { Margin } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogTitle, Grid, Modal, Tab, Tabs, TextField } from "@mui/material";
import TabBar from './TabBar'



function LandingPage() {


    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
      height: "80%",
      overflowY: "scroll",
    };

  const [EorB , setEorB] = React.useState("equity");
  const [udata, setData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => setModalOpen(false);
  const [updateDataModel, setUpdateDataModel] = useState({});
  const handleClose = () => {
    setOpen(false);
  };

  


  const addElement = async () => {
    
    fetch(`http://localhost:5144/get${EorB}/create${EorB}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body : JSON.stringify(updateDataModel)
    }).then((res) => {
      console.log(res);
      if (res.status == 200) {
        console.log("HEREEEEEEEEE");
        // setOpenSnackBar(false);
        // props.apiFx();
      }
    });
  };



  const getData = async (type) => {
    
    await fetch(
      `http://localhost:5144/get${type}/Get${type}Columns`
    )
      .then((data) => data.json())
      .then((data) => {
        setData(data);
        setUpdateDataModel(data);
      });
    console.log(udata);
  };

  useEffect(() => {}, [udata]);

  
  const updateTextFields = (event, key) => {
    setUpdateDataModel({
      ...updateDataModel,
      [key]: event.target.value,
    });
  };

  useEffect(() => {
    console.log("new model is" + JSON.stringify(updateDataModel));
  }, [updateDataModel]);

  
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
              setModalOpen(true);
              setEorB("equity");
              getData(EorB);
            }}
          >
            Equity
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setModalOpen(true);
              setEorB("bond");
              getData(EorB);
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
          <Modal
            open={isModalOpen}
            onClose={handleClose}
          >
            <Box sx={style}>
              <Grid container spacing={4}>
                {Object.keys(udata).map((value, index) => (
                  <Grid item xs={3} key={index}>
                    <TextField
                      label={udata[value].charAt(0).toLocaleLowerCase() + udata[value].substring(1)}
                      // defaultValue={udata[value]}
                      onChange={(event) => {
                        updateTextFields(event, udata[value]);
                      }}
                    ></TextField>
                  </Grid>
                ))}
                <Button variant="outlined" onClick={() => {
                  // updateTextFields(event, value);
                  addElement();
                  handleCloseModal();
                  handleClose();
                }}>
                  SUBMIT
                </Button>
              </Grid>
            </Box>
          </Modal>
          </DialogActions>
          </Dialog>




         
          
    </>
  );
}
export default LandingPage;
