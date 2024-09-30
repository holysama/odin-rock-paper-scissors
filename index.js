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
      
      if (number === 1) {
         choice = 'Rock';
         return choice;
      } else if (number === 2) {
         choice = 'Paper';
         return choice;
      } else if (number === 3) {
         choice = 'Scissors'
         return choice;
      }
      console.log(number);
   }
   let computerChoice = getComputerChoice();
   console.log(getComputerChoice());

   //Function that takes the user choice of Rock, Paper or Scissors
   function getHumanChoice() {
      let userChoice = prompt("What is your choice?");
      userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
      return userChoice;

   }
   let humanChoice = getHumanChoice();
   console.log(humanChoice)