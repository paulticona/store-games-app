
import React from 'react'
import {Box, CardMedia, Typography} from '@mui/material'

import { useGames } from '../../../hooks/useGames'
import { Loading } from '../../../components/Loads/Loading'

const Explore = () => {

  const {isLoading, games} = useGames()
  
  const posters = games.map(({ key, thumbnail}) => ({ key: thumbnail }))
  console.log(posters)

  return (
    <Box
      sx={{
        height: '100%',
        backgroundColor: '#121212'
      }}
    >

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          color: 'white',
          margin: 'auto',
          width: '75%',
          height:'100vh',
        }}
      >
        <Box

        >
          <Typography
            variant="h5"
            sx={{
              marginTop: '50px',
              marginBottom: '10px',
            }}
          >
            TU LISTA DE DESCUBRIMIENTOS
          </Typography>
          <Typography
            variant='body2'
            color='#C6D4DF'
          >
            Tu lista de descubrimientos de StoreGames es una mezcla de productos nuevos,
             superventas y similares a los que juegas y utilizas en StoreGames. Haz clic
              abajo para empezar y usa los controles de cada página de productos para seguirlos,
               añadirlos a la lista de deseados o marcarlos como ignorados y pasar al siguiente
                título de tu lista.
          </Typography>

          <Box>
            <Typography
              variant='subtitle2'
              sx={{
                marginTop: '20px',
                marginBottom: '10px',
              }}
            >
              TU LISTA
            </Typography>
            {games.length > 0 ? (
              games.map(( key, thumbnail) => 
              <Box
                sx={{
                  height: '200px',
                  backgroundColor: 'white',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
            >
              <Box
                
                sx={{ 
                  width: '100%',
                  height: '100%',
                  
                }}
              >1
              <CardMedia
                src={key[1]}
                sx={{
                  width: '100%',
                }}
              >

              </CardMedia>
              </Box>
              <Box
                sx={{
                  width: '90%',
                  height: '80%',
                  backgroundColor: 'blue',
                }}
              >2</Box>
              <Box
              
                sx={{
                  width: '80%',
                  height: '60%',
                  backgroundColor: 'green',
                }}
              >3</Box>
              <Box
                sx={{
                  width: '70%',
                  height: '40%',
                  backgroundColor: 'red',
                }}
              >4</Box>
            </Box>)
            ) : (
              <h4>not Found</h4>
            )}
              
          </Box>
        </Box>
       
      </Box>
    </Box>
  )
}

export default Explore
