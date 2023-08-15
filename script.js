const quizData = [
    {
        question: "Which is valid C expression?",
        a: "int $my_num = 10000",
        b: "int my num = 1000",
        c: "int my_num = 100000",
        d: "int my_num = 100,000",
        correct: "c",
    },
    {
        question: "What is short int in C programming?",
        a: " The basic data type of C",
        b: "Qualifier",
        c: "Short is the qualifier and int is the basic data type",
        d: "All of the mentioned",
        correct: "c",
    },
    {
        question: "Which keyword is used to prevent any changes in the variable within a C program?",
        a: "immutable",
        b: "mutable",
        c: "const",
        d: "volatile",
        correct: "c",
    },
    {
        question: "What is the result of logical or relational expression in C?",
        a: "True or False",
        b: "0 or 1",
        c: "0 if an expression is false and any positive number if an expression is true",
        d: "None of the mentioned",
        correct: "b",
    },
    {
        question: "Where in C the order of precedence of operators do not exist?",
        a: "Within conditional statements, if, else",
        b: "Within while, do-while",
        c: "Within a macro definition",
        d: "None of the mentioned",
        correct: "d",
    },
    {
        question: "Java Multiple Choice Questions Starts",
        a: "Very Interested",
        b: "Boring",
        c: "Wonderful",
        d: "Shall We Go",
        correct: "a",
    },
    {
        question: "Which of the following is not a Java features?",
        a: "Dynamic",
        b: "Architecture Neutral",
        c: "Use of pointers",
        d: "Object-oriented",
        correct: "c",
    },
    {
        question: "What is the return type of the hashCode() method in the Object class?",
        a: "object",
        b: "long",
        c: "int",
        d: "void",
        correct: "c",
    },
    {
        question: "What does the expression float a = 35 / 0 return?",
        a: "0",
        b: "1",
        c: "Infinity",
        d: "Run time exception",
        correct: "c",
    },
    {
        question: "Which of the following is a reserved keyword in Java?",
        a: "strictfp",
        b: "main",
        c: "object",
        d: "system",
        correct: "a",
    },
    {
        question: "Which of the following is a mutable class in java?",
        a: "java.lang.String",
        b: "java.lang.byte",
        c: "java.lang.Short",
        d: "None of these",
        correct: "a",
    },

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})