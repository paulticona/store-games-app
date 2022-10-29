import React from 'react'
import { useState, useEffect} from 'react'

import { GetToken } from '../../services/AuthServices'
import { GetGamesFvorites } from '../../services/GamesServices'
import { 
    Box, Grid, Card, CardMedia, 
    CardContent, Typography, CardActions, 
    Button
} from '@mui/material'



const GamesFavorites = () => {
    const [listOfGames, setListOfGames] = useState([])

    const token = GetToken();
    console.log(token)

    useEffect(() => {
        const fetchData = async () => {
            if (token!==null) {
                const response = await GetGamesFvorites(token);
                const data = response
                setListOfGames(data.data.data);
            }else{
                
            }
          
        };
        fetchData();
      }, [])

  return (
    <Box sx={{ 
        flexGrow: 1,
        marginBottom:20
    }}>
        <Typography
            variant='h3'
            color='white'
            sx={{
                marginTop:10,
                marginLeft:5,
                marginBottom:5
            }}
        >
            Mis Favoritos
        </Typography>
      <Grid 
        container 
        maxWidth="xs sm lg"
        spacing={{ xs: 2, sm: 3, md:4, lg:3, xl:3 }} 
        columns={{xs: 0,  sm: 8, md:12, lg: 18, xl: 22 }}
        sx={{
            display: 'flex',
            justifyContent: 'center',
            
          }}
      >
        {listOfGames.length > 0 ? (
              listOfGames.map(( game, index) =>
          <Grid item xs={2} sm={4} md={4} >
                <Card 
                    key={index}
                    sx={{ 
                        maxWidth: 345,
                        backgroundColor:'#3E7694',
                        height: 350
                }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={game.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {game.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {game.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button 
                            size="small"
                            href={game.gameurl}
                        >Ver</Button>
                        <Button size="small" variant="contained" color="success">Comprar ${game.price}</Button>
                    </CardActions>
                </Card>
          </Grid>

        )) : (
              <Typography
              variant="h5"
              color="#4fc3f7"
              >
                Inicia Sesion Para ver tus favoritos amiguito!
              </Typography>
            )}
      </Grid>
    </Box>
  )
}

export default GamesFavorites