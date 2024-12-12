import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  instagramId?: string | null;
  lastName?: string | null;
  password: string;
  profilePictures?: InputJsonValue;
  roles: InputJsonValue;
  username: string;
};
