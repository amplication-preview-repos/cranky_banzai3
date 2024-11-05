import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SCRIPT_TITLE_FIELD } from "../script/ScriptTitle";

export const DeploymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Deployments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="endTime" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="log" source="log" />
        <ReferenceField label="Script" source="script.id" reference="Script">
          <TextField source={SCRIPT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="startTime" source="startTime" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
