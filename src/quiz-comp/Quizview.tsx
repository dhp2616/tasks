import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Quizeditor } from "./Quizeditor";
import { Quiz } from "../interfaces/quiz";

export function QuizView({
    quiz,
    editQuiz,
    deleteQuiz
}: {
    quiz: Quiz;
    editQuiz: (id: string, newQuiz: Quiz) => void;
    deleteQuiz: (id: string) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    function changeEditing() {
        setEditing(!editing);
    }
    return editing ? (
        <Quizeditor
            changeEditing={changeEditing}
            quiz={quiz}
            editQuiz={editQuiz}
            deleteQuiz={deleteQuiz}
        ></Quizeditor>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h3>{quiz.title}</h3>
                    <div>
                        <Button
                            className="float-right"
                            size="sm"
                            onClick={changeEditing}
                        >
                            Edit Quiz
                        </Button>
                    </div>
                    <i> Number of Questions: {quiz.questions}</i>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{quiz.description}</p>
                </Col>
            </Row>
        </Container>
    );
}
