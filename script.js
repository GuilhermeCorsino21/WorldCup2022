console.log(fetch('https://estagio.geopostenergy.com/WorldCup/GetAllTeams', {
    method: 'get',
    headers: {
        'git-user': 'GuilhermeCorsino21'
    }
})
.then(response => response.json())
.then(json => console.log(json)))
