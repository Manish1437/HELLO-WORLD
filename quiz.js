const questions=[
    {
        question: "Which is larget animal in the world?",
        answers:[
            {text:"shark",correct:false},
            {text:"blue whele",correct:true},
            {text:"Elephent",correct:false},
            {text:"giraffe",correct:false},
    ]
    },
    {
        question: "Which is smallest country in the world?",
        answers:[
            {text:"Vaticon City",correct:true},
            {text:"Bhutan",correct:false},
            {text:"nepal",correct:false},
            {text:"Shri Lanka ",correct:false},
    ]
    },
    {
        question: "Which is largest Desert in the world?",
        answers:[
            {text:"Kalahani",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antarctica",correct:true},
    ]
    },
    {
        question: "Which is smallest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australla",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false},
    ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
function startQuiz(){   
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
  //  currentQuestion.answers.forEach(answer => {
    for(const answer of currentQuestion.answers){
        const button =document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer)
  //  });

}};

function resetState(){
   nextButton.style.display="none";
   while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
   }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const  isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("inCorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
         if(button.classList.correct === "true"){
            button.classList.add("correct");
         }
         button.ariaDisabled = true;
    });
    nextButton.style.display = "block";
}
    function showScore(){
        resetState();
        questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "play Again";
        nextButton.style.display = "block";

    }

function hendleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length),ṁ{
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        hendleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz()

