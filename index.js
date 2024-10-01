/* 1)Random function that returns Rock, Paper or Scissors
   2)Write a function that takes the user choice and returns it
   3)Write variables to keep track of the players score
   4)Write the logic to play a single round
   5)Write the logic to play the entire game */

/* Plan:
   
   1)Generate computer choice Rock, Paper, Scissors
   2)Get Player choice Rock, Paper, Scissors
   3)Create variables to keep track of Score
   4)Compare the 2 choices (for 1 round)
      if player choice == computer choice, it's a tie
      
      if player choice == rock and computer choice == scissors
      display "Rock beats Scissors, You won" ||

      if player choice == paper and computer choice == rock
      display "Paper beats rock, You won" ||

      if player choice == scissors and computer choice == paper
      display "Scissors beat Paper, You won"

      else

      if player choice == scissors and computer choice == rock
      display "Rock beats Scissors, You lost" ||

      if player choice == rock and computer choice == paper
      display "Paper beats rock, You lost" ||

      if player choice == paper and computer choice == scissors
      display "Scissors beat Paper, You lost"

   5)Write the logic to play 5 rounds
   6)Whoever wins 3 rounds first wins

  */
   
   //Function that let's computer return Rock, Paper or Scissors
   function getComputerChoice() {
      let number = Math.floor(Math.random() * 3 + 1);
      let choice;

      if (number === 1) {
         choice = 'Rock';
      } else if (number === 2) {
         choice = 'Paper';
      } else if (number === 3) {
         choice = 'Scissors';
      }
      return choice;
   }
   let computerChoice = getComputerChoice();
   console.log(computerChoice);
   

   //Function that takes the user choice of Rock, Paper or Scissors
   function getHumanChoice() {
      let humanChoice = prompt("What is your choice?");
      humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
      return humanChoice;
   }
   let humanChoice = getHumanChoice();
   console.log(humanChoice);

   //Declaring players score variables 
   let humanScore = 0;
   let computerScore = 0;

   //Function logic to play a single round of Rock, Paper, Scissors
   function playRound(humanChoice, computerChoice) {
      
      console.log("Computer chose: " + computerChoice);
      console.log("Human chose: " + humanChoice);

      //Human Wins
      if (humanChoice === computerChoice) {
         console.log("It's a tie")
      } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
         console.log("Rock beats Scissors, You won");
      } else if (humanChoice === "Paper" && computerChoice === "Rock") {
         console.log("Paper beats rock, You won");
      } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
         console.log("Scissors beat Paper, You won");
      }
      //Computer Wins
      else if (humanChoice === "Scissors" && computerChoice === "Rock") {
         console.log("Rock beats Scissors, You lost")
      } else if (humanChoice === "Rock" && computerChoice === "Paper") {
         console.log("Paper beats rock, You lost")
      } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
         console.log("Scissors beat Paper, You lost")
      }
   }
   
   playRound(humanChoice, computerChoice);
