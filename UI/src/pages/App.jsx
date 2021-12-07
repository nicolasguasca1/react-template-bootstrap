import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

import Users from "./Users";

// pages
import Presentation from "./Presentation";
import Upgrade from "./Upgrade";
import DashboardOverview from "./dashboard/DashboardOverview";
import Transactions from "./Transactions";
import Places from "./Places";

import Orders from "./Orders";
import About from "./About";
import Settings from "./Settings";
import BootstrapTables from "./tables/BootstrapTables";
import Signin from "./Signin";
import Signup from "./Signup";
import Account from "./account";
import ForgotPassword from "./account/ForgotPassword";
import ResetPassword from "./account/ResetPassword";
import Lock from "./account/Lock";
import NotFound from "./errors/NotFound";
import ServerError from "./errors/ServerError";

// documentation pages
import DocsOverview from "./documentation/DocsOverview";
import DocsDownload from "./documentation/DocsDownload";
import DocsQuickStart from "./documentation/DocsQuickStart";
import DocsLicense from "./documentation/DocsLicense";
import DocsFolderStructure from "./documentation/DocsFolderStructure";
import DocsBuild from "./documentation/DocsBuild";
import DocsChangelog from "./documentation/DocsChangelog";

// components
import Sidebar from "../components/Sidebar";
import NewOrder from "../components/NewOrder";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Dashboard";
import Preloader from "../components/Preloader";

import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Breadcrumbs from "./components/Breadcrumbs";
import Buttons from "./components/Buttons";
import Forms from "./components/Forms";
import Modals from "./components/Modals";
import Navs from "./components/Navs";
import Navbars from "./components/Navbars";
import Pagination from "./components/Pagination";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import Rates from "../components/Rates";
import Tables from "./components/Tables";
import Tabs from "./components/Tabs";
import Tooltips from "./components/Tooltips";
import Toasts from "./components/Toasts";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          {" "}
          <Preloader show={loaded ? false : true} /> <Component {...props} />{" "}
        </>
      )}
    />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem("settingsVisible") === "false" ? false : true;
  };

  const [showSettings, setShowSettings] = useState(
    localStorageIsSettingsVisible
  );

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem("settingsVisible", !showSettings);
  };

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Preloader show={loaded ? false : true} />
          <Sidebar />

          <main className="content">
            <Navbar />
            <Component {...props} />
            <Footer
              toggleSettings={toggleSettings}
              showSettings={showSettings}
            />
          </main>
        </>
      )}
    />
  );
};

function App(props) {
  return (
    <Switch>
      {/* Outer app views */}
      <RouteWithLoader
        exact
        path={Routes.Presentation.path}
        component={Presentation}
      />
      <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
      <RouteWithLoader exact path={Routes.About.path} component={About} />
      <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
      <RouteWithLoader
        exact
        path={Routes.ForgotPassword.path}
        component={ForgotPassword}
      />
      <RouteWithLoader
        exact
        path={Routes.ResetPassword.path}
        component={ResetPassword}
      />
      <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
      <RouteWithLoader exact path={Routes.NotFound.path} component={NotFound} />
      <RouteWithLoader
        exact
        path={Routes.ServerError.path}
        component={ServerError}
      />
      <RouteWithLoader exact path={Routes.Account.path} component={Account} />
      {/* pages */}
      <RouteWithSidebar
        exact
        path={Routes.DashboardOverview.path}
        component={DashboardOverview}
      />
      <RouteWithSidebar exact path={Routes.Upgrade.path} component={Upgrade} />
      <RouteWithSidebar exact path={Routes.Orders.path} component={Orders} />
      <RouteWithSidebar exact path={Routes.Places.path} component={Places} />
      <RouteWithSidebar
        exact
        path={Routes.NewOrder.path}
        component={NewOrder}
      />
      <RouteWithSidebar
        exact
        path={Routes.Transactions.path}
        component={Transactions}
      />
      <RouteWithSidebar
        exact
        path={Routes.Settings.path}
        component={Settings}
      />
      <RouteWithSidebar exact path={Routes.Users.path} component={Users} />
      {/* register this new route */}
      <RouteWithSidebar
        exact
        path={Routes.BootstrapTables.path}
        component={BootstrapTables}
      />
      {/* components */}
      <RouteWithSidebar
        exact
        path={Routes.Accordions.path}
        component={Accordion}
      />
      <RouteWithSidebar exact path={Routes.Alerts.path} component={Alerts} />
      <RouteWithSidebar exact path={Routes.Badges.path} component={Badges} />
      <RouteWithSidebar
        exact
        path={Routes.Breadcrumbs.path}
        component={Breadcrumbs}
      />
      <RouteWithSidebar exact path={Routes.Buttons.path} component={Buttons} />
      <RouteWithSidebar exact path={Routes.Forms.path} component={Forms} />
      <RouteWithSidebar exact path={Routes.Modals.path} component={Modals} />
      <RouteWithSidebar exact path={Routes.Navs.path} component={Navs} />
      <RouteWithSidebar exact path={Routes.Navbars.path} component={Navbars} />
      <RouteWithSidebar
        exact
        path={Routes.Pagination.path}
        component={Pagination}
      />
      <RouteWithSidebar
        exact
        path={Routes.Popovers.path}
        component={Popovers}
      />
      <RouteWithSidebar
        exact
        path={Routes.Progress.path}
        component={Progress}
      />
      <RouteWithSidebar exact path={Routes.Tables.path} component={Tables} />
      <RouteWithSidebar exact path={Routes.Tabs.path} component={Tabs} />
      <RouteWithSidebar
        exact
        path={Routes.Tooltips.path}
        component={Tooltips}
      />
      <RouteWithSidebar exact path={Routes.Toasts.path} component={Toasts} />
      {/* documentation */}
      <RouteWithSidebar
        exact
        path={Routes.DocsOverview.path}
        component={DocsOverview}
      />
      <RouteWithSidebar
        exact
        path={Routes.DocsDownload.path}
        component={DocsDownload}
      />
      <RouteWithSidebar
        exact
        path={Routes.DocsQuickStart.path}
        component={DocsQuickStart}
      />
      <RouteWithSidebar
        exact
        path={Routes.DocsLicense.path}
        component={DocsLicense}
      />
      <RouteWithSidebar
        exact
        path={Routes.DocsFolderStructure.path}
        component={DocsFolderStructure}
      />
      <RouteWithSidebar
        exact
        path={Routes.DocsBuild.path}
        component={DocsBuild}
      />
      <RouteWithSidebar exact path={Routes.Rates.path} component={Rates} />
      <Redirect to={Routes.NotFound.path} />
    </Switch>
  );
}

export default App;
