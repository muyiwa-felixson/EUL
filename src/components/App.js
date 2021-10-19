import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Layout, SideBarToogle, Theme } from './styledElements/lib';
import {PhotoBox} from './styledElements/general.style';
import UMS from './pages/ums';
import Logo from '../assets/fulllogo.svg';
import Login from './pages/login/index';
import WorkFlows from './pages/workflows';
import WorkFlow from './pages/workflows/newWorkflow';
import Dashboard from './pages/dashboard';
import Stage from './pages/workflows/newStage';

import createStore from '../redux/store'
import Applications from './pages/applications';
import ApplicationDetail from './pages/applications/applicationDetails';

const store = createStore();


class App extends Component {
  menuItems = [
    {
      name: "dashboard",
      icon: "flexibull-signal",
      label: "Dashboard",
      navlink: "/dashboard",
    },
    {
      name: "applications",
      icon: "flexibull-docs",
      label: "Applications",
      navlink: "/applications",
    },
    {
      name: "workflow-configurations",
      icon: "flexibull-icon-metro-flow-cascade",
      label: "Workflow Configurations",
      navlink: "/workflows",
    },
    {
      name: "user-management",
      icon: "flexibull-users",
      label: "User Management",
      navlink: "/users",
    },
  ];

  footMenuItems = [
    {
      name: "notifications",
      icon: "flexibull-bell",
      label: "Notifications",
      navlink: "/notice",
    },
    {
      name: "profile",
      icon: <div><PhotoBox active image="https://thispersondoesnotexist.com/image" /></div>,
      label: "Profile",
      navlink: "/profile",
    },
  ];

  render() {
    return (
      <Provider store={store}>
      <Router>
        <Route
          render={({ location }) => ['/', '/login'].includes(location.pathname)
            ? <Layout><Login /></Layout>
            :
            <><Layout
              withSideNav
              sideNavOpenWidth="280px"
              sideNavCloseWidth="80px"
              sideNavProps={{
                background: Theme.PrimaryFade,
                float: false,
                openWidth: "300px",
                borderline: Theme.PrimaryBorderColor,
                brand: (
                  <SideBarToogle style={{ height: '100%' }}>
                    <img src={Logo} alt="SAFApply" />
                  </SideBarToogle>
                ),
                menuList: this.menuItems,
                footMenuList: this.footMenuItems,
              }}
            >
              <Route exact path={'/dashboard'} component={Dashboard} />
              <Route exact path={'/users'} component={UMS} />
              <Route exact path={'/applications'} component={Applications} />
              <Route exact path={'/applications/detail'} component={ApplicationDetail} />
              <Route exact path={'/workflows'} component={WorkFlows} />
              <Route exact path={'/workflows/workflow'} component={WorkFlow} />
              <Route exact path={'/workflows/workflow/stage'} component={Stage} />
            </Layout>
            </>
          } />
      </Router>
      </Provider>
    );
  }
}

export default App;
