import {config} from './config'

export const getGames = async()=>{
    try {
        const url = config.baseUrl
        
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        return error.message;
    }

    
}
const Services = {
    getGames,
}

export default Services

