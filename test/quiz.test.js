const { checkAnswer, showQuiz, loadQuiz, displayQuestion, currentQuestionIndex, score } = require('./js/quiz');
const { JSDOM } = require('jsdom');

// Mock DOM setup - Use JSDOM to simulate the browser environment for DOM manipulation
const dom = new JSDOM('<!doctype html><html><body><div id="quiz-container"></div></body></html>');
global.document = dom.window.document;
global.window = dom.window;

describe('Quiz Functions', () => {
    beforeEach(() => {
        // Reset state before each test - Ensures each test starts with currentQuestionIndex and score set to 0, providing a clean slate for accurate testing.
        currentQuestionIndex = 0;
        score = 0;
    });

    // Testing Functionality:
    // Increment Score: Confirms checkAnswer correctly increments the score when the answer is correct.
    test('should increment score if the answer is correct', () => {
        const initialScore = score;
        checkAnswer('Benjamin', 'Benjamin');
        expect(score).toBe(initialScore + 1);
    });

    // Non-Increment Score: Ensures the score remains the same when the answer is incorrect.    
    test('should not increment score if the answer is incorrect', () => {
        const initialScore = score;
        checkAnswer('Joseph', 'Benjamin');
        expect(score).toBe(initialScore);
    });

    // Reset Quiz: Verifies that showQuiz correctly resets the quiz state.
    test('should reset quiz correctly when showQuiz is called', () => {
        currentQuestionIndex = 5;
        score = 3;
        showQuiz();
        expect(currentQuestionIndex).toBe(0);
        expect(score).toBe(0);
    });

    // Display Question: Checks that loadQuiz properly fetches and displays the first question.
    test('should display the first question', (done) => {
        // This mocks the fetch function to simulate fetching quiz data. The mock returns a resolved promise with quiz data.
        // Mocking fetch: Ensures the test doesn't make real network requests.
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve([
                    { question: "Who was the youngest son of Jacob?", options: ["Joseph", "Benjamin", "David", "Paul"], answer: "Benjamin" }
                ])
            })
        );

        // This calls the loadQuiz function, which is expected to fetch quiz data and display the first question
        // loadQuiz() and everything underneath it are part of the test to verify that the function correctly fetches and displays the first question.
        loadQuiz();

        // Asserting the result - This uses setTimeout to wait for the asynchronous loadQuiz function to complete. It then checks if the quizContainer contains the expected question text. The done() callback signals that the test has finished.
        // Verifies that the DOM is updated correctly after loadQuiz runs.
        setTimeout(() => {
            const quizContainer = document.getElementById('quiz-container');
            expect(quizContainer.innerHTML).toContain("Who was the youngest son of Jacob?");
            done();
        }, 100);
    });
});

// Mock DOM Setup:

// Using JSDOM to simulate the browser environment allows you to test DOM manipulations within your Node.jsenvironment.
// State Reset with beforeEach:

// The beforeEach function ensures that currentQuestionIndex and score are reset before each test runs. This helps to isolate tests so that one test's outcome does not affect another.

// Why Reset State Before Each Test?
// Isolation: Each test should be independent, meaning the result of one test should not impact another. Resetting the state ensures that tests do not interfere with each other.

// Consistency: Ensuring a consistent starting point for each test prevents false positives or negatives caused by leftover state from previous tests.

// Reproducibility: It makes tests more reliable and easier to reproduce, which is essential for debugging and maintaining your code.#

// Why This Setup Works:
// State Reset (beforeEach):

// Ensures each test starts with currentQuestionIndex and score set to 0, providing a clean slate for accurate testing.

// Testing Functionality:

// Increment Score: Confirms checkAnswer correctly increments the score when the answer is correct.

// Non-Increment Score: Ensures the score remains the same when the answer is incorrect.

// Reset Quiz: Verifies that showQuiz correctly resets the quiz state.

// Display Question: Checks that loadQuiz properly fetches and displays the first question.
