import {Box, Button, Typography, Link } from "@mui/material"

const Footer = ()=> {
    return (
        <Box
        sx={{
    
            height: "30vh",
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
                    color="#566271"
                >
                    Inicia Sesion para ver recomendacione personalizadas
                </Typography>
                <Box><Button variant="contained" color="success">Iniciar sesión</Button></Box>
                <Typography variant="body2" color="#566271">
                    o <Link href="#" color="#fff">registrate</Link> y unete a <strong>StoreGames</strong> de forma gratuita
                </Typography>
            </Box>

            <Box
            sx={{
                backgroundColor: '#171A21',
                height: "50%",
            }}
            ></Box>
        </Box>
    )

}

export default Footer