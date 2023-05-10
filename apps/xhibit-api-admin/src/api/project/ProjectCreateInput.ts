import { InputJsonValue } from "../../types";
import { UserCreateNestedManyWithoutProjectsInput } from "./UserCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  allow_negotiation?: boolean | null;
  description: string;
  icon?: string | null;
  images: InputJsonValue;
  mark_for_sale?: boolean | null;
  name: string;
  price?: number | null;
  slug: string;
  users?: UserCreateNestedManyWithoutProjectsInput;
};
