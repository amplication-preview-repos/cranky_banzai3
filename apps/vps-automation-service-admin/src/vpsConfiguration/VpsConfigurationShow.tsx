import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const VpsConfigurationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="cpuCores" source="cpuCores" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="diskSpace" source="diskSpace" />
        <TextField label="ID" source="id" />
        <TextField label="osVersion" source="osVersion" />
        <TextField label="ramSize" source="ramSize" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
