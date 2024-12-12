import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type AnswerUpdateInput = {
  answerText?: string | null;
  question?: QuestionWhereUniqueInput | null;
};
