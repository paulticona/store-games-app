
import { Box } from "@mui/material";
import { BodyGamesView } from "../../components";

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
        </Box>
	);
};

export default Main;