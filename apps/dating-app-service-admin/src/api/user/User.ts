import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  instagramId: string | null;
  lastName: string | null;
  profilePictures: JsonValue;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
