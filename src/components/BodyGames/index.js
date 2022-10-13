import { useState} from "react";
import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import TextField from '@mui/material/TextField';

import Cards from "../CardGames";
import { Grid, Box, Button, Stack} from "@mui/material";
import HeaderMain  from "../HeaderMain/index";
import { Loading } from "../Loads/Loading";


import { useGames } from "../../hooks/useGames";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const BodyGamesView = () => {

  

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  
  //traemos nuestro hook useGames()
  const {isLoading, games} = useGames()
  const [currentPage, setCurrentPage] = useState(0)
  const [search, setSearch] = useState('')

  const filteredGames = ()=> {
    if (search.length === 0) {
      return games.slice(currentPage, currentPage + 5)
    }
    const filtered = games.filter(game => game.title.toLowerCase().includes(search.toLowerCase()))
    return filtered.slice(currentPage, currentPage + 5)
  }

  const nextPage =()=>{
    
    if (games.filter(game => game.title.includes(search)).length > currentPage + 5) {
      setCurrentPage(currentPage + 5)
    }
  }
  const prevPage =()=>{
    if (currentPage > 0) {
      setCurrentPage(currentPage - 5)
    } 
  }

  function searchInput(e){
    e.preventDefault();
    setSearch(e.target.value)
  }
  

  return (
    <Box>
        <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box 
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                  <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                  {page}
                </Button>
              ))}
            </Box>
              
            <Box sx={{ flexGrow: 1 }}>

        <TextField 
          id="outlined-search" 
          label="Buscar Juego" 
          type="search" 
          fullWidth={true}
          size="small" 
          
          sx={{
            backgroundColor: 'white',
            borderRadius: '5px',
            
          }} 
          value={search}
          onChange={searchInput}
        />

      </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>


      <HeaderMain/>


      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'center',
          
        }}
        container
        maxWidth="xs sm lg"
        spacing={{ xs: 3, sm: 3, md:3, lg:3, xl:3 }}
        columns={{ xs: 0,  sm: 8, md:12, lg: 18, xl: 22}}
      >
        {filteredGames().length > 0 ? (
          filteredGames().map((game, index) => <Cards game={game} key={index} />)
        ) : (
          <h4>not Found</h4>
        )}
      </Grid>
      <Stack 
        spacing={2} 
        direction="row" 
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '20px'
        }}>
        {
          
        }
        <Button 
          variant="contained"
          onClick={prevPage}
          >
          Anterior</Button>

        <Button 
          variant='contained'
          onClick={nextPage}
          >
            Siguiente</Button>
      </Stack>
      {
        isLoading && <Loading/>
      }
    </Box>
  );
};

export default BodyGamesView
