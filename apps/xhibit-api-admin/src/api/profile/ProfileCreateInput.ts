import { InputJsonValue } from "../../types";
import { UserCreateNestedManyWithoutProfilesInput } from "./UserCreateNestedManyWithoutProfilesInput";

export type ProfileCreateInput = {
  aboutProfile?: string | null;
  gender?: string | null;
  profile_category_details?: InputJsonValue;
  profile_educational_qualification?: InputJsonValue;
  profile_image_url?: string | null;
  user_Address?: InputJsonValue;
  users?: UserCreateNestedManyWithoutProfilesInput;
  user_social_profiles?: InputJsonValue;
};
