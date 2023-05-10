import { UserUpdateManyWithoutCategoriesInput } from "./UserUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  description?: string | null;
  icon?: string | null;
  name?: string | null;
  user?: UserUpdateManyWithoutCategoriesInput;
};
