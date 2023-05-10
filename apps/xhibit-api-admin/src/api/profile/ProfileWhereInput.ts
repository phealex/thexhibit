import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type ProfileWhereInput = {
  aboutProfile?: StringNullableFilter;
  gender?: StringNullableFilter;
  id?: StringFilter;
  profile_category_details?: JsonFilter;
  profile_educational_qualification?: JsonFilter;
  profile_image_url?: StringNullableFilter;
  user_Address?: JsonFilter;
  users?: UserListRelationFilter;
  user_social_profiles?: JsonFilter;
};
