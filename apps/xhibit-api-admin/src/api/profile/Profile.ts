import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Profile = {
  aboutProfile: string | null;
  createdAt: Date;
  gender: string | null;
  id: string;
  profile_category_details: JsonValue;
  profile_educational_qualification: JsonValue;
  profile_image_url: string | null;
  updatedAt: Date;
  user_Address: JsonValue;
  users?: Array<User>;
  user_social_profiles: JsonValue;
};
