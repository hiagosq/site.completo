function playSound() {
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
  }
   
  function submitQuiz() {
    let correctAnswers = {
      q1: "B",
      q2: "B",
      q3: "B",
      q4: "B",
      q5: "A",
      q6: "A",
      q7: "B",
      q8: "C",
      q9: "C",
      q10: "B"
    };
   
    let form = document.getElementById('quiz-form');
    let score = 0;
   
    for (let key in correctAnswers) {
        let userAnswer = form.elements[key].value;
        if (userAnswer === correctAnswers[key]) {
            score++;
        }  
    }
   
    const radios = document.querySelectorAll('input[type="radio"]');
    const audio = document.getElementById('selecionasom');
    function playSound() {
        clickSound.currentTime = 0;  // Reinicia o áudio se já estiver tocando
        clickSound.play();           // Reproduz o som
      }
      radios.forEach(radio => {
        radio.addEventListener('click', playSound);
      });
   
    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas!`
   
    if (score===10) {
        let successSound = document.getElementById('venceusom');
        result.innerHTML = "Obrigada por responder"
        successSound.play();
    }
    else{
        let failSound = document.getElementById('perdeusom');
        failSound.play();
    }
  form.reset();
  }



