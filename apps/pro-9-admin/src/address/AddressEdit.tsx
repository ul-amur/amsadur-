import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DomiciliationTitle } from "../domiciliation/DomiciliationTitle";
import { TransferTitle } from "../transfer/TransferTitle";

export const AddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
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
      </SimpleForm>
    </Edit>
  );
};
