const rps=['rock','paper','scissors'];
userWins=0;
computerWins=0;
function choice(userChoice, cin){
    uin = userChoice.toLowerCase();

    switch(true){
        case uin===rps[0] && cin === rps[1]:
            computerWins++;
            return 'You played '+uin+', the computer played '+cin+', You lost!';
        case uin===rps[1] && cin === rps[0]:
            userWins++;
            return 'You played '+uin+', the computer played '+cin+', You won!';
        case uin===rps[0] && cin === rps[2]:
            userWins++;
            return 'You played '+uin+', the computer played '+cin+', You won!';
        case uin===rps[2] && cin === rps[0]:
            computerWins++;
            return 'You played '+uin+', the computer played '+cin+', You lost!';
        case uin===rps[1] && cin === rps[2]:
            computerWins++;
            return 'You played '+uin+', the computer played '+cin+', You lost!';
        case uin===rps[2] && cin === rps[1]:
            userWins++;
            return 'You played '+uin+', the computer played '+cin+', You won!';
        case uin===cin:
            return 'You and the computer both played '+cin+', You tied!'
        default:
            return 'You did not play a valid choice';
    
    
        }
}

function game(){
    for(let i=0; i<5;i++){
        let user=prompt("Enter rock, paper, or scissors");
        let computer = getComputerChoice();
        console.log(user);
        console.log(computer);
        let result = choice(user,computer);
        if (result==='You did not play a valid choice'){
            i--;
        }

        console.log(choice(user,computer));
        console.log();
    }
    console.log('----------------------------------------')
    if (userWins>computerWins){
        console.log('You won more rounds than the computer');
    }
    else if(computerWins>userWins){
        console.log("The computer won more rounds than you");
    }
    else{
        console.log('You and the computer tied');
    }
    }   


function getComputerChoice(){
    return rps[Math.floor(Math.random()*3)];
};

game();

