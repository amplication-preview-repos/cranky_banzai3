import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ScriptTitle } from "../script/ScriptTitle";

export const DeploymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="endTime" source="endTime" />
        <TextInput label="log" multiline source="log" />
        <ReferenceInput source="script.id" reference="Script" label="Script">
          <SelectInput optionText={ScriptTitle} />
        </ReferenceInput>
        <DateTimeInput label="startTime" source="startTime" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
