import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DOMICILIATION_TITLE_FIELD } from "../domiciliation/DomiciliationTitle";
import { TRANSFER_TITLE_FIELD } from "../transfer/TransferTitle";

export const AddressList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Addresses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Principal Address"
          source="domiciliation.id"
          reference="Domiciliation"
        >
          <TextField source={DOMICILIATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Secondary Addresses"
          source="transfer.id"
          reference="Transfer"
        >
          <TextField source={TRANSFER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
