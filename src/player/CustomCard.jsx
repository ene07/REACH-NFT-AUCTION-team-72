import React from "react";
import { Card, Button, CardActions, CardMedia, Typography, CardContent, Grid } from "@mui/material";
// import { NavLink } from "react-router-dom";

function CustomCard({ title, imgsrc, description }) {
  return (
    <Grid item xs={6} sm={6} md={4} spacing={2} elevation={8} sx={{ pt: '6.25%',}}>
      {/* sx={{ height: '100%'}} */}
      <Card sx={{}}>
        <CardMedia component="img" sx={{pl: '4.25%',}} image={imgsrc} alt="random" />
          <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            { title }
          </Typography>
          <Typography>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='outlined' size="medium">Bid</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default CustomCard;

    // <>
    //   <div className="col-md-4 col-10 mx-auto">
    //     <div className="card">
    //       <img src={imgsrc} className="card-img-top" alt="..." />
    //       <div className="card-body">
    //         <h5 className="card-title">{title}</h5>
    //         <p className="card-text">
    //           Some quick example text to build on the card title and make up the
    //           bulk of the card's content.
    //         </p>
    //         <NavLink to="/contact" className="btn btn-primary">
    //           Buy Now
    //         </NavLink>
    //       </div>
    //     </div>
    //   </div>
    // </>