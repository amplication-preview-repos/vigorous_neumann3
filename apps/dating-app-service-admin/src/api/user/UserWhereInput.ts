import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  instagramId?: StringNullableFilter;
  lastName?: StringNullableFilter;
  profilePictures?: JsonFilter;
  username?: StringFilter;
};
