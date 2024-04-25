import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { DOMICILIATION_TITLE_FIELD } from "../domiciliation/DomiciliationTitle";
import { TRANSFER_TITLE_FIELD } from "../transfer/TransferTitle";

export const AddressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
