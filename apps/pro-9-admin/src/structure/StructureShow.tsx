import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DOMICILIATION_TITLE_FIELD } from "../domiciliation/DomiciliationTitle";
import { TRANSFER_TITLE_FIELD } from "../transfer/TransferTitle";
import { STRUCTURE_TITLE_FIELD } from "./StructureTitle";

export const StructureShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Employee"
          target="structureId"
          label="Employees"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
