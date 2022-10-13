import { useState } from "react";

import Cards from "../CardGames";
import { Grid, Box, Button, Stack} from "@mui/material";
import HeaderMain  from "../HeaderMain/index";
import ResponsiveAppBar from "../AppBar/index";
import { Loading } from "../Loads/Loading";


import { useGames } from "../../hooks/useGames";


const BodyGamesView = () => {
  
  //traemos nuestro hook useGames()
  const {isLoading, games} = useGames()
  const [currentPage, setCurrentPage] = useState(0)
  // const [search, setSeach] = useState("");

  console.log(games)
  const filteredGames = ()=> {
    return games.slice(currentPage, currentPage + 5)
  }

  const nextPage =()=>{
    setCurrentPage(currentPage + 5)
  }
  const prevPage =()=>{
    if (currentPage > 0) {
      setCurrentPage(currentPage - 5)
    }
    
  }
  
  //Filtramos
  // let result = []
  // if (search === '') {
  //     result = games
  // } else {
  //     result = games.filter((data) =>
  //       data.title.toLowerCase().includes(search.toLowerCase())
  //     )
  // }

  return (
    <Box>
      <ResponsiveAppBar/>   
      <HeaderMain/>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'center',
          
        }}
        container
        maxWidth="xs sm lg"
        spacing={{ xs: 3, sm: 3, md:3, lg:3, xl:3 }}
        columns={{ xs: 0,  sm: 8, md:12, lg: 18, xl: 22}}
      >
        {filteredGames().length > 0 ? (
          filteredGames().map((game, index) => <Cards game={game} key={index} />)
        ) : (
          <h4>not Found</h4>
        )}
      </Grid>
      <Stack 
        spacing={2} 
        direction="row" 
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '20px'
        }}>
        {
          
        }
        <Button 
          variant="contained"
          onClick={prevPage}
          >
          Anterior</Button>

        <Button 
          variant='contained'
          onClick={nextPage}
          >
            Siguiente</Button>
      </Stack>
      {
        isLoading && <Loading/>
      }
    </Box>
  );
};

export default BodyGamesView
