import { UserCreateNestedManyWithoutCategoriesInput } from "./UserCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  description?: string | null;
  icon?: string | null;
  name?: string | null;
  user?: UserCreateNestedManyWithoutCategoriesInput;
};
