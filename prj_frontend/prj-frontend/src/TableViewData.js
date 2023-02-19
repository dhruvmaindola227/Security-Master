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
import { Card } from "@mui/material";

const TableViewData = ({ tabledata }) => {
  const allKeys = Object.keys(tabledata[0]);
  console.log(tabledata[0]);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {allKeys.map((value, index) => {
              return <TableCell key={index}>{value}</TableCell>;
            })}
          </TableRow>
        

        <TableBody>
          {tabledata.map((value, index) => {
            // const allKeys = Object.keys(value);
            const allValues = Object.values(value);
            console.log(allValues);
            return (
              <div style={{ backgroundColor: "grey", margin: "10px" }}>
                <TableRow>
                {allValues.map((val, ind) => {
                  return <TableCell>{val}</TableCell>;
                })}
                </TableRow>
              </div>
            );
          })}
        </TableBody>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default TableViewData;
