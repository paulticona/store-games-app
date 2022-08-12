import { Container } from "@mui/system";
import { useEffect } from "react";
import  Services  from "../../services";
import { useParams } from 'react-router-dom'




const SearchResultsView = ()=> {
    const { searchText } = useParams()

    async function getSearchResult(){
        const data = await Services.getGames(searchText)
        console.log()
    }

    
    useEffect(() => {
        getSearchResult()
    }, [])
    
    

}

export default SearchResultsView
    
