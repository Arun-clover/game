let startgame=()=>{
    if(confirm("Are you ready to play?"))
    {
        let input = prompt("Enter odd or even")?? alert("Thanks, Next Time")?? location.reload();
        let u_input= input.toLowerCase().trim();
        // check player is  chooses odd or even
        if(u_input=="odd" || u_input=="even"){
           let userinput=prompt("Enter a number between 1 to 10")?? alert("Thanks, Next Time")?? location.reload();
            userinput=parseInt(userinput);
            c_random=Math.floor(Math.random()*10)+1;
            let sum=userinput+c_random;
            let check=sum;
            let check1=Number(sum/2);

            let random=Math.floor(Math.random()*2);
            let toOptions=["batting","bowling"]
            let computer_choose=toOptions[random];

            if((check%2==0 && u_input=="even")||(check%2!==0 && u_input=="odd")){
                // if this condition is true  player choose and play with computer
                let roll=alert(`You choose ${u_input} and you entered ${userinput} and computer entered ${c_random} and the total is ${check1} so you won`);
                let player=prompt("batting or bowling").toLowerCase()?? alert("Thanks, Next Time")?? location.reload();
                if(player=="batting"){
                    playbatting();
                }else{
                    playbowling();
                }
            }
                
            else if((check%2!==0 && u_input=="even")||(check%2==0 && u_input=="odd")) 
                {
                //if this condition is true compute choose the roll an play with player
                alert(`You choose ${u_input} and you entered ${userinput} and computer entered ${c_random} and the total is ${check1} so computer won`);
                if(computer_choose=="batting"){
                    playbowling();
                }else{
                    playbatting();
                }
            } 

        }else{
            alert("Invalid Input");
        }   
    }else{
        alert("Next Time");
    }
}
function playbatting(){
let playerscore=0; 
alert("You are Batting now!");   

while(true){
    let playerRun=prompt(`Your Score = ${playerscore} \n Enter a value between 1 to 6`);
    if(playerRun=="quit"|| playerRun=="exit"){
        alert("DO YOU WANT TO QUIT THE GAME IF YES CLICK OK!!");
        location.reload()
        return;
    }
    playerRun=parseInt(playerRun);
    if(isNaN(playerRun)||playerRun<1||playerRun>6){
        alert("Enter a valid number");
        continue;
    }
    let computeBall=parseInt(Math.floor(Math.random()*6)+1);
    if(playerRun==computeBall){
        alert("YOU LOST THE GAME!!");
        alert(`You played ${playerRun} Computer played ${computeBall}`);
        break;
    }else{
        playerscore+=playerRun;
    }
}
    playbowling(playerscore);
}


function playbowling(targetscore=0)
{
    let computerscore=0;
    alert("YOU ARE BOWLING!!")
    while(true){
        let playerball=parseInt(prompt(`computer Score=${computerscore}\nEnter a number between 1 to 6`));
        if(playerball=="quit"|| playerball=="exit"){
            alert("DO YOU WANT TO QUIT THE GAME IF YES CLICK OK!!");
            location.reload();
            return;
        }
        playerball=parseInt(playerball);
        if(isNaN(playerball)||playerball<1||playerball>6){
            alert("Enter a valid number");
            continue;
        }
        let computerRun=parseInt(Math.floor(Math.random()*6)+1)
        if(playerball==computerRun){
            alert(`You Won the match you bowled${playerball} computer played ${computerRun}`);
            break;
        }
        else{
            computerscore+=computerRun;
            // Check if computer has already beaten the player's score
            if(targetscore && computerscore>targetscore)
            {
                alert(`Computer won the match ${targetscore} and computer scoreed ${computerscore}`);
                return;// Stops the function and ends the game
            }
        }
    }

}
    // checking the winner if both have played
    if(targetscore>computerscore){
        alert(`player is WON!!!`);
    }
    else if(targetscore<computerscore){
        alert(`Computer won the match`);
    }else{
        alert(`GAME TIED!! ${targetscore} equals ${computerscore}`);
    }

console.log("Game is running");