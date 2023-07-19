import { CategoryUpdateManyWithoutUsersInput } from "./CategoryUpdateManyWithoutUsersInput";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { ProjectUpdateManyWithoutUsersInput } from "./ProjectUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  categories?: CategoryUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  profile?: ProfileWhereUniqueInput | null;
  project?: ProjectUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
  userType?: "Recruiter" | "Talent";
};
