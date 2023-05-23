const rps=['rock','paper','scissors'];
let userLives=5;
let computerLives=5;

function getComputerChoice(){
    return rps[Math.floor(Math.random()*3)];
};

function enlarge(e){
    e.target.classList.add('.img-big');
    console.log(e);
    return;
}

function playGame(e){

    if(computerLives == 0 || userLives==0){
        return;
    }
    let uin;
    let cin=getComputerChoice();
    let result="";
    switch(true){
        case e.target.className === 'r':
            uin=rps[0];
            break;
        case e.target.className === 'p':
            uin=rps[1];
            break;
        case e.target.className === 's':
            uin=rps[2];
            break;
        default:
            return;
    }
    
    switch(true){
        case uin===rps[0] && cin === rps[1]:
            userLives--;
            result= 'You played '+uin+', the computer played '+cin+', You lost!';
            break;

        case uin===rps[1] && cin === rps[0]:
            computerLives--;
            result= 'You played '+uin+', the computer played '+cin+', You won!';
            break;
        case uin===rps[0] && cin === rps[2]:
            computerLives--;
            result= 'You played '+uin+', the computer played '+cin+', You won!';
            break;
        case uin===rps[2] && cin === rps[0]:
            userLives--;
            result= 'You played '+uin+', the computer played '+cin+', You lost!';
            break;
        case uin===rps[1] && cin === rps[2]:
            userLives--;
            result= 'You played '+uin+', the computer played '+cin+', You lost!';
            break;
        case uin===rps[2] && cin === rps[1]:
            computerLives--;
            result= 'You played '+uin+', the computer played '+cin+', You won!';
            break;
        case uin===cin:
            result= 'You and the computer both played '+cin+', You tied!'
            break;
    }
    
    const compImage= document.createElement('img');
    if(cin==rps[0]){
        compImage.src= "images/rock.png";
    }
    else if(cin==rps[1]){
        compImage.src= "images/paper.png";
    }
    else{
        compImage.src= "images/scissors.png";
    }

    const gameStatus=document.querySelector('.game-stat');
    gameStatus.textContent = "Your lives: "+userLives.toString()+"  |  "+"Enemy Lives: "+computerLives.toString();
    if(userLives==0 || computerLives==0){
        const finalMessage= document.createElement('h2');
        if(userLives!=0){
            finalMessage.textContent = 'You Beat The Computer';
        }
        else{
            finalMessage.textContent = 'The Computer Defeated You';
        }
        gameStatus.appendChild(finalMessage);
        const restart = document.createElement('button');
        restart.textContent = 'RESTART GAME';
        gameStatus.appendChild(restart);
        restart.addEventListener('click',function(){window.location.reload()});
    }

    const resultText= document.querySelector('.result-text');
    resultText.textContent = result;

    const enemyChoice = document.querySelector('.enemy-choice');
    enemyChoice.innerHTML='';

    enemyChoice.appendChild(compImage);       
}


const choices = document.querySelectorAll('.choices div img');
choices.forEach((choice) => {
    choice.addEventListener('click',playGame);
    //choice.addEventListener('mouseover',enlarge);
});


