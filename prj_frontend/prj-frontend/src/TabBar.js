import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GetBonds from './GetBonds';
import GetEquities from './GetEquities';
import { color } from '@mui/system';
import BondTabs from './Bond Tabs/BondsTabs';
import EquityTabs from './Equity Tabs/EquityTabs';


function TabPanel(props) {
  
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{style: {backgroundColor: "#EEC643"}}}>
          <Tab label= {<span style={{color : "#EEC643"}}>Equities</span>} {...a11yProps(0)} />
          <Tab label= {<span style={{color : "#EEC643"}}>Bonds</span>} {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/* <EquityTabs/> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
      {/* <BondTabs/> */}
      </TabPanel>
    </Box>
  );
}