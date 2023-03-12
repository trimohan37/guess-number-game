'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 correct number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;*/
let secretNumber = Math.trunc(Math.random()*20)+1;

let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = '⚠️ No number!';
    }  else if (guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct number!';
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
      

    } else if ( guess > secretNumber){
        if(score>0){ document.querySelector('.message').textContent ='📈 too high';
        document.querySelector('.score').textContent = score --;
    
        document.querySelector('body').style.backgroundColor='#FF8B13';}
        else{ document.querySelector('.message').textContent= '🙍🏾You Lost the game!';
        document.querySelector('.score').textContent =0;
        document.querySelector('body').style.backgroundColor='#FF0032';
    }
       
    } else if ( guess < secretNumber){
        if(score>0){ document.querySelector('.message').textContent ='📉Too low';
        document.querySelector('.score').textContent = score --;
        document.querySelector('body').style.backgroundColor='#FF8B13';}
        else{ document.querySelector('.message').textContent= '🙍🏾You Lost the game!';
        document.querySelector('.score').textContent =0;
        document.querySelector('body').style.backgroundColor='#FF0032';
    }
}
});

document.querySelector('.again').addEventListener('click', function(){
   
}





)

