import React,{useState ,useRef} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CancelRounded from '@mui/icons-material/CancelRounded';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { NavLink } from "react-router-dom"
import { deploy } from './deploy';
import LoadingButton from '@mui/lab/LoadingButton';
import { useRecoilValue,useRecoilState } from 'recoil';
import { AccountState,BidderState,BidOutcomeState,TimeoutState} from '../../recoilState/globalState';
import ViewNftModal from '../../components/ViewNftModal';

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
export default function CreatNft({ exitCreatorView }) {
  const [formdata, setInputData] = React.useState({});
  const [display, setdisplay] = React.useState(false);
  const account = useRecoilValue(AccountState)
  const [auctionReady, setready]=useState("")
  const [bids,setBids]=useRecoilState(BidderState)
  const [outcome,setoutcome]=useRecoilState(BidOutcomeState)
  const [timeOut,settimeOut]=useRecoilState(TimeoutState)
  const [ctcInfo,setctcinfo] =useState("")
  const [arrayctcInfo,setarrayctcInfo]=useState([])
  const [deadline, setdeadline]=useState("")
  const [trigger,settrigger] = useState(false);
  const [errorMsg,seterrorMsg]=useState("")
  const [showView, setview] = useState(false)
  const audioNFT = useRef();

  const setDisplay = (value) => setdisplay(value);
  
  const setReady = (value) => setready(value);

  const setctcInfo = (value) => setctcinfo(value);

  const setOutcome = (value) => setoutcome(value);
  
  const setTimeOut = (value) => settimeOut(value);
  
  const setArrayctcInfo = (value) => setarrayctcInfo(value);
  
  const setDeadline = (value) => setdeadline(value);

  const setTrigger = (value) => settrigger(value);
  
  const setErrorMsg = (value) => seterrorMsg(value);
  
  const clearInputData = (value) => setInputData(value);

  const setView = (value) => setview(value);

  const handleClose = () => settrigger(false);

  const { deployContract, addToCollection } = deploy;
  
  const setIData = (value) => setInputData(value);

  const handleSubmission = (event) => {
    setDisplay(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const iData = {
      title: data.get('title'),
      price: data.get('price'),
      imgUrl: data.get('imgUrl'),
      deadline: data.get('deadline'),
      description: data.get('description'),
    }
    setIData(iData);

    console.log(formdata);
    deployContract({
      options: {
        audioNFT: audioNFT, 
        setReady: setReady, 
        auctionReady: auctionReady, 
        setBids: setBids, 
        setOutcome: setOutcome, 
        setTimeOut: setTimeOut, 
        deadline: deadline,
        setTrigger: setTrigger,
        setErrorMsg: setErrorMsg,
        setArrayctcInfo: setArrayctcInfo,
        clearInputData: clearInputData,
        setctcInfo: setctcInfo
      }});
  };
  // console.log(formdata);

  return (
    <Container component="main" maxWidth="sm" sx={{ py: 8 }} >
      <Grid container spacing={2}>
        <Grid item>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column',  }}>
            <CardContent sx={{ flexGrow: 1 }}>
            <CssBaseline />
              <Box  sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                <Tooltip title='Cancel' sx={{cursor: 'pointer'}}>
                  <NavLink to='/' onClick={ exitCreatorView } sx={{cursor: 'pointer'}}>
                    <Avatar sx={{m: 1, background: 'purple', "&:hover": {background: 'purple'}}}>
                      <CancelRounded />
                    </Avatar>
                  </NavLink>
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
                        // onChange={(e) => {e.preventDefault(); tempFormData.title = e.currentTarget; }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        type='number'
                        id="price"
                        label="Price"
                        name="price"
                        autoComplete="price"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        type='text'
                        id="deadline"
                        label="Deadline"
                        name="deadline"
                        autoComplete="Deadline"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        type='text'
                        id="imgUrl"
                        label="Image Url"
                        name="imgUrl"
                        autoComplete="Image-Url"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="description"
                        label="Description"
                        type="text"
                        id="description"
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
                  { 
                    !display ? <Button 
                      // display={display} 
                      type="submit"
                      fullWidth
                      sx={{ 
                        mt: 3, 
                        mb: 2,
                        background: 'purple',
                        "&:hover": {
                          background: 'transparent',
                          color: 'purple',
                          fontSize: '1em'
                        }
                      }}
                      variant='contained'
                      // loading={display}
                      
                    >{'Create Audio'}</Button> : <LoadingButton 
                      fullWidth
                      sx={{ 
                        mt: 3, 
                        mb: 2, 
                        background: 'grey',
                      }}
                    loading
                    variant='contained' 
                    // loadingIndicator='Creating your copyright ...'
                  >
                    Creating your copyright ...
                  </LoadingButton>
                }
                  {showView? <NavLink to='/yournft'><Button variant='contained' sx={{width: '100%', background: 'teal'}}>View NFT</Button></NavLink> : null}
                </Box>
              </Box>
            </CardContent>
          </Card>
         <ViewNftModal
            trigger={trigger}
            handleClose={handleClose}
            formdata={formdata}
            arrayctcInfo={arrayctcInfo}
            setView={setView}
            setDeadline={setDeadline}
            auctionReady={auctionReady}
            account={account}
            cteInfo={ctcInfo}
            errorMsg={errorMsg}
            addToCollection={addToCollection}
         />
        </Grid>
    </Grid>
    {/* /* <Copyright sx={{ mt: 5 }} /> */}
  </Container>
  );
}



// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://somelink.com/">
//         Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }