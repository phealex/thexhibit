import { CategoryCreateNestedManyWithoutUsersInput } from "./CategoryCreateNestedManyWithoutUsersInput";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { ProjectCreateNestedManyWithoutUsersInput } from "./ProjectCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  categories?: CategoryCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  profile?: ProfileWhereUniqueInput | null;
  project?: ProjectCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
  userType: "Recruiter" | "Talent";
};
