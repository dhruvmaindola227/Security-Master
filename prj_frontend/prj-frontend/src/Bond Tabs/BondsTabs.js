


import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabPanel } from "@mui/lab";
import GetBonds from "./../GetBonds";
import { AppBar } from "@mui/material";
import TableViewData from "../TableViewData";
import axios from "axios";

const BondTabs = (props) => {
  let [currentValue, setValue] = React.useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const allUrls = [
    "http://localhost:5144/getbond/b-sec-summary",
    "http://localhost:5144/getbond/b-sec-identifier",
    "http://localhost:5144/getbond/b-sec-details",
    "http://localhost:5144/getbond/b-risk",
    "http://localhost:5144/getbond/b-reg-details",
    "http://localhost:5144/getbond/b-ref-data",
    "http://localhost:5144/getBond/b-put-schedule",
    "http://localhost:5144/getbond/b-prc-anl",
    "http://localhost:5144/getbond/b-call-schedules",
  ];
 

  const [bondData , setData] = React.useState([""]);
  const result = async () => {
       await axios.get(allUrls[currentValue])
        .then((response) => {
            setData(response.data);
            // console.log("this is message  " , response , result["data"]);
        });
    }

    
React.useEffect(() => {
  result();
 
},[currentValue]); 

  return (
    <>
      <AppBar position="sticky">
        <Tabs
          variant="fullWidth"
          value={currentValue}
          onChange={handleChange}
          TabIndicatorProps={{ style: { backgroundColor: "#02111B" } }}
          sx={{ bgcolor: "#D3D0CB" }}
        >
          <Tab
            label={<span style={{ color: "#02111B" }}>Secruity Summary</span>}
          >
            {" "}
          </Tab>
          <Tab
            label={
              <span style={{ color: "#02111B" }}>Secruity Identifier</span>
            }
          ></Tab>
          <Tab
            label={<span style={{ color: "#02111B" }}>Secruity Details</span>}
          ></Tab>
          <Tab label={<span style={{ color: "#02111B" }}>Risk</span>}></Tab>
          <Tab
            label={<span style={{ color: "#02111B" }}>Regulatory Details</span>}
          ></Tab>
          <Tab
            label={<span style={{ color: "#02111B" }}>Reference Data</span>}
          ></Tab>
          <Tab
            label={<span style={{ color: "#02111B" }}>Put Schedule</span>}
          ></Tab>
          <Tab
            label={<span style={{ color: "#02111B" }}>Pricing and Analytics</span>}
          ></Tab>
          <Tab
            label={<span style={{ color: "#02111B" }}>Call Schedule</span>}
          ></Tab>
        </Tabs>
      </AppBar>
      <TableViewData tabledata={bondData} type = {props.type}/>
    </>
  );
};

export default BondTabs;
