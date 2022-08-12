

import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import {Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import theme from '../../theme';

const Login = () => {
 

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
    

          <form>
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
              
              label="Email Address"
              margin="normal"
              name="email"
              
              type="email"
             
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              variant="outlined"
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