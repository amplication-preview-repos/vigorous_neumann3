import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  instagramId?: string | null;
  lastName?: string | null;
  password?: string;
  profilePictures?: InputJsonValue;
  roles?: InputJsonValue;
  username?: string;
};
