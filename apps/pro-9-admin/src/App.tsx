import React, { useEffect, useState, useRef } from "react";
import { Admin, AuthProvider, DataProvider, Resource } from "react-admin";
import Keycloak from "keycloak-js";
import {
  keycloakClient,
  keycloakAuthProvider,
} from "./auth-provider/ra-auth-keycloak";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { StructureList } from "./structure/StructureList";
import { StructureCreate } from "./structure/StructureCreate";
import { StructureEdit } from "./structure/StructureEdit";
import { StructureShow } from "./structure/StructureShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { DialList } from "./dial/DialList";
import { DialCreate } from "./dial/DialCreate";
import { DialEdit } from "./dial/DialEdit";
import { DialShow } from "./dial/DialShow";
import { DomiciliationList } from "./domiciliation/DomiciliationList";
import { DomiciliationCreate } from "./domiciliation/DomiciliationCreate";
import { DomiciliationEdit } from "./domiciliation/DomiciliationEdit";
import { DomiciliationShow } from "./domiciliation/DomiciliationShow";
import { TransferList } from "./transfer/TransferList";
import { TransferCreate } from "./transfer/TransferCreate";
import { TransferEdit } from "./transfer/TransferEdit";
import { TransferShow } from "./transfer/TransferShow";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  const [keycloak, setKeycloak] = useState<Keycloak | null>();
  const authProvider = useRef<AuthProvider | null>();

  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const initKeyCloakClient = async () => {
      await keycloakClient.init({
        onLoad: "login-required",
      });
      authProvider.current = keycloakAuthProvider(keycloakClient, {});
      setKeycloak(keycloakClient);
    };
    if (!keycloak) {
      initKeyCloakClient();
    }
  }, [keycloak]);

  if (!dataProvider || !authProvider.current) {
    return <div>Loading</div>;
  }

  return (
    <div className="App">
      <Admin
        title={"Professional"}
        dataProvider={dataProvider}
        authProvider={authProvider.current}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Structure"
          list={StructureList}
          edit={StructureEdit}
          create={StructureCreate}
          show={StructureShow}
        />
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="Dial"
          list={DialList}
          edit={DialEdit}
          create={DialCreate}
          show={DialShow}
        />
        <Resource
          name="Domiciliation"
          list={DomiciliationList}
          edit={DomiciliationEdit}
          create={DomiciliationCreate}
          show={DomiciliationShow}
        />
        <Resource
          name="Transfer"
          list={TransferList}
          edit={TransferEdit}
          create={TransferCreate}
          show={TransferShow}
        />
      </Admin>
    </div>
  );
};

export default App;
