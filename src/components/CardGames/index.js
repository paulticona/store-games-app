import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Chip,
  Rating,
  Stack,
  Box,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BodyGamesView from "../BodyGames";

const Cards = ({ game }) => {
    const StyledRating = styled(Rating)({
        "& .MuiRating-iconFilled": {
          color: "#ff6d75",
        },
        "& .MuiRating-iconHover": {
          color: "#ff3d47",
        },
      });
  return (
    <Grid item xs={2} sm={4} md={4}
      
    >
      <Card
        sx={{
          height: 450,
          backgroundColor:'#3E7694'
        }}
      >
        <CardMedia
          component="img"
          height="240"
          sx={{
            objectPosition: "top",
          }}
          image={game.thumbnail}
          alt="green iguana"
        />
        <CardContent
          sx={{
            cursor: "pointer",
          }}
        >
          <Grid container spacing={3}>

            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {game.title}
              </Typography>
              <Typography variant="body1">{game.release_date}</Typography>
              <Typography color="#fff3e0" variant="h6">
                $ {game.id}
              </Typography>
              <Chip
                label={game.platform}
                color="primary"
                size="small"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" justifyContent="space-between">
                <Button variant="contained" size="small" >
                  Add to cart
                </Button>
                {/* El corazon se pinta si es que value = 1 */}
                <StyledRating
                  max={1}

                  icon={<FavoriteIcon fontSize="inherit" />}
                  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                 
                />
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Cards;