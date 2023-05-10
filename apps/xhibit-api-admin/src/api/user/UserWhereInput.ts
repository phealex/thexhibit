import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type UserWhereInput = {
  categories?: CategoryListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  profile?: ProfileWhereUniqueInput;
  project?: ProjectListRelationFilter;
  username?: StringFilter;
  userType?: "Recruiter" | "Talent";
};
