import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DomiciliationTitle } from "../domiciliation/DomiciliationTitle";
import { TransferTitle } from "../transfer/TransferTitle";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
