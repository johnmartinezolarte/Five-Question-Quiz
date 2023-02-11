import { Question } from "../models/Question.js";

export const questionList = await fetch('./data/data.json')
    .then(response => response.json())
    .then(data => {
        return data.map(question => new Question(question.question, question.choices, question.answer));
    });