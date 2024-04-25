import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const OrientationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Orientations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Activity" source="activity" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Geographic Domain" source="geographicDomain" />
        <TextField label="ID" source="id" />
        <TextField label="Structure Code" source="structureCode" />
        <TextField label="Structure Label" source="structureLabel" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
