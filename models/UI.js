export class UI {
    constructor() {}

    /**
     * 
     * @param {string} text question to render
     */
    showQuestion(text) {
        const questionTitle = document.getElementById('question');
        questionTitle.innerText = text;
        const alerts = document.querySelector('.alerts');
        alerts.innerHTML = '';
    }
    
    /**
     * 
     * @param {string[]} choices the choices of the question
     */
    showChoices(choices) {
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';

        for(let i = 0; i < choices.length; i++) {
            const div = document.createElement('div');
            div.className = 'answer';

            const input = document.createElement('input');
            input.setAttribute('type','radio');
            input.setAttribute('id', `${i+1}`);
            input.setAttribute('name', 'option');
            input.className = 'select-answer';

            const label = document.createElement('label');
            label.setAttribute('for', `${i+1}`);
            label.className = 'text-answer';

            label.innerText = choices[i];

            input.value= choices[i];

            div.append(input, label);
            choicesContainer.append(div);
        }
    }

    showButtons(totalQuestions, currentQuestion, callback) {
        const buttons = document.querySelector('.buttons');
        buttons.innerHTML = '';

        const button = document.createElement('input');
        button.setAttribute('type', 'button');

        if(totalQuestions === currentQuestion) {
            const nameQuestion = document.getElementById('question');
            const choices = document.getElementById('choices');
            nameQuestion.innerHTML = '';
            choices.innerHTML = '';
            const alerts = document.querySelector('.alerts');
            alerts.innerHTML = '';
            button.setAttribute('id', 'restart');
            button.value = 'Restart';

        }else if(currentQuestion < totalQuestions-1){
            button.setAttribute('id', 'next');
            button.value = 'Next';

        }else {
            button.setAttribute('id', 'finish');
            button.value = 'Finish';
        }
        
        buttons.appendChild(button);

        button.addEventListener('click', () => callback(button.value));
    }

    showAlert() {
        const alerts = document.querySelector('.alerts');
        alerts.innerHTML = '';
        const p = document.createElement('p');
        p.className = 'alert';
        const text = document.createTextNode('Please check any option!');
        p.appendChild(text);
        alerts.append(p);
    }

    showProgress(totalQuestions, currentQuestion) {
        const info = document.querySelector('.info');
        info.innerHTML = '';

        const progress = document.createElement('p');
        progress.className = 'progress';

        info.append(progress);
        progress.textContent = `Question ${currentQuestion} of ${totalQuestions}`;
    }

    showScore(result, totalQuestions) {
        const info = document.querySelector('.info');
        info.innerHTML = '';

        const score = document.createElement('p');
        score.className = 'score';

        info.append(score);

        score.textContent = `Your Score is ${result} of ${totalQuestions}`;
    }
}