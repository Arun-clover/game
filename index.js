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
            let check1=Number(Math.floor(sum/2));
            if(check%2==0 && u_input=="even"){
                let roll=alert(`You choose ${u_input} and you entered ${userinput} and computer entered ${c_random} and the total is ${check1} so you won`);
                let next=prompt("batting or bowling")?? alert("Thanks, Next Time")?? location.reload();
                
            }else if(check%2!==0 && u_input=="odd"){
                alert(`You choose ${u_input} and you entered ${userinput} and computer entered ${c_random} and the total is ${check1} so computer won`);
                let next=prompt("batting or bowling")?? alert("Thanks, Next Time")?? location.reload();
            }
        }else{
            alert("Invalid Input");
        }
           
    }else{
        alert("Next Time");
    }
}