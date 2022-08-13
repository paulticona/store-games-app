import {Box, Button, Typography, Link, IconButton } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsApp from "@mui/icons-material/WhatsApp";

const FooterView = ()=> {
    return (
        <Box
        sx={{
    
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "center",
            
        }}
        >
            <Box
            sx={{
                padding: "10px 0 10px 0",
                display: "flex",
                color: "white",
                height: "50%",
                flexDirection: "column",
                justifyContent: "space-between",  
                backgroundColor: 'black',              
            }}
            >

                <Typography
                variant="h5"
                color="#4fc3f7"
                >
                ¿Buscando recomendaciones?
                </Typography>
                <Typography 
                    variant="body2"
                    color="#8F98A0"
                >
                    Inicia Sesion para ver recomendacione personalizadas
                </Typography>
                <Box>
                    <Button variant="contained" color="success" href='/Login'>
                        Iniciar sesión
                    </Button>
                </Box>
                <Typography variant="body2" color="#8F98A0">
                    o <Link href="/Register" color="#fff">registrate</Link> 
                    y unete a <strong>StoreGames</strong> de forma gratuita
                </Typography>
            </Box>

            <Box
            sx={{
                backgroundColor: '#171A21',
                height: "50%",
                padding: "20px 10px",
            }}
            >
                
                <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                ><Typography
                color="#8F98A0"
                >
                    
                        © 2022 StoreGames Corporation. Todos los derechos reservados. Todas las marcas registradas pertenecen a sus respectivos dueños en EE. UU. y otros países.
                        Todos los precios incluyen IVA (donde sea aplicable)
                </Typography>
                    
                       
                        <Box>
                            <IconButton color="success" href="https://www.facebook.com/">
                                <FacebookIcon fontSize="large"/>
                            </IconButton>
                            <IconButton color="success" href="https://www.instagram.com/">
                                <InstagramIcon fontSize="large"/>
                            </IconButton>
                            <IconButton color="success" href="https://www.whatsapp.com/?lang=es">
                                <WhatsAppIcon fontSize="large"/>
                            </IconButton>
                            <IconButton color="success" href='https://twitter.com/'>
                                <TwitterIcon fontSize="large"/>
                            </IconButton>
                        </Box>
                    
                </Box>
            </Box>
        </Box>
    )

}

export default FooterView