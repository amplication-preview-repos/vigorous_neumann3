import { Question } from "../question/Question";

export type Answer = {
  answerText: string | null;
  createdAt: Date;
  id: string;
  question?: Question | null;
  updatedAt: Date;
};
