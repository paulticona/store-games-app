
import { Box } from "@mui/material";
import { HeaderMain, FooterView, BodyGamesView } from "../../components";

const Main = () => {

    const logOut = () => {
        console.log("hola");
    }

	return (
        <Box sx={{
            height: '100%',
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: '#121212'
        }}>
            
            <BodyGamesView/>
            <FooterView/>
        </Box>
	);
};

export default Main;