import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MatchWhereInput = {
  id?: StringFilter;
  user1?: StringNullableFilter;
  user2?: StringNullableFilter;
};
