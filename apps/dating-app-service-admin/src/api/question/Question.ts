import { Answer } from "../answer/Answer";

export type Question = {
  answers?: Array<Answer>;
  createdAt: Date;
  id: string;
  questionText: string | null;
  updatedAt: Date;
};
