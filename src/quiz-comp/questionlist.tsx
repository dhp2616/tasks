import React from "react";
import { Question } from "../interfaces/question";
import { QuestionView } from "./Questionview";
import { Stack } from "react-bootstrap";

export function QuestionList({
    questions,
    editQuestion,
    deleteQuestion
}: {
    questions: Question[];
    editQuestion: (id: number, newQuestion: Question) => void;
    deleteQuestion: (id: number) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {questions.map((question: Question) => (
                <div key={question.id} className="bg-light border m-2 p-2">
                    <QuestionView
                        question={question}
                        editQuestion={editQuestion}
                        deleteQuestion={deleteQuestion}
                    ></QuestionView>
                </div>
            ))}
        </Stack>
    );
}
