import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, Container, Stack, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Common({ name, imgsrc, visit, btname }) {
  return (
    // bgcolor:'background.paper', 
    <>
      <Grid container sx={{background: ''}}>
        <Grid item xs={12} md={6} >
          <Box sx={{bgcolor:'background.paper', pt: 8, pb: 6,}}className='bgImage'>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                // color="text.primary"z\
                gutterBottom
                fontWeight='bold'
                color='black'
              >
              {/* &apos; */}
              Audio NFT Marketplace
            </Typography>
            <Typography variant="h5" align="center" sx={{color:"black"}} paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum impedit porro consequuntur praesentium facilis fugiat eos cupiditate error eius soluta?
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" sx={{
                height: '58px', 
                background: 'purple',
                "&:hover" : {
                  transition: '0.2s ease-in-out',
                  zIndex: '1',
                  color: 'black',
                  background: 'white'
                }
              }}>Create an auction</Button>
            </Stack>
          </Container>
          </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{p: 6,}}>
              <img src={imgsrc} width={'100%'} height={'100%'} alt="Image" />
            </Box>
          </Grid>
        </Grid> 
      </>
  );
}

export default Common;
