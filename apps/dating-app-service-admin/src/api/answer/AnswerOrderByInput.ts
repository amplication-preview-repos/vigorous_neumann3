import { SortOrder } from "../../util/SortOrder";

export type AnswerOrderByInput = {
  answerText?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  questionId?: SortOrder;
  updatedAt?: SortOrder;
};
