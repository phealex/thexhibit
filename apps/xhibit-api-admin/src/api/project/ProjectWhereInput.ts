import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type ProjectWhereInput = {
  allow_negotiation?: BooleanNullableFilter;
  description?: StringFilter;
  icon?: StringNullableFilter;
  id?: StringFilter;
  images?: JsonFilter;
  mark_for_sale?: BooleanNullableFilter;
  name?: StringFilter;
  price?: FloatNullableFilter;
  slug?: StringFilter;
  users?: UserListRelationFilter;
};
