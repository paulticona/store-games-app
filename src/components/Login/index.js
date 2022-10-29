

import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import {Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState} from 'react';
import { SignIn } from '../../services/AuthServices';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = new FormData(e.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // }
  const [userCredentials, setUserCredentials] = useState({
    // aqui capturamos los dos valores
    username: "",
    password: "",
  });

  //instancia del useNavigate
  const navigate= useNavigate()
  //capturamos los campos
  const handleInputChange = (e)=>{
    const {name, value}= e.currentTarget
    setUserCredentials({
      ...userCredentials,
      [name]:value
    })
  }

  //creamos usuario
  const createUser = async(e)=>{
    e.preventDefault()
    const response = await SignIn(userCredentials)
    if(response.status===200){
      //enviamos al LocalStorage el Token
      localStorage.setItem('token', response.data.access_token)
      navigate('/')
      
    }else{
      alert('Usuario o Password incorrectos')
    }
  }

  return (
       
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
          height: '100vh',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="sm">
         
            <Button
              href="/"
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Main
            </Button>
    

          <form
            onSubmit={createUser}
          >
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Sign in
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                
              </Typography>
            </Box>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                xs={12}
                md={6}
              >
                <Button
                  color="info"
                  fullWidth
                  startIcon={<FacebookIcon/>}
                  size="large"
                  variant="contained"
                >
                  Login with Facebook
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
              >
                <Button
                  fullWidth
                  color="error"
                  startIcon={<GoogleIcon />}
                  size="large"
                  variant="contained"
                >
                  Login with Google
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >





              <Typography
                align="center"
                color="textSecondary"
                variant="body1"
              >
                o iniciar sesión con la dirección de correo electrónico
              </Typography>
            </Box>


            <TextField
              fullWidth
              label="Username"
              margin="normal"
              type="text"
              variant="outlined"
              id='username'
              name="username"
              value={userCredentials.username}
              onChange={handleInputChange}
            />

            <TextField
              fullWidth
              label="Password"
              margin="normal"
              type="password"
              variant="outlined"
              id='password'
              name="password"
              value={userCredentials.password}
              onChange={handleInputChange}
            />


            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In Now
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              No tienes cuenta?
              {' '}
              
                <Link
                  href='/register'
                  to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  Registrate Aquí
                </Link>
            </Typography>
          </form>
        </Container>
      </Box>
  );
};

export default Login;