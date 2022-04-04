import React, { useState } from "react";
//import { RecordQuestionControls } from "./RecordQuestionControls";
import { Question } from "../interfaces/question";
import { QuestionEditor } from "./Questioneditor";
import { Button } from "react-bootstrap";

export function QuestionView({
    question,
    editQuestion,
    deleteQuestion
}: {
    question: Question;
    editQuestion: (id: number, newQuestion: Question) => void;
    deleteQuestion: (id: number) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    function changeEditing() {
        setEditing(!editing);
    }
    return editing ? (
        <QuestionEditor
            changeEditing={changeEditing}
            question={question}
            editQuestion={editQuestion}
            deleteQuestion={deleteQuestion}
        ></QuestionEditor>
    ) : (
        <div>
            <Button className="float-right" size="sm" onClick={changeEditing}>
                Edit Questions
            </Button>
        </div>
    );
}
