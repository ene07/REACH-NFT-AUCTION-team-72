import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CancelRounded from '@mui/icons-material/CancelRounded';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { LoadingButon } from './LoadingButon';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://somelink.com/">
        Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// const theme = createTheme();

/**
 * @Note NFTCreatorView expects a prop which is of type function.
 *        It should contain logic that exits this page when clicked.
 *        It should be declared in the child component where this component
 *          is invoked.
 * 
 *  @dev - Perhaps { Scapula}
 *    @notice : You can access form data very easily from the submit button
 *                handler. That's why I console log it. 
 */
export default function NFTCreatorView({ exitCreatorView, switchMode }) {
  const [formdata, updateCollectedData] = React.useState({});
  const [display, setDisplay] = React.useState(false);

  const handleSubmission = (event) => {
    setDisplay(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    updateCollectedData({
      title: data.get('title'),
      id: data.get('id'),
      url: data.get('url'),
      minimumBid: data.get('minimumBid'),
      description: data.get('description'),
    });
    console.log(formdata)

    if(data.get('title') === 'exit') setDisplay(false);
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ py: 8 }} >
    <Grid container spacing={4}>
      <Grid item>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column',  }}>
          {/* <CardMedia
              component="img"
              sx={{
                // 16:9
                pt: '56.25%',
              }}
              image="https://source.unsplash.com/random"
              alt="random"
            /> */}
            <CardContent sx={{ flexGrow: 1 }}>
            {/* <Container component="main" maxWidth="xs"> */}
        
        <Box >{switchMode}</Box>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Tooltip title='Cancel' sx={{cursor: 'pointer'}}>
            <Button onClick={ exitCreatorView }>
              <Avatar sx={{ 
                m: 1, 
                background: 'black',
                "&:hover": {
                  background: 'purple'
                }
                
              }}>
                <CancelRounded />
              </Avatar>
            </Button>
          </Tooltip>
          <Typography component="h1" variant="h5">
            Create an Auction
          </Typography>
          <Box component="form" noValidate={false} onSubmit={handleSubmission} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="title"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="id"
                  label="Unique Id"
                  name="id"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type='number'
                  id="minimumBid"
                  label="Minimum bid"
                  name="minimumBid"
                  autoComplete="Minimum-bid"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="url"
                  label="Url"
                  name="url"
                  autoComplete="NFT-Url"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="description"
                  type="detail"
                  id="detail"
                  autoComplete="new-description"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="confirmCorrectness" color="primary" />}
                  label="I confirm all information is correct."
                />
              </Grid>
            </Grid>
            <LoadingButon display={display}>
              Submit
            </LoadingButon>
          </Box>
        </Box>
   
      {/* </Container> */}


            </CardContent>
            {/* <CardActions>
              <Button size="small">View</Button>
              <Button size="small">Edit</Button>
            </CardActions> */}
          </Card>
        </Grid>
    </Grid>
    <Copyright sx={{ mt: 5 }} />
  </Container>



    // <ThemeProvider theme={theme}>
    // <Card>
      
    // </Card>
    // </ThemeProvider>
  );
}
            // <Grid container justifyContent="flex-end">
            //   <Grid item>
            //     <Link href="#" variant="body2">
            //       Already have an account? Sign in
            //     </Link>
            //   </Grid>
            // </Grid>