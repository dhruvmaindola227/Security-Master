import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabPanel } from "@mui/lab";
import GetBonds from "./../GetBonds";
import { AppBar } from "@mui/material";
import TableViewData from "../TableViewData";
import axios from "axios";

const EquityTabs = (props) => {
  let [currentValue, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const allUrls = [
    "http://localhost:5144/getequity/e-sec-summary",
    "http://localhost:5144/getequity/e-sec-identifier",
    "http://localhost:5144/getequity/e-sec-details",
    "http://localhost:5144/getequity/e-risk",
    "http://localhost:5144/getequity/e-reg-details",
    "http://localhost:5144/getequity/e-ref-data",
    "http://localhost:5144/getequity/e-price-details",
    "http://localhost:5144/getequity/e-div-history",
  ];

  const [equityData, setData] = React.useState([""]);
  const result = async () => {
    await axios.get(allUrls[currentValue]).then((response) => {
      setData(response.data);
      // console.log("this is message  " , response , result["data"]);
    });
  };

  React.useEffect(() => {
    result();
  }, [currentValue]);

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
            label={<span style={{ color: "#02111B" }}>Security Summary</span>}
          >
            {" "}
          </Tab>
          <Tab
            label={
              <span style={{ color: "#02111B" }}>Security Identifier</span>
            }
          ></Tab>
          <Tab
            label={<span style={{ color: "#02111B" }}>Security Details</span>}
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
      <TableViewData tabledata={equityData} type={props.type} apiFx = {result} />
    </>
  );
};

export default EquityTabs;
