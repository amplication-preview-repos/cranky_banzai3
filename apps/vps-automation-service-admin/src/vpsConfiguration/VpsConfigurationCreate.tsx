import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const VpsConfigurationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="cpuCores" source="cpuCores" />
        <NumberInput step={1} label="diskSpace" source="diskSpace" />
        <TextInput label="osVersion" source="osVersion" />
        <NumberInput step={1} label="ramSize" source="ramSize" />
      </SimpleForm>
    </Create>
  );
};
