class team {
    constructor(teams,goals,wins){
      this.teams = teams;
      this.goals = goals;
      this.wins = wins; 
    }
    getTeams(){
      return this.teams;
    }
    setTeams(teams){
      this.Teams = teams;
    }
    getGoals(){
      return this.goals;
    }
    setGoles(goals){
      this.goals = goals;
    }
    getWins(){
      return this.wins;
    }
    setWins(wins){
      this.wins = wins;
    }
  }
  function keys(){ 
    for(var i in teams){
      teams[i].setGoals(Math.floor((Math.random() * 7) + 1));
    }
  }

  function teamWins(team1,team2){ 
    if(team1.goals > team2.goals){
      team1.wins++;
    } else if(team1.goles < team2.goles){
      team2.wins++;
    }
  }

  function newGame(){ 
    keys();
  
    let num = randNum(teams.length); 
    let num2 = randNum(teams.length);
    teamWins(teams[num],teams[num2]);
    teamWins(equipos[num],equipos[num2]);

    elements.match.textContent = teams[num].getTeams() + ' ' + teams[num].getGoals()
     + ' -- ' + teams[num2].getGoals() + ' ' + teams[num2].getTeams();
  }