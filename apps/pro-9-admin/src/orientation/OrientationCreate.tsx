import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const OrientationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Activity" source="activity" />
        <TextInput label="Geographic Domain" source="geographicDomain" />
        <TextInput label="Structure Code" source="structureCode" />
        <TextInput label="Structure Label" source="structureLabel" />
      </SimpleForm>
    </Create>
  );
};
