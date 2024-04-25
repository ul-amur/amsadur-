import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { EmployeeTitle } from "../employee/EmployeeTitle";

export const DialCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <SelectInput
          source="kind"
          label="Kind"
          choices={[
            {
              label: "Telephone Professionnel",
              value: "TelephoneProfessionnel",
            },
            { label: "Email Personnel ", value: "EmailPersonnel" },
            { label: "Email Professionnel", value: "EmailProfessionnel" },
            { label: "Telephone Fix", value: "TelephoneFix" },
            { label: "Telephone Mobile", value: "TelephoneMobile" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Create>
  );
};
