import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DOMICILIATION_TITLE_FIELD } from "../domiciliation/DomiciliationTitle";
import { TRANSFER_TITLE_FIELD } from "../transfer/TransferTitle";
import { STRUCTURE_TITLE_FIELD } from "../structure/StructureTitle";

export const EmployeeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Employees"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Domiciliation"
          source="domiciliation.id"
          reference="Domiciliation"
        >
          <TextField source={DOMICILIATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Relocation"
          source="transfer.id"
          reference="Transfer"
        >
          <TextField source={TRANSFER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Structure"
          source="structure.id"
          reference="Structure"
        >
          <TextField source={STRUCTURE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
