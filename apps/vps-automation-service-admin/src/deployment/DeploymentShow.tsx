import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SCRIPT_TITLE_FIELD } from "../script/ScriptTitle";

export const DeploymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="endTime" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="log" source="log" />
        <ReferenceField label="Script" source="script.id" reference="Script">
          <TextField source={SCRIPT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="startTime" source="startTime" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
