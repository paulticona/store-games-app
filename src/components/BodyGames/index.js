import { useEffect, useState } from "react";
import Services from "../../services";
import Cards from "../CardGames";
import { Container } from "@mui/material";

const BodyGamesView = () => {
  //LOS ALMACENAMOS EN EL ESTADO DE LA APLICACION
  //EN ESTE CASO CARDGAMES
  const [games, setGames] = useState([]);

  //TRAEMOS LA DATA CONS ESTA FUNCION
  async function getSearchResult() {
    const data = await Services.getGames();
    //CARGAMOS LA DATA
    setGames(data);
  }

  useEffect(() => {
    getSearchResult();
  }, []);

  return (
    <Container maxWidth="sm">
      {games.length > 0 ? (
        games.map((game, index) => <Cards game={game} key={index} />)
      ) : (
        <h4>not Found</h4>
      )}
    </Container>
  );
};

export default BodyGamesView;
