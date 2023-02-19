import './App.css';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import {useState , useEffect} from 'react';


function GetEquities(){
    const [bondData , setData] = React.useState([]);
    const result = async () => {
        await axios.get("http://localhost:5144/getbond")
        .then((response) => {
            setData(response.data);
            console.log("this is message  " , response , result);
        });
    }

    React.useEffect(() => {
        result();
    },[]);    


    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Security name</TableCell>
                <TableCell align="right">Security Description</TableCell>
                {/* <TableCell align="right">Fat</TableCell>
                <TableCell align="right">Carbs</TableCell>
                <TableCell align="right">Protein</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
            {/* fragment */}
            <> 
              {
              bondData.map((value,index) => {
                return ( 
                    
                    <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {value.securityName}
                  </TableCell>
                  <TableCell align="right">{value.securityDescription}</TableCell>
                 <TableCell align="right">{value.securityId}</TableCell> 
                  {/* <TableCell align="right">{row.carbs}</TableCell>
                  // <TableCell align="right">{row.protein}</TableCell> */} 
                </TableRow>
                
                )
              })}
                </>
                </TableBody>
            
          </Table>
        </TableContainer>
                
      );
    
}

export default GetEquities;
