
//                  Team Stats
//We want to create, retrieve, and add information about your favorite sports team. 
//Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.

const team = { //Declare a const variable called team
  _players: [ // _players was added and initilize to an array with three players firstName, lastName, and age
             {firstName: 'peter', lastName: 'joe', age: 35},
            {firstName: 'anthony', lastName: 'awa', age: 20},
            {firstName: 'james', lastName: 'john', age: 17},
  ],
            
  _games: [ //// _games was added and initilize to an array with three players opponent, teamPoints, opponentPoints
           {opponent: 'soccer', teamPoints: 10, opponentPoints: 25},
           {opponent: 'basket', teamPoints: 37, opponentPoints: 54},
           {opponent: 'tennis', teamPoints: 43, opponentPoints: 29},
  ],

  get players(){ //Create a getter method called players to retrieve the _players property and return the game property
    return this._players;
  },

  get games (){ //Create a getter method called game to retrieve the _games property and return the game property
    return this._games;
  },
//Add a .addPlayer() method to the team object that take three parameters
//newFirstName, newLastName, and newAge.
  addPlayer (newFirstName, newLastName, newAge){ // create a player object by setting the three parameters to be the values for the object’s three properties: firstName, lastName, age
    let player = {
      firstName: newFirstName,
      lastName:  newLastName,
      age:  newAge
    };

    this.players.push(player); //push the player to players object.
  },

  // Add a addGame() method to the team object that take three parameters
// newOpponent, newTeamPoints, newOpponentPoints.

  addGame (newOpponent, newTeamPoints, newOpponentPoints) {
    let game = { // create a game object by setting the three parameters to be the values for the object’s three properties: newOpponent, newTeamPoints, newOpponentPoints
      opponent: newOpponent,
      teamPoints:  newTeamPoints,
      opponentPoints:  newOpponentPoints
    };

   this.games.push(game); ////push the game to games object.
 }
};

// log both the addPlayer and addGame to the console with the argument
team.addPlayer('buggi', 'buggie', 60);
console.log(team.players);

team.addGame('Titans', 100, 98);
console.log(team.games);