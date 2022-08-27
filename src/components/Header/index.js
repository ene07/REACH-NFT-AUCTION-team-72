// import React from 'react'
// import {Link} from "react-router-dom"
// import ConnectAccount from '../connectAccount'
// export default function Header() {
//   return (
//     <div className='py-6 px-10 '>
//        <div className='nav flex justify-between items-center '> 
//           <div className='flex space-x-10 items-center '>
//               <main >
//               <h5 className='text-lg'>Audio NFT</h5>
//               </main>
//               <main className='flex space-x-6 items-center'>
                
//                  <Link to="/"><h5 className='text-slate-400'>Home</h5></Link>
//                  <Link to="/collections"><h5 className='text-slate-400'>Collection</h5></Link>
//                  <Link to="/createnft"><h5 className='text-slate-400'>Create</h5></Link>
//               </main>

//             </div>
//             <div className=''>
//                 <ConnectAccount />
//             </div>

     
//      </div>
//     </div>
   
//   )
// }


import * as React from 'react';
// import '../../active.css';
import '../../App.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import ConnectAccount from '../connectAccount'
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "react-router-dom"

const pages = ['Home', 'Explore collections', 'Create'];
const destination = ['/', '/collections', '/createnft'];
// const settings = ['Disconnect'];

// Not yet connected
const styled = {
  active: {
    background: 'red',
  },
  normal: {
    bakcground: ''
  }

} 

const indexes = [false, true];

function Header () {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [active, setActive] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleActive = (event) => {
    setActive(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="static" sx={{background: '#ff44'}} elevation={2}>
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
              // fontSize: '32px',
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
          <Box 
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', md: 'flex', justifyContent: 'flex-start', gap: 4  },
            }}>
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
  
  {/* <Tooltip title="Open settings">
    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
  </Menu> */}