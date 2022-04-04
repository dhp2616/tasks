import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import { QuizList } from "../quiz-comp/quizlist";
import { QuestionList } from "../quiz-comp/questionlist";
import { Question } from "../interfaces/question";
import QUIZZ from "../data/quiz.json";
import Q from "../data/quiz-questions.json";

const QUESTIONS = Q as Question[];
const myQuestions = QUESTIONS.map(
    (question): Question => ({
        ...question
    })
);
const Quizes = QUIZZ.map(
    (quiz): Quiz => ({
        ...quiz
    })
);

export function Quizzer(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>(Quizes);
    const [questions, setQuestions] = useState<Question[]>(myQuestions);
    function deleteQuiz(id: string) {
        setQuizzes(quizzes.filter((quiz: Quiz): boolean => quiz.id !== id));
    }
    function editQuestion(id: number, newQuestion: Question) {
        setQuestions(
            questions.map(
                (question: Question): Question =>
                    question.id == id ? newQuestion : question
            )
        );
    }
    function editQuiz(id: string, newQuiz: Quiz) {
        setQuizzes(
            quizzes.map((quiz: Quiz): Quiz => (quiz.id === id ? newQuiz : quiz))
        );
    }
    function deleteQuestion(id: number) {
        setQuestions(
            questions.filter((question: Question): boolean => question.id != id)
        );
    }
    return (
        <div className="quizzer">
            <div>
                <QuizList
                    quizzes={quizzes}
                    editQuiz={editQuiz}
                    deleteQuiz={deleteQuiz}
                ></QuizList>
            </div>
            <div>
                <QuestionList
                    questions={questions}
                    editQuestion={editQuestion}
                    deleteQuestion={deleteQuestion}
                ></QuestionList>
            </div>
        </div>
    );
}
