import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { DeploymentTitle } from "../deployment/DeploymentTitle";

export const ScriptEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="creationDate" source="creationDate" />
        <ReferenceArrayInput source="deployments" reference="Deployment">
          <SelectArrayInput
            optionText={DeploymentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <BooleanInput label="isActive" source="isActive" />
        <DateTimeInput label="lastUpdated" source="lastUpdated" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
