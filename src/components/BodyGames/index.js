import { useEffect, useState } from "react";
import Services from "../../services";
import Cards from "../CardGames";
import { Container, Grid, Box, Card, TextField, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const BodyGamesView = () => {
  //LOS ALMACENAMOS EN EL ESTADO DE LA APLICACION
  //EN ESTE CASO CARDGAMES
  const [search, setSeach] = useState("");
  const [games, setGames] = useState([]);

  //TRAEMOS LA DATA CONS ESTA FUNCION
  async function getSearchResult() {
    const data = await Services.getGames();
    //CARGAMOS LA DATA
    setGames(data);
  }

  //capturamos teclado
  const searchInput= (e) => {
    setSeach(e.target.value);
    console.log(e.target.value);
  }

  //Filtramos
  let result = []
  if (search === '') {
      result = games
  } else {
      result = games.filter((data) =>
        data.title.toLowerCase().includes(search.toLowerCase())
      )
  }

  useEffect(() => {
    getSearchResult();
  }, []);

  return (
    <Box
    >

      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '50px',

        }}
      >
        <Card
          sx={{
            alignItems: 'center',
            maxWidth: 'auto',
            padding: '5px',
            backgroundColor: '#9e9e9e'
          }}
        >
          <Box>
            <TextField
                value={search}
                onChange={searchInput}
                id="outlined-basic"
                label="Buscar..."
                variant="outlined"
                size="small"
                sx={{
                    width: '90%',
                    marginTop: '5px',
                }}
                //recibimos funcion pra obtener valore del texfield
            />
            <IconButton
                size="large"
                aria-label="search"
                color="inherit"
            >
            <SearchIcon />
            </IconButton>
        </Box>
          
        </Card>
      </Container>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
        container
        maxWidth="sm lg"
        spacing={{ xs: 2, md: 5 }}
        columns={{ xs: 4, sm: 12, md: 18 }}
      >
      
        {result.length > 0 ? (
          result.map((game, index) => <Cards game={game} key={index} />)
        ) : (
          <h4>not Found</h4>
        )}
      </Grid>
    </Box>
  );
};

export default BodyGamesView
