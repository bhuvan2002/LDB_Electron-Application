const quizData = [
    { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: '4' },
    // Add more questions here...
    { question: 'What is the capital of France?', options: ['Paris', 'Rome', 'London', 'Berlin'], answer: 'Paris' },

    { question: 'What is the chemical symbol for water?', options: ['H20', 'CO2', 'O2', 'H2SO4'], answer: 'H20' },

    { question: 'What is the largest planet in our solar system?', options: ['Mercury', 'Earth', 'Jupiter', 'Neptune'], answer: 'Jupiter' },

    { question: 'What is the powerhouse of the cell?', options: ['Mitochondria', 'Neucleus', 'Rhibhosomes', 'Ameba'], answer: 'Mitochondria' },

    { question: 'What is the square root of 144?', options: ['15', '14', '13', '12'], answer: '12' }
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
        require('electron').remote.getCurrentWindow().close();
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

navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        var video = document.createElement('video');
        var videoContainer = document.getElementById('videoContainer');
        video.srcObject = stream;
        video.autoplay = true;
        video.width = 200; // Adjust size as needed
        video.height = 150; // Adjust size as needed
        videoContainer.appendChild(video);
      })
      .catch(function(err) {
        console.log('Error accessing webcam:', err);
      });
