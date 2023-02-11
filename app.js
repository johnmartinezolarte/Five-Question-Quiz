// @ts-check

import { questionList } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";

const renderPage = (quiz, ui) => {

    if(quiz.isEnded()) {
        ui.showScore(quiz.score, quiz.questions.length);

    }else {
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showChoices(quiz.getQuestionIndex().choices);
        ui.showProgress(quiz.questions.length, quiz.questionIndex+1);
    }

    ui.showButtons(quiz.questions.length, quiz.questionIndex, (valueButton) => {
        if(valueButton === 'Restart') {
            main();

        }else {
            let activeInput = document.querySelector('input[name="option"]:checked');
            if(activeInput) {
                quiz.guess(activeInput.value);
                renderPage(quiz, ui);

            }else {
                ui.showAlert();
            }
        }
    });
}

function main(){
    const quiz = new Quiz(questionList);
    const ui = new UI();
    renderPage(quiz, ui);
}

main();