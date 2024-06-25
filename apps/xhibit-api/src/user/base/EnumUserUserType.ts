 
import { registerEnumType } from "@nestjs/graphql";

export enum EnumUserUserType {
  Recruiter = "Recruiter",
  Talent = "Talent",
}

registerEnumType(EnumUserUserType, {
  name: "EnumUserUserType",
});
