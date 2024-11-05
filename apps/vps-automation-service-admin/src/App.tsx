import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VpsConfigurationList } from "./vpsConfiguration/VpsConfigurationList";
import { VpsConfigurationCreate } from "./vpsConfiguration/VpsConfigurationCreate";
import { VpsConfigurationEdit } from "./vpsConfiguration/VpsConfigurationEdit";
import { VpsConfigurationShow } from "./vpsConfiguration/VpsConfigurationShow";
import { DeploymentList } from "./deployment/DeploymentList";
import { DeploymentCreate } from "./deployment/DeploymentCreate";
import { DeploymentEdit } from "./deployment/DeploymentEdit";
import { DeploymentShow } from "./deployment/DeploymentShow";
import { ErrorNotificationList } from "./errorNotification/ErrorNotificationList";
import { ErrorNotificationCreate } from "./errorNotification/ErrorNotificationCreate";
import { ErrorNotificationEdit } from "./errorNotification/ErrorNotificationEdit";
import { ErrorNotificationShow } from "./errorNotification/ErrorNotificationShow";
import { ScriptList } from "./script/ScriptList";
import { ScriptCreate } from "./script/ScriptCreate";
import { ScriptEdit } from "./script/ScriptEdit";
import { ScriptShow } from "./script/ScriptShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"VPS Automation Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="VpsConfiguration"
          list={VpsConfigurationList}
          edit={VpsConfigurationEdit}
          create={VpsConfigurationCreate}
          show={VpsConfigurationShow}
        />
        <Resource
          name="Deployment"
          list={DeploymentList}
          edit={DeploymentEdit}
          create={DeploymentCreate}
          show={DeploymentShow}
        />
        <Resource
          name="ErrorNotification"
          list={ErrorNotificationList}
          edit={ErrorNotificationEdit}
          create={ErrorNotificationCreate}
          show={ErrorNotificationShow}
        />
        <Resource
          name="Script"
          list={ScriptList}
          edit={ScriptEdit}
          create={ScriptCreate}
          show={ScriptShow}
        />
      </Admin>
    </div>
  );
};

export default App;
