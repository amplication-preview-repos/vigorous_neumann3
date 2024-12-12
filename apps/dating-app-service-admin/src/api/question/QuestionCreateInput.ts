import { AnswerCreateNestedManyWithoutQuestionsInput } from "./AnswerCreateNestedManyWithoutQuestionsInput";

export type QuestionCreateInput = {
  answers?: AnswerCreateNestedManyWithoutQuestionsInput;
  questionText?: string | null;
};
