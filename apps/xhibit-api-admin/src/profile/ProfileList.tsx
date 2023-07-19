import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"profiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="aboutProfile" source="aboutProfile" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField
          label="profileCategoryDetails"
          source="profile_category_details"
        />
        <TextField
          label="profileQualifications"
          source="profile_educational_qualification"
        />
        <TextField label="profileImageUrl" source="profile_image_url" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userAddress" source="user_Address" />
        <TextField label="socialProfiles" source="user_social_profiles" />
      </Datagrid>
    </List>
  );
};
