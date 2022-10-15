import { useState} from "react";
import * as React from 'react';

import TextField from '@mui/material/TextField';

import Cards from "../CardGames";
import { Grid, Box, Button, Stack} from "@mui/material";
import { Loading } from "../Loads/Loading";

import { useGames } from "../../hooks/useGames";


const BodyGamesView = () => {

  

  

  
  //traemos nuestro hook useGames()
  const {isLoading, games} = useGames()
  //variables de estado variable
  const [currentPage, setCurrentPage] = useState(0)
  const [search, setSearch] = useState('')

  //filtrar
  const filteredGames = ()=> {
    let numeroDeCards=4
    if(search.length === 0) {
      return games.slice(currentPage, currentPage + numeroDeCards)
    }
    const filtered = games.filter(game => game.title.toLowerCase().includes(search.toLowerCase()))
    return filtered.slice(currentPage, currentPage + numeroDeCards)
  }

  //paginar
  const nextPage =()=>{
    
    if (games.filter(game => game.title.includes(search)).length > currentPage + 5) {
      setCurrentPage(currentPage + 4)
    }
  }
  const prevPage =()=>{
    if (currentPage > 0) {
      setCurrentPage(currentPage - 4)
    } 
  }

  //escuchar Input
  function searchInput(e){
    e.preventDefault();
    setSearch(e.target.value)
  }
  

  return (
    <Box>
      <Box
        sx={{padding:5}}
      >
      <TextField 
          id="outlined-search" 
          label="Buscar Juego" 
          type="search" 
          fullWidth={true}
          size="small" 
          
          sx={{
            backgroundColor: 'white',
            borderRadius: '5px',
            
          }} 
          value={search}
          onChange={searchInput}
        />
      </Box>
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
