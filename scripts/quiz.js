let currentQuestionIndex = 0;
let score = 0;

function loadQuiz() {
    fetch('data/quiz.json')
        .then(response => response.json())
        .then(data => {
            displayQuestion(data);
        })
        .catch(error => console.error('Error fetching quiz data:', error));
}

function displayQuestion(quizData) {
    const quizContainer = document.getElementById('quiz-container');
    if (currentQuestionIndex < quizData.length) {
        const question = quizData[currentQuestionIndex];
        quizContainer.innerHTML = `
            <p>${question.question}</p>
            ${question.options.map((option, index) => `
                <button onclick="checkAnswer('${option}', '${question.answer}', ${quizData.length})">${option}</button>
            `).join('')}
        `;
    } else {
        quizContainer.innerHTML = `<p>Your score: ${score}/${quizData.length}</p>`;
    }
}

function checkAnswer(selectedOption, correctAnswer, totalQuestions) {
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    loadQuiz();
}

function showQuiz() {
    document.getElementById('welcome-text').style.display = 'none';
    document.getElementById('character-list').style.display = 'none';
    document.getElementById('character-details').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    currentQuestionIndex = 0;
    score = 0;
    loadQuiz();
}
