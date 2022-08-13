
import { Box } from "@mui/material";
import { HeaderMain, FooterView, BodyGamesView } from "../../components";

const Main = () => {
	return (
        <Box sx={{
            height: '100vh',
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        }}>
            <HeaderMain/>
            <BodyGamesView/>
            <FooterView/>
        </Box>
	);
};

export default Main;