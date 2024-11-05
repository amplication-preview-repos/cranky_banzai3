import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VpsConfigurationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"VPSConfigurations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="cpuCores" source="cpuCores" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="diskSpace" source="diskSpace" />
        <TextField label="ID" source="id" />
        <TextField label="osVersion" source="osVersion" />
        <TextField label="ramSize" source="ramSize" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
