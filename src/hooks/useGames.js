import { useState, useEffect } from "react"
import Services from "../services"

export const useGames=() =>{
    const [isLoading, setIsLoading] = useState(true)
    const [games, setGames] = useState([])

    async function getSearchResult() {
        const data = await Services.getGames();
        //CARGAMOS LA DATA DE juego
        setIsLoading(false)
        setGames(data);
      }

    useEffect(() => {
        getSearchResult();
    },[])

    return {
        isLoading,
        games
    }
}