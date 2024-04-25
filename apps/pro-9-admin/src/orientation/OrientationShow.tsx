import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const OrientationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Activity" source="activity" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Geographic Domain" source="geographicDomain" />
        <TextField label="ID" source="id" />
        <TextField label="Structure Code" source="structureCode" />
        <TextField label="Structure Label" source="structureLabel" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
