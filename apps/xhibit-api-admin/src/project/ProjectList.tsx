import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  DateField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ProjectList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"projects"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="allowNegotiation" source="allow_negotiation" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="icon" source="icon" />
        <TextField label="ID" source="id" />
        <TextField label="images" source="images" />
        <BooleanField label="markForSale" source="mark_for_sale" />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <TextField label="slug" source="slug" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
