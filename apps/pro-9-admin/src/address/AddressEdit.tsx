import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DomiciliationTitle } from "../domiciliation/DomiciliationTitle";
import { TransferTitle } from "../transfer/TransferTitle";

export const AddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Complement" source="complement" />
        <TextInput label="Country" source="country" />
        <TextInput label="Insee Cog" source="inseeCog" />
        <TextInput label="Precision 1" source="precision1" />
        <TextInput label="Precision 2" source="precision_2" />
        <ReferenceInput
          source="principalAddresses.id"
          reference="Domiciliation"
          label="Principal Address"
        >
          <SelectInput optionText={DomiciliationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="secondaryAddresses.id"
          reference="Transfer"
          label="Secondary Addresses"
        >
          <SelectInput optionText={TransferTitle} />
        </ReferenceInput>
        <TextInput label="Town" source="town" />
      </SimpleForm>
    </Edit>
  );
};
