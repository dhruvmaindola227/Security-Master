import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GetEquities from './GetEquities';
import GetBonds from './GetBonds';
import TabBar from './TabBar';
import LandingPage from './LandingPage';
import EquityTabs from './Equity Tabs/EquityTabs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LandingPage/>
    <TabBar/>
  </React.StrictMode>
);

