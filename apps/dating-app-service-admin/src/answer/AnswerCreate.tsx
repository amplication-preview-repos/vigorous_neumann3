import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QuestionTitle } from "../question/QuestionTitle";

export const AnswerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="answerText" multiline source="answerText" />
        <ReferenceInput
          source="question.id"
          reference="Question"
          label="Question"
        >
          <SelectInput optionText={QuestionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
