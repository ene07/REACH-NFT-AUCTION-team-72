import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ConnectAccount from '../connectAccount'
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "react-router-dom"

const pages = ['Home', 'Explore collections', 'Create'];
const destination = ['/', '/collections', '/createnft'];

function Header () {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [active, setActive] = React.useState(null);

  const handleOpenNavMenu = (event) => { setAnchorElNav(event.currentTarget); };
  const handleCloseNavMenu = () => { setAnchorElNav(null);  };

  return (
    <AppBar position="static" sx={{background: '#fff'}} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
              color: 'purple',
              textDecoration: 'none',
            }}
          >
            <span style={{fontSize:'35px',}}>D</span>Rythm
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color: 'purple',}}/>
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
              sx={{ display: { xs: 'block', md: 'none' },}}
            >
              {pages.map((page, id) => (
                <MenuItem key={id}>
                  <NavLink  className="btn" to={destination[id]} style={{border: 'none'}}>
                    <Typography textAlign="center" sx={{color: 'purple',}}>{page}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
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
              color: 'purple',
              textDecoration: 'none',
            }}
          >
            <span style={{fontSize:'35px',}}>D</span>Rythm
          </Typography>
          <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-start', gap: 4},}}>
            {
              pages.map((page, id) => (
                <Button key={id}>
                  <NavLink to={destination[id]} >
                    <Typography textAlign="center" sx={{color: 'purple',}}>{page}</Typography>
                  </NavLink>
                </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}><ConnectAccount /></Box>
        </Toolbar>
      </Container>
    </AppBar>
    );
  };

  export default Header;