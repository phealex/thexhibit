import { Category } from "../category/Category";
import { Profile } from "../profile/Profile";
import { Project } from "../project/Project";
import { JsonValue } from "type-fest";

export type User = {
  categories?: Array<Category>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  profile?: Profile | null;
  project?: Array<Project>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  userType?: "Recruiter" | "Talent";
};
