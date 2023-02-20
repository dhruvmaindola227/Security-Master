import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';



const TableViewData = (props) => {
  const allKeys = Object.keys(props.tabledata[0]);
  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  let [updateSid, setUpdateSid] = React.useState(-1);
  const [udata, setData] = React.useState({});


  

  const handleCloseSnackBar = (event, reason) => {
    // if (reason === 'clickaway') {
    //   return;
    // }
    setOpenSnackBar(false);
  };


  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackBar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const removeElement = async (id) => {
    fetch(`http://localhost:5144/get${props.type}/delete${props.type}/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        }
    }).then((res) => 
    {console.log(res);
      if(res.status == 200){
        console.log("HEREEEEEEEEE");
        setOpenSnackBar(true);
        props.apiFx();
      }
    });
  };

  const getData = async (id) => {
    // console.log("id" + id);
    // console.log("prop " + props.type);
    await fetch(
      `http://localhost:5144/get${props.type}/Get${props.type}ById/${id}`
    )
      .then((data) => data.json())
      .then((data) => setData(data));
    console.log(udata);
  };

  //   React.useEffect(() => {
  //     result();
  // },[]);
  useEffect(() => {
    console.log(udata);
  }, [udata]);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {/* <TableCell><strong>{String("Update/Delete").toLocaleUpperCase()}</strong></TableCell> */}
              {allKeys.map((value, index) => {
                return (
                  <TableCell key={index}>
                    <strong>{value.toUpperCase()}</strong>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            {props.tabledata.map((value, index) => {
              // const allKeys = Object.keys(value);
              const allValues = Object.values(value);
              // console.log(allValues);
              return (
                <TableRow
                  onClick={(event) => {
                    setUpdateSid(event.target.parentNode.firstChild.innerText);
                    setOpen(true);
                    setUpdateSid(event.target.parentNode.firstChild.innerText);
                    // console.log(updateSid);
                    getData(event.target.parentNode.firstChild.innerText);
                  }}
                >
                  {allValues.map((val, ind) => {
                    return (
                      <TableCell key={ind}>
                        {val === "" ? "-" : String(val)}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Do you want to Delete or Update data?</DialogTitle>
        {/* <DialogContent> */}
        {/* <DialogContentText>
            Form for security ID, {props.type}
            {updateSid}
          </DialogContentText> */}
        {/* </DialogContent> */}
        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => {
              removeElement(updateSid);
              handleClose();
            }}

          >
            Delete
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
      {
        openSnackBar ? <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleCloseSnackBar}
        message = "Deleted!"
        action = {action}
      /> : <div></div>
      }
</>
  );
};

export default TableViewData;
