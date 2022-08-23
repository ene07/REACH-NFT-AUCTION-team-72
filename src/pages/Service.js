import React from "react";
import CustomCard from "../player/CustomCard";
// import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { cards } from "../player/cards";
// import Link from '@mui/material/Link';
// import TopBar from './TopBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import img1 from "../Pictures/img1.png";
// import img2 from "../Pictures/img2.png";
// import img3 from "../Pictures/img3.png";
// import img4 from "../Pictures/img4.png";
// import img5 from "../Pictures/img5.png";
// import img6 from "../Pictures/img6.png";

const theme = createTheme();

function Service() {
  // const { cards } = cardData;
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Grid container spacing={2}>
          {cards.map((card) => ( <CustomCard title={card.title} imgsrc={card.imgsrc} description={card.description}/> ))}
        </Grid>
      </main>
    </ThemeProvider>
  );
}

export default Service;

    // <>
    //   <div className="my-5">
    //     <h1 className="text-center"> Audious Nft</h1>
    //   </div>

    //   <div className="container-fluid mb-5">
    //     <div className="row">
    //       <div className="col-10 mx-auto">
    //         <div className="row gy-4">
    //           <Card title="Happiness " imgsrc={img1} />
    //           <Card title=" Forever grateful" imgsrc={img2} />
    //           <Card title=" Home For Chrismass" imgsrc={img3} />
    //           <Card title=" Road To Destiny" imgsrc={img4} />
    //           <Card title="Divine" imgsrc={img5} />
    //           <Card title=" Mantra" imgsrc={img6} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>


//     <Box sx={{bgcolor: 'background.paper', pt: 8, pb: 6,}} className='bgImage'>
//     <Container maxWidth="sm">
//       <Typography component="h1" variant="h2" align="center" gutterBottom fontWeight='bold' color='#fff000'>
//         {/* &apos; */}
//         Audio NFT Marketplace
//       </Typography>
//       <Typography variant="h5" align="center" color="white" paragraph>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum impedit porro consequuntur praesentium facilis fugiat eos cupiditate error eius soluta?
//       </Typography>
//       {/* <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center"> */}
//         <Button variant="contained">Create an auction</Button>
//       {/* </Stack> */}
//     </Container>
// </Box>