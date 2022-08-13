import config from "./config.js";

const getGames = async () => {
	try {
		const url =config.baseUrl
		const response = await fetch(url);
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

