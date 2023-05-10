import { User } from "../user/User";

export type Category = {
  createdAt: Date;
  description: string | null;
  icon: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  user?: Array<User>;
};
