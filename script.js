async function getMatchData() {
    return await fetch("https://api.cricapi.com/v1/series?apikey=9dde3764-37ac-44ca-937e-dccf40cd7dd7&offset=0&search=")
        .then(data => data.json())
        .then(data => {
            if(data.status != "success") return;

            const matchesList = data.data;
 
            if(!matchesList) return [];

            const relevantData = matchesList.map(match => `${match.name}`)
            
            document.getElementById('matches').innerHTML = relevantData.map(match => `<li>${match}</li>`).join('');
            
            console.log(relevantData);
            
            return relevantData;
        })
        .catch( (error) => {
            console.error('Error',error);
        })
}

getMatchData();