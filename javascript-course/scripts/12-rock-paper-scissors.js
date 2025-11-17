let score = JSON.parse(localStorage.getItem('score')) || {
    
  wins : 0,
  losses : 0,
  ties : 0,
};

  updatescoreElement();


/*
if(!score){
  score = {
    wins : 0,
    losses : 0,
    ties : 0,
  };
}
*/
let isAutoPlaying = false ;
let intervalId;
  function autoplay() {
    if (!isAutoPlaying) {
   intervalId = setInterval(function() {
    const playerMove = pickComputerMove();
    playgame(playerMove);
    
  }, 2000);
  isAutoPlaying = true ;
} 
else{
  clearInterval(intervalId);
  isAutoPlaying = false;
}
  }


function playgame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';
  
  if (playerMove === 'scissor') {

    if (computerMove === 'rock') {
    result = 'you lose';
    }
    else if (computerMove === 'paper') {
    result = 'you win'; 
    }
    else if(computerMove === 'scissor') {
    result = 'Tie';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
    result = 'you win';
    }
    else if (computerMove === 'paper') {
    result = 'Tie';
    }
    else if(computerMove === 'scissor') {
    result = ' you lose';
    }

  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
    result = 'Tie';
    }
    else if (computerMove === 'paper') {
      result = 'you lose';
    }
    else if(computerMove === 'scissor') {
      result = 'you win';
    }
  }

  
  if (result === 'you win') {
    score.wins = score.wins +1;
  }
  else if(result==='you lose') {
    score.losses = score.losses + 1;
  }
  else if (result === 'Tie'){
    score.ties = score.ties + 1
  }


  localStorage.setItem('score', JSON.stringify(score));

  updatescoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = ` You 
      <img src="images/${playerMove}-emoji.png" class="move-icon">
      <img src="images/${computerMove}-emoji.png" class="move-icon">
      Computer`;

   
}

    function updatescoreElement() {
      document.querySelector('.js-score').innerHTML = `wins: ${score.wins},
        losses: ${score.losses},
        ties: ${score.ties} `;

    }

    function pickComputerMove ()  {
    const randomNumber = Math.random();

    let computerMove = ''; 

    if (randomNumber >= 0 && randomNumber < 1/3){ 
    computerMove = 'rock'; 
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
    }
    else if(randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissor' ;
    }

    return computerMove;

}