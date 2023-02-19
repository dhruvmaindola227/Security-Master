import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabPanel } from "@mui/lab";
import GetBonds from "./../GetBonds";
import { AppBar } from "@mui/material";
import TableViewData from "../TableViewData";
import axios from "axios";

const EquityTabs = () => {
  let [currentValue, setValue] = React.useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [equityData , setData] = React.useState([""]);
  const result = async () => {
    await axios.get("http://localhost:5144/getBond/b-sec-summary")
    .then((response) => {
        setData(response.data);
        console.log("this is message  " , response , result["data"]);
    });
}

React.useEffect(() => {
  result();
},[]); 

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
            label={<span style={{ color: "#02111B" }}>Pricing Details</span>}
          ></Tab>
          <Tab
            label={<span style={{ color: "#02111B" }}>Divident History</span>}
          ></Tab>
        </Tabs>
      </AppBar>
      <TableViewData tabledata={equityData}/>
    </>
  );
};

export default EquityTabs;
