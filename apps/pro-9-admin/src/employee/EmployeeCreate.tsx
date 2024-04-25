import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { DialTitle } from "../dial/DialTitle";
import { DomiciliationTitle } from "../domiciliation/DomiciliationTitle";
import { TransferTitle } from "../transfer/TransferTitle";
import { StructureTitle } from "../structure/StructureTitle";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
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
        <ReferenceInput
          source="relocation.id"
          reference="Transfer"
          label="Relocation"
        >
          <SelectInput optionText={TransferTitle} />
        </ReferenceInput>
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
