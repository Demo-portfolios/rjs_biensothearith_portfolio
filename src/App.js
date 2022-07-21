import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

import { ThemeContext } from './contexts/ThemeContext';
import { Main, BlogPage, ProjectPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'
import {isMobile,browserName,mobileModel,isWindows,isTablet,isIOS,isAndroid,isMacOs} from 'react-device-detect';
import './App.css'
import { contactsData } from './data/contactsData';

const handleSendInfo = () => {
  var isM=isMobile===true?"Mobile 📱":
  isMacOs===true?"Mac OS":
  isAndroid===true?"Android OS":
  isIOS===true?"IOS":
  isTablet===true?"Tablet":
  isWindows===true?"Windows OS":
  mobileModel?mobileModel:
  "PC 💻";

  var data={
    isMobile:isM,
    browserName:browserName
  }
  axios.post(`${contactsData.API}/start-up`, data).then((res) => {
  });
};
function App() {

  const { theme } = useContext(ThemeContext);
  handleSendInfo();
  // console.log(mobileModel,isMacOs)
  console.log("%cI'M RITH", `color:${theme.primary}; font-size:50px`);
  // console.log("%chttps://github.com/hhhrrrttt222111/developer-portfolio", `color:${theme.tertiary}; font-size:20px`);
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />

          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
