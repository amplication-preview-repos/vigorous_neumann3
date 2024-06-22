import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type AnswerCreateInput = {
  answerText?: string | null;
  question?: QuestionWhereUniqueInput | null;
};
