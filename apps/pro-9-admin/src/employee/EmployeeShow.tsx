import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EMPLOYEE_TITLE_FIELD } from "./EmployeeTitle";
import { DOMICILIATION_TITLE_FIELD } from "../domiciliation/DomiciliationTitle";
import { TRANSFER_TITLE_FIELD } from "../transfer/TransferTitle";
import { STRUCTURE_TITLE_FIELD } from "../structure/StructureTitle";

export const EmployeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Birth Country" source="birthCountry" />
        <TextField label="Birth Date" source="birthDate" />
        <TextField label="Birth Name" source="birthName" />
        <TextField label="Birth Place" source="birthPlace" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Domiciliation"
          source="domiciliation.id"
          reference="Domiciliation"
        >
          <TextField source={DOMICILIATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Names" source="names" />
        <TextField label="Nationality" source="nationality" />
        <ReferenceField
          label="Relocation"
          source="transfer.id"
          reference="Transfer"
        >
          <TextField source={TRANSFER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Sex" source="sex" />
        <ReferenceField
          label="Structure"
          source="structure.id"
          reference="Structure"
        >
          <TextField source={STRUCTURE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Dial" target="employeeId" label="Dials">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Kind" source="kind" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Value" source="value" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
