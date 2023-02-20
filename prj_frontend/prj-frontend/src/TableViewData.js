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
import { Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const TableViewData = (props) => {
  const allKeys = Object.keys(props.tabledata[0]);
  // console.log(props.tabledata[0]);
  const columns = props.tabledata.length > 0 ? Object.keys(props.tabledata[0]) : [];
  const [open, setOpen] = React.useState(false);
  const [updateSid, setUpdateSid] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

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
              <TableRow onClick={(event) => {
                console.log(event.target.parentNode.firstChild.innerText);
                setOpen(true);
                setUpdateSid(event.target.parentNode.firstChild.innerText);
                
              }}>
                
              
              
                {allValues.map((val, ind) => {
                  return (
                    <TableCell  key={ind}>
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
                  <DialogTitle>Subscribe</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Form for security ID, {props.type}{updateSid}
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Email Address"
                      type="email"
                      fullWidth
                      variant="standard"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                  </DialogActions>
                </Dialog>
    </>
  );
};

export default TableViewData;
