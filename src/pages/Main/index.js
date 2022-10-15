
import { Box } from "@mui/material";
import { HeaderMain, FooterView, BodyGamesView, ResponsiveAppBar } from "../../components";

const Main = () => {


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