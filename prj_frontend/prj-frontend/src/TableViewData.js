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
  // console.log(tabledata[0]);
  const columns = tabledata.length > 0 ? Object.keys(tabledata[0]) : [];
  return (
    // <table>
    //   <thead>
    //     <tr>
    //       {columns.map((column, index) => (
    //         <th key={index}>{column}</th>
    //       ))}
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {tabledata.map((row, index) => (
    //       <tr key={index}>
    //         {columns.map((column, index) => (
    //           <td key={index}>{row[column]}</td>
    //         ))}
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {allKeys.map((value, index) => {
              return <TableCell key={index}><strong>{value.toUpperCase()}</strong></TableCell>;
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          {tabledata.map((value, index) => {
            // const allKeys = Object.keys(value);
            const allValues = Object.values(value);
            // console.log(allValues);
            return (
              <TableRow >
                {allValues.map((val, ind) => {
                  return <TableCell key={ind}> 
                  {val == ""?"-":String(val)}
                  </TableCell>;
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableViewData;
