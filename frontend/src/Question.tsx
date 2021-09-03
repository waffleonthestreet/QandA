import React from 'react';
import { QuestionData } from './QuestionsData';

interface Props {
  data: QuestionData;
}

export const Question = ({ data }: Props) => {
  return (
    <div>
      <div>{data.title}</div>
      <p>{`Asked by ${
        data.userName
      } on ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}</p>
    </div>
  );
};
