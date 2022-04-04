import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";

export function Quizeditor({
    changeEditing,
    quiz,
    editQuiz,
    deleteQuiz
}: {
    changeEditing: () => void;
    quiz: Quiz;
    editQuiz: (id: string, newQuiz: Quiz) => void;
    deleteQuiz: (id: string) => void;
}): JSX.Element {
    const [title, setTitle] = useState<string>(quiz.title);
    const [questionNum, setQuestionNum] = useState<string>(
        quiz.questions.toString()
    );
    const [description, setDescription] = useState<string>(quiz.description);
    function save() {
        editQuiz(quiz.id, {
            ...quiz,
            title: title,
            questions: parseInt(questionNum) || 0,
            description: description
        });
        changeEditing();
    }

    function cancel() {
        changeEditing();
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Quiz Information:</h3>
                    {/* Title */}
                    <Form.Group controlId="formQuizTitle" as={Row}>
                        <Form.Label column sm={2}>
                            Title:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={title}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setTitle(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/* Number of Questions */}
                    <Form.Group controlId="formNuberOfQuestions" as={Row}>
                        <Form.Label column sm={2}>
                            Number of Questions:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="number"
                                value={questionNum}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setQuestionNum(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/* Description */}
                    <Form.Group controlId="formQuizDescription" as={Row}>
                        <Form.Label column sm={2}>
                            Description:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={description}
                                onChange={(
                                    event: React.ChangeEvent<HTMLTextAreaElement>
                                ) => setDescription(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/* Save/Cancel */}
                    <Button onClick={save} variant="success" className="me-4">
                        Save
                    </Button>
                    <Button onClick={cancel} variant="warning" className="me-5">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => deleteQuiz(quiz.id)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete Quiz
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
