import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
} from "react-admin";

export const ProjectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
