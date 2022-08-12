import {
    Box,
    Button,
    Checkbox,
    Container,
    Link,
    TextField,
    Typography
  } from '@mui/material';
  import ArrowBackIcon from '@mui/icons-material/ArrowBack';
  
  const Register = () => {
   
     
    return (

        <Box
          component="main"
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexGrow: 1,
            minHeight: '100%',
            height: '100vh',

          }}
        >
          <Container maxWidth="sm">
            
              <Button
                href='/'
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
                  Crea una Cuenta
                </Typography>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="body2"
                >
                 Ingresa tus datos
                </Typography>
              </Box>
              <TextField
                fullWidth
                label="First Name"
                margin="normal"
                name="firstName"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Last Name"
                margin="normal"
                name="lastName"
                variant="outlined"
              />
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
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  ml: -1
                }}
              >
                <Checkbox
                  name="policy"
                />
                <Typography
                  color="textSecondary"
                  variant="body2"
                >
                  Leí los
                  {' '}
                    <Link
                      color="primary"
                      underline="always"
                      variant="subtitle2"
                      href='https://www.apple.com/es/shop/browse/open/salespolicies'
                    >
                      Terminos y Condiciones
                    </Link>
                </Typography>
              </Box>
              <Box sx={{ py: 2 }}>
                <Button
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Registrase
                </Button>
              </Box>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                Tienes una cuenta?
                {' '}
            
                  <Link
                    href="/login"
                    to="/login"
                    variant="subtitle2"
                    underline="hover"
                  >
                    Sign In
                  </Link>
              </Typography>
            </form>
          </Container>
        </Box>
    );
  };
  
  export default Register;
  