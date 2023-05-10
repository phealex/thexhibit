import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CategoryWhereInput = {
  description?: StringNullableFilter;
  icon?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  user?: UserListRelationFilter;
};
