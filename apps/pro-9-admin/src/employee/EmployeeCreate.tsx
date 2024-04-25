import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DialTitle } from "../dial/DialTitle";
import { DomiciliationTitle } from "../domiciliation/DomiciliationTitle";
import { TransferTitle } from "../transfer/TransferTitle";
import { StructureTitle } from "../structure/StructureTitle";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Birth Country" source="birthCountry" />
        <DateTimeInput label="Birth Date" source="birthDate" />
        <TextInput label="Birth Name" source="birthName" />
        <TextInput label="Birth Place" source="birthPlace" />
        <ReferenceArrayInput
          source="contacts"
          reference="Dial"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DialTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="domiciliation.id"
          reference="Domiciliation"
          label="Domiciliation"
        >
          <SelectInput optionText={DomiciliationTitle} />
        </ReferenceInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Names" source="names" />
        <TextInput label="Nationality" source="nationality" />
        <ReferenceInput
          source="relocation.id"
          reference="Transfer"
          label="Relocation"
        >
          <SelectInput optionText={TransferTitle} />
        </ReferenceInput>
        <SelectInput
          source="sex"
          label="Sex"
          choices={[
            { label: "Homme", value: "Homme" },
            { label: "Femme", value: "Femme" },
            { label: "Inconnu", value: "Inconnu" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="structure.id"
          reference="Structure"
          label="Structure"
        >
          <SelectInput optionText={StructureTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
