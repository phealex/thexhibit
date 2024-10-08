import { EnumUserUserType } from "./base/EnumUserUserType";

export interface ICreateUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType: EnumUserUserType
  skills: string[];
  experience: string;
  discipline?: string;
  employmentType?: string;
  phone: string;
  roles: string[]
}
