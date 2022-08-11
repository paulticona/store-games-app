import { Container } from "@mui/system";
import { useEffect } from "react";
import { ProminentAppBar } from "../../components";
import  Services  from "../../services";
const Main = () => {
    async function getGamesResult() {
        const games = Services.getGames();
        console.log(games);
    }

    useEffect(() => {
        getGamesResult()
    }, [])
    

	return (
        
        <ProminentAppBar/>
	);
};

export default Main;