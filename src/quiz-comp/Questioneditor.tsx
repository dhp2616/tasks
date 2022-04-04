import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Question } from "../interfaces/question";

export function QuestionEditor({
    changeEditing,
    question,
    editQuestion,
    deleteQuestion
}: {
    changeEditing: () => void;
    question: Question;
    editQuestion: (id: number, newQuestion: Question) => void;
    deleteQuestion: (id: number) => void;
}): JSX.Element {
    const [name, setName] = useState<string>(question.name);
    const [body, setBody] = useState<string>(question.body);
    function save() {
        editQuestion(question.id, {
            ...question,
            name: name,
            body: body
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
                    <h3>Questions:</h3>
                    <Form.Group controlId="formQuestionName" as={Row}>
                        <Form.Label column sm={2}>
                            Name:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={name}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setName(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formQuestionBody" as={Row}>
                        <Form.Label column sm={2}>
                            Body:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={body}
                                onChange={(
                                    event: React.ChangeEvent<HTMLTextAreaElement>
                                ) => setBody(event.target.value)}
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
                        onClick={() => deleteQuestion(question.id)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete Question
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
