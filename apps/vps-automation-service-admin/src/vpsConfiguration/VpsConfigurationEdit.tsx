import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const VpsConfigurationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="cpuCores" source="cpuCores" />
        <NumberInput step={1} label="diskSpace" source="diskSpace" />
        <TextInput label="osVersion" source="osVersion" />
        <NumberInput step={1} label="ramSize" source="ramSize" />
      </SimpleForm>
    </Edit>
  );
};
