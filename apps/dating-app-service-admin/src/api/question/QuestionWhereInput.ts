import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type QuestionWhereInput = {
  answers?: AnswerListRelationFilter;
  id?: StringFilter;
  questionText?: StringNullableFilter;
};
