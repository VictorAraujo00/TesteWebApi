const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_genres=rock';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5340cbe746msh456541806ba7d37p119165jsnba186480b80c',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

fetch(url, options)
    .then((response) =>{
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((erro) => {
        console.log("Erro: " + erro)
    })





