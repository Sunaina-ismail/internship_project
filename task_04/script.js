const questions = [
    {
      question: "What is the basic unit of life?",
      options: ["Cell", "Tissue", "Organ", "Organism"],
      answer: "Cell",
    },
    {
      question: "Which organ pumps blood throughout the body?",
      options: ["Liver", "Lungs", "Heart", "Brain"],
      answer: "Heart",
    },
    {
      question: "Which gas do humans breathe in for survival?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      answer: "Oxygen",
    },
    {
      question: "What do plants need for photosynthesis?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Water"],
      answer: "Carbon Dioxide",
    },
    {
      question: "Which body system controls movement and coordination?",
      options: ["Digestive System", "Nervous System", "Circulatory System", "Respiratory System"],
      answer: "Nervous System",
    },
  ]
  
  let currentQuestionIndex = 0
  let score = 0
  let selectedOption = null
  let isAnswerSubmitted = false
  
 
  function initQuiz() {
    document.getElementById("total-questions").textContent = questions.length
    loadQuestion()
    updateProgressBar()
  }

  function loadQuestion() {
    isAnswerSubmitted = false
    selectedOption = null
  
    const question = questions[currentQuestionIndex]
    document.getElementById("question").textContent = question.question
    document.getElementById("current-question").textContent = currentQuestionIndex + 1
  
    const optionsContainer = document.getElementById("options")
    optionsContainer.innerHTML = "" 
    question.options.forEach((option, index) => {
      const optionElement = document.createElement("div")
      optionElement.classList.add("option")
      optionElement.dataset.value = option
  
      optionElement.innerHTML = `
              <div class="option-marker"></div>
              <input type="radio" name="option" value="${option}" id="option${index}" />
              <label for="option${index}">${option}</label>
          `
  
      optionElement.addEventListener("click", () => selectOption(optionElement, option))
  
      optionsContainer.appendChild(optionElement)
    })
  
    const resultElement = document.getElementById("result")
    resultElement.textContent = ""
    resultElement.className = "result"
  
    const submitBtn = document.getElementById("submit-btn")
    submitBtn.disabled = true
    submitBtn.textContent = "Submit Answer"
    submitBtn.onclick = submitAnswer
  }
  
 
  function selectOption(optionElement, option) {
    if (isAnswerSubmitted) return
  
   
    const allOptions = document.querySelectorAll(".option")
    allOptions.forEach((opt) => opt.classList.remove("selected"))
  
    
    optionElement.classList.add("selected")
    selectedOption = option
  
   
    document.getElementById("submit-btn").disabled = false
  }
  
 
  function submitAnswer() {
    if (!selectedOption || isAnswerSubmitted) return
  
    isAnswerSubmitted = true
    const correctAnswer = questions[currentQuestionIndex].answer
    const isCorrect = selectedOption === correctAnswer
  
    
    if (isCorrect) {
      score++
    }
  

    const resultElement = document.getElementById("result")
  
    if (isCorrect) {
   
      resultElement.textContent = "Correct!"
      resultElement.className = "result show success"
    } else {
 
      resultElement.textContent = `Incorrect! The correct answer is ${correctAnswer}.`
      resultElement.className = "result show error"
  
      
      const options = document.querySelectorAll(".option")
      options.forEach((option) => {
        const optionValue = option.dataset.value
  
        if (optionValue === correctAnswer) {
          
          option.classList.add("correct")
        } else if (optionValue === selectedOption) {
         
          option.classList.add("incorrect")
        }
      })
    }
  
    const submitBtn = document.getElementById("submit-btn")
    submitBtn.textContent = currentQuestionIndex < questions.length - 1 ? "Next Question" : "Show Results"
    submitBtn.onclick = nextQuestion
  }
  

  function nextQuestion() {
    currentQuestionIndex++
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion()
      updateProgressBar()
    } else {
      showFinalScore()
    }
  }
  
  function updateProgressBar() {
    const progressPercentage = (currentQuestionIndex / questions.length) * 100
    document.getElementById("progress").style.width = `${progressPercentage}%`
  }

  function showFinalScore() {
    document.getElementById("question-container").style.display = "none"
    document.getElementById("submit-btn").style.display = "none"
    document.getElementById("result").style.display = "none"
  
    const finalScoreElement = document.getElementById("final-score")
    finalScoreElement.style.display = "block"
  
    const percentage = Math.round((score / questions.length) * 100)
    let message = ""
  
    if (percentage === 100) {
      message = "Perfect! You're a genius!"
    } else if (percentage >= 80) {
      message = "Excellent! You know your stuff!"
    } else if (percentage >= 60) {
      message = "Good job! You passed the quiz!"
    } else if (percentage >= 40) {
      message = "Not bad, but you can do better!"
    } else {
      message = "Keep studying and try again!"
    }
  
    finalScoreElement.innerHTML = `
          <h2>Quiz Completed!</h2>
          <div class="score-number">${score}/${questions.length}</div>
          <div class="score-percentage">${percentage}%</div>
          <p class="score-text">${message}</p>
          <button class="restart-btn" onclick="restartQuiz()">Restart Quiz</button>
      `
  
    document.getElementById("progress").style.width = "100%"
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0
    score = 0
  
    
    document.getElementById("question-container").style.display = "block"
    document.getElementById("submit-btn").style.display = "block"
    document.getElementById("submit-btn").textContent = "Submit Answer"
    document.getElementById("submit-btn").onclick = submitAnswer
  

    document.getElementById("final-score").style.display = "none"
  

    initQuiz()
  }
  
  window.onload = () => {
    initQuiz()
  }
  
  