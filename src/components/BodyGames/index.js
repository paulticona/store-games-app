import { useEffect, useState } from "react";
import Services from "../../services";
import Cards from "../CardGames";
import { Grid, Box, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

// Logoca para los estilos del buscador
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

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
    <Box>
      
     
      
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
