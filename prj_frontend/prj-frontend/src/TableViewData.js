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
import IconButton from "@mui/material/IconButton";
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Modal,
  Slide,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

const TableViewData = (props) => {
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

  const allKeys = Object.keys(props.tabledata[0]);
  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  let [updateSid, setUpdateSid] = React.useState(-1);
  const [udata, setData] = React.useState({});

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const [updateDataModel, setUpdateDataModel] = useState({});

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
      },
    }).then((res) => {
      console.log(res);
      if (res.status == 200) {
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
      .then((data) => {
        setData(data);
        setUpdateDataModel(data);
      });
    console.log(udata);
  };

  useEffect(() => {}, [udata]);

  const handleClose = () => {
    setOpen(false);
  };

  const updateTextFields = (event, key) => {
    setUpdateDataModel({
      ...updateDataModel,
      [key]: event.target.value,
    });
  };

  useEffect(() => {
    console.log("new model");
    console.log(updateDataModel);
  }, [updateDataModel]);


  const updateElement = async (id) => {
    console.log("IDDDD");
    console.log(id);
    fetch(`http://localhost:5144/get${props.type}/update${props.type}/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body : JSON.stringify(updateDataModel)
    }).then((res) => {
      console.log(res);
      if (res.status == 200) {
        console.log("HEREEEEEEEEE");
        setOpenSnackBar(false);
        props.apiFx();
      }
    });
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
          <Button
            variant="outlined"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Update
          </Button>
          <Modal
            open={isModalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Grid container spacing={4}>
                {Object.keys(udata).map((value, index) => (
                  <Grid item xs={3} key={index}>
                    <TextField
                      label={value}
                      defaultValue={udata[value]}
                      onChange={(event) => {
                        updateTextFields(event, value);
                      }}
                    ></TextField>
                  </Grid>
                ))}
                <Button variant="outlined" onClick={() => {
                  updateElement(updateSid);
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
      {openSnackBar ? (
        <Snackbar
          open={openSnackBar}
          autoHideDuration={3000}
          onClose={handleCloseSnackBar}
          message="Deleted!"
          action={action}
        />
      ) : (
        <div></div>
      )}
    </>
  );
};

export default TableViewData;
