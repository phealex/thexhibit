import { Profile as TProfile } from "../api/profile/Profile";

export const PROFILE_TITLE_FIELD = "gender";

export const ProfileTitle = (record: TProfile): string => {
  return record.gender || String(record.id);
};
