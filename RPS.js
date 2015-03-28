function randomPlay() {
        var play = Math.random() * 3;
        if (play < 1) {
                return "rock";
        } else if (play < 2) {
                return "paper";
        } else {
                return "scissors";
        }
}
 
// fill this out
function rockPaperScissors() {
        myPlay = prompt("What do you play? Rock, paper, or scissors?");
        if (myPlay == "rock" || myPlay == "scissors" || myPlay == "paper") {
                console.log("You played " + myPlay);
        } else {
                console.log("You didn't provide a valid play.")
        }
 
        compPlay = randomPlay();
        console.log("Computer played " + compPlay);
 
        if(compPlay == myPlay)
		{
            console.log("This is a tie.")
        }
		else if   (  ((myPlay == "rock") && (compPlay == "scissors") )       ||        ( (myPlay == "scissors") && (compPlay == "paper") )     ||       ((myPlay == "paper")&&(compPlay == "rock") )
		{
            console.log("You win!!!!")
        }
        else if (   ((myplay == "rock")&&(compPlay == "paper"))     ||    ((myPlay == "paper")&&(compPlay == "scissors"))     ||    ((myplay == "scissors")&&(compPlay == "rock"))    )
         {
            console.log("you lose")
         }   

}