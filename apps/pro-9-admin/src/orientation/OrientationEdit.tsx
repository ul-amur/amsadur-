import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const OrientationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Activity" source="activity" />
        <TextInput label="Geographic Domain" source="geographicDomain" />
        <TextInput label="Structure Code" source="structureCode" />
        <TextInput label="Structure Label" source="structureLabel" />
      </SimpleForm>
    </Edit>
  );
};
