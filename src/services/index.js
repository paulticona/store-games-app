import config from './config'


const getGames = async () => {
	try {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '2a705c2f1bmsh4d9cff6225e15bbp182f03jsn56b77661fb3f',
				'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
			}
		};
		const url =config.baseUrl
		const response = await fetch(url, options);
		const data = await response.json();
		return data
	} catch (error) {
		return error;
	}
};

const Services = {
	getGames
};

export default Services;

