import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Project = {
  allow_negotiation: boolean | null;
  createdAt: Date;
  description: string;
  icon: string | null;
  id: string;
  images: JsonValue;
  mark_for_sale: boolean | null;
  name: string;
  price: number | null;
  slug: string;
  updatedAt: Date;
  users?: Array<User>;
};
