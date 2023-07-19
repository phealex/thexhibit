import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PROFILE_TITLE_FIELD } from "./ProfileTitle";

export const ProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="User" target="profileId" label="Users">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <ReferenceField
              label="profile"
              source="profile.id"
              reference="Profile"
            >
              <TextField source={PROFILE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Roles" source="roles" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
            <TextField label="userType" source="userType" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
