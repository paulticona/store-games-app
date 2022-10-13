import { useState, useEffect } from "react"
import Services from "../../services/index"

export const useGames=() =>{
    const [isLoading, setIsLoading] = useState(true)
    const [games, setGames] = useState([])

    useEffect(() => {
        //carga de los juegos
        Services.getGames()
            .then(games =>{
                setIsLoading(false)
                setGames(games)
            })
    },[])

    return {
        isLoading,
        games
    }
}