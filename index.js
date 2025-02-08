let startgame=()=>{
    if(confirm("Are you ready to play?"))
    {
        let input = prompt("Enter odd or even")?? alert("Thanks, Next Time")?? location.reload();
        let u_input= input.toLowerCase().trim();
        // check player is  chooses odd or even
        if(u_input=="odd" || u_input=="even"){
            userinput=prompt("Enter a number between 1 to 10")?? alert("Thanks, Next Time")?? location.reload();
            userinput=parseInt(userinput);
            c_random=Math.floor(Math.random()*10)+1;
            let sum=userinput+c_random;
            let check=sum;
            let check1=Number(sum/2);

            let random=Math.floor(Math.random()*2);
            let toOptions=["batting","bowling"]
            let computer_choose=toOptions[random];

            if((check%2==0 && u_input=="even")||(check%2!==0 && u_input=="odd")){
                // if this condition is true  player choose the and play with computer
                let roll=alert(`You choose ${u_input} and you entered ${userinput} and computer entered ${c_random} and the total is ${check1} so you won`);
                let player=prompt("batting or bowling")?? alert("Thanks, Next Time")?? location.reload();
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
                let computer=alert(`computer choose to ${computer_choose}`);
                if(computer=="batting"){
                    playbatting();
                }else{
                    playbowling();
                }
            } 

        }else{
            alert("Invalid Input");
        }   
    }else{
        alert("Next Time");
    }
}
function playbatting(){}
function playbowling(){}
console.log("Game is running");