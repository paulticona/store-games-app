import { Box, TextField, Typography, Grid} from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const Mercado = () => {
  return (
    <>  
        <Typography
          variant='h5'
          align='center'
          backgroundColor='yellow'
        >
          Items de: 
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: 'yellow',
            width:'100vw',
            height: '100%',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'blue',
              width: '50%',
              height: '100vh',
            }}
          ></Box>
          <Box
            sx={{
              backgroundColor: 'red',
              width: '30%',
              height: '100vh',
              marginLeft: '10px'
            }}
          ></Box>

        </Box>
        <Box sx={{ flexGrow: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item
              sx={{
                height: '100px',
                backgroundColor: 'green',
              }}
            >xs=8</Item>
          </Grid>
          <Grid 
            sx={{
            }}
            item xs={4}
            >
            <Item
              sx={{
            ckgroundColor: 'orange',
              
              }}
            >xs=4</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
