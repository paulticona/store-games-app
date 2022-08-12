
import { Box } from "@mui/material";
import { HeaderMain, Footer } from "../../components";

const Main = () => {
	return (
        <Box sx={{
            height: '100vh',
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        }}>
            <HeaderMain/>
            
            <Footer/>
        </Box>
	);
};

export default Main;