const quizData = [
    { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: '4' },
    // Add more questions here...
    { question: 'What is the capital of France?', options: ['Paris', 'Rome', 'London', 'Berlin'], answer: 'Paris' }
];

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreText = document.getElementById('score');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.innerText = currentQuizData.question;
    optionsContainer.innerHTML = '';
    currentQuizData.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        optionsContainer.appendChild(button);
        button.addEventListener('click', selectOption);
    });
}

function selectOption(event) {
    const selectedOption = event.target.innerText;
    const currentQuizData = quizData[currentQuestion];
    if (selectedOption === currentQuizData.answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.classList.add('hidden');
    optionsContainer.classList.add('hidden');
    nextButton.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreText.innerText = `You scored ${score} out of ${quizData.length}`;
}

loadQuestion();
nextButton.addEventListener('click', loadQuestion);

