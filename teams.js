const teamsList = [
  { "team:": "Vasco"},
  { "team:": "Flu"},
  { "team:": "Fla"},
  { "team:": "Cam"},
  { "team:": "Cec"},
  { "team:": "Sep"},
  { "team:": "SCCP"},
  { "team:": "Bot"},
]

function randomChoice(arr) {
  return arr[Math.floor](Math.random() * arr.length);
      
}

const divBox1 = document.querySelector(`div#box-1`)

const gameGenerator = () => {
  if (cupTeams.lenght > 0 ){
    let team1 = randomChoice(cupTeams)
    team1 = cupTeams.indexof(team1)
    let team1Name = cupTeams[team1]["team"]
    let team1Goals = Math.floor(Math.random() * 7)
    cupTeams.splice(team1, 1)

  let team2 = randomChoice(cupTeams)
    team2 = cupTeams.indexof(team2)
    let team2Name = cupTeams[team1]["team"]
    let team2Goals = Math.floor(Math.random() * 4)
    cupTeams.splice(team2, 1)
  
  let matchupsData = {"home":{"name": team1Name, "goals": team1Goals}, "away": {"name": team2Name, "goals": team2Goals}}
  return matchupsData}  
 
  else{
    return "end"
  }
}

const showGameDom = (gameGenerator, i) => {
  if (gameGenerator != "end"){
    let data = matchupsData
    let nGame = i
    let game = document.createElement('div')
    game.setAttribute('id', 'game${i+1}')
    game.innerHTML = `${data["home"]["name"]} ${data["home"]["goals"]} X 
      ${data["away"]["name"]} ${data["away"]["goals"]}`
    
    divBox1.appendChild(game)
    if(data["home"]["goals"] > data["away"]["goals"]){
      console.log(`winner ${data["home"]["name"]}`)
      return {"team":data["home"]["name"]} }
    }else {
      console.log(`winner ${data["away"]["name"]}`)
      return {"team":data["away"]["name"]}
    }
  }

  const total = teamsList.lenght
  const matchups = Math.round((total/2))
  let cupTeams = teamsList
  let nextPhase = []
  console.log(matchups)
  for(let i =0 ; i < matchups; i++){
    winner = showGameDom(gameGenerator(), i)
    nextPhase.push(winner)
    if(i+1 < matchups) {
      
    }else{
      i =(i/2)
      cupTeams = nextPhase
      nextPhase = []
    }
  }