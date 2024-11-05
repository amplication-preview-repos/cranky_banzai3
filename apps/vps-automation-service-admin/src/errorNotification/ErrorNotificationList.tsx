import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ErrorNotificationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ErrorNotifications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="errorType" source="errorType" />
        <TextField label="ID" source="id" />
        <BooleanField label="isResolved" source="isResolved" />
        <TextField label="message" source="message" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
