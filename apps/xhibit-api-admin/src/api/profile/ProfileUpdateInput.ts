import { InputJsonValue } from "../../types";
import { UserUpdateManyWithoutProfilesInput } from "./UserUpdateManyWithoutProfilesInput";

export type ProfileUpdateInput = {
  aboutProfile?: string | null;
  gender?: string | null;
  profile_category_details?: InputJsonValue;
  profile_educational_qualification?: InputJsonValue;
  profile_image_url?: string | null;
  user_Address?: InputJsonValue;
  users?: UserUpdateManyWithoutProfilesInput;
  user_social_profiles?: InputJsonValue;
};
