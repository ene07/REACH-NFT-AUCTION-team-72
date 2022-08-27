import React from 'react'
// import React,{useState,useEffect,useRef} from 'react'
import { loadStdlib } from '@reach-sh/stdlib';
// import {AiOutlineCloseCircle} from "react-icons/ai" 
// import "./createnft.css"
import * as backend from '../../reach-app/build/index.main.mjs'
import { collection, setDoc,doc,getDoc,addDoc} from  'firebase/firestore'
import { db } from '../../firebase/fireabse.util';
// import { useRecoilValue,useRecoilState } from 'recoil';
// import { AccountState, BidderState,BidOutcomeState,TimeoutState} from '../../recoilState/globalState';
// import Modal from '../../components/modal';
// import {Link} from "react-router-dom"

const reach = loadStdlib('ALGO');

export const deploy = {
  // const options. =useRecoilValue(options.State)
  // const [auctionReady,setReady]=useState("")
  // const [Bids,setBids]=useRecoilState(BidderState)
  // const [Outcome,setOutcome]=useRecoilState(BidOutcomeState)
  // const [timeOut,setTimeOut]=useRecoilState(TimeoutState)
  // const [ctcInfo,setCtcInfo] =useState("")
  // const [ArrayctcInfo,setArrayctcInfo]=useState([])
  // const [deadline,setDeadline]=useState("")
  // const [title,setTitle]=useState("")
  // const [description,setDescription]=useState("")
  // const [trigger,setTrigger] =useState(false)
  // const [price,setPrice]=useState("")
  // const [ErrorMsg,setErrorMsg]=useState("")
  // const [imgUrl,setUrl]=useState("")
  // const [showView,setView]=useState(false)
  // const audioNFT= useRef();

  // const [formdata, updateCollectedData] = React.useState({});
  // const [display, setDisplay] = React.useState(false);
  
  // const handleSubmission = (event) => {
  //   setDisplay(true);
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   updateCollectedData({
  //     title: data.get('title'),
  //     id: data.get('id'),
  //     url: data.get('url'),
  //     minimumBid: data.get('minimumBid'),
  //     description: data.get('description'),
  //   });
  //   console.log(formdata)

  //   if(data.get('title') === 'exit') setDisplay(false);
  // };

  
  deployContract: async (options) => {
    if(options === null || options === undefined) return null;
    console.log("deploying");

    options.audioNFT.current = await reach.launchToken(options.account,"AudioMix","AMT",{supply:1})
      const deployerInteract = {
        getSale: () => ({
          nftId: options.audioNFT.current.id,
          minBid: reach.parseCurrency(Number(options.price)),
          lenInBlock: Number(options.deadline)
          
        }),
        auctionReady:()=>{
          options.setReady("Auction is open")
      },

      showBid:(who, amt)=>{
        console.log(`Creator saw that ${reach.formatAddress(who) }bid ${reach.formatCurrency(amt)}`)
        const bids =[]
        bids.push({
          address: reach.formatAddress(who),
          amount: reach.formatCurrency(amt)
        })
        options.setBids(bids);
      },
      showOutcome:(winner, amt)=>{
        console.log(`Creator saw that ${reach.formatAddress(winner) }bid ${reach.formatCurrency(amt)}`)
        options.setOutcome(`${reach.formatAddress(winner).slice(0,9)+"..." } won bid at ${reach.formatCurrency(amt)} Algo`)
      },
      showTimeout:()=>{
        // console.log("deadline")
        // options.setTimeOut("Deadline reached")
      },
    }
    options.setTrigger(true)
    try{
      const contract = options.account.contract(backend);
      backend.Creator(contract, deployerInteract);
      const cInfo = await contract.getInfo();
      options.setArrayctcInfo([JSON.stringify(cInfo,null,2)])
      options.setCtcInfo(JSON.stringify(cInfo,null,2))
    }
      catch(e){
        // console.log(e)
        options.setErrorMsg(e.message)
    }
  },

  addToCollection: async(options) => {
    // console.log("pushing to firebase")
    options.handleClose();
    const docRef = await addDoc(collection(db, "Nfts"), {
      // nftId:audioNFT.current.id,
      title: options.title,
      description: options.description,
      ctcInfo: options.ctcInfo,
      price: options.price,
      date: Number(Date.now()),
      available: true,
      imgUrl: options.imgUrl,
      timeout: "Ongoing",
    });

    options.clearInputData({});
      // console.log(docRef)

      // options.setView(true)
      // options.setDeadline("")
      // options.setTitle("")
      // options.setDescription("")

      // options.setPrice("")
      // console.log(ctcInfo, options.account, "accccccc")
      // console.log(options.auctionReady)
    }
  }


  //   <Container component="main" maxWidth="sm" sx={{ py: 8 }} >
  //     <Grid container spacing={4}>
  //       <Grid item>
  //         <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column',  }}>
  //           <CardContent sx={{ flexGrow: 1 }}>
  //           {/* <CssBaseline /> */}
  //             <Box
  //               sx={{
  //                 marginTop: 8,
  //                 display: 'flex',
  //                 flexDirection: 'column',
  //                 alignItems: 'center',
  //               }}
  //             >
  //               <Tooltip title='Cancel' sx={{cursor: 'pointer'}}>
  //                 <NavLink to='/' onClick={ exitCreatorView } sx={{cursor: 'pointer'}}>
  //                   <Avatar sx={{ 
  //                     m: 1, 
  //                     background: 'purple',
  //                     "&:hover": {
  //                       background: 'purple'
  //                     }
                      
  //                   }}>
  //                     <CancelRounded />
  //                   </Avatar>
  //                 </NavLink>
  //               </Tooltip>
  //               <Typography component="h1" variant="h5">
  //                 Create an Auction
  //               </Typography>
  //               <Box component="form" noValidate={false} onSubmit={handleSubmission} sx={{ mt: 3 }}>
  //                 <Grid container spacing={2}>
  //                   <Grid item xs={12} sm={6}>
  //                     <TextField
  //                       autoComplete="given-name"
  //                       name="title"
  //                       required
  //                       fullWidth
  //                       id="title"
  //                       label="Title"
  //                       autoFocus
  //                     />
  //                   </Grid>
  //                   <Grid item xs={12} sm={6}>
  //                     <TextField
  //                       required
  //                       fullWidth
  //                       id="id"
  //                       label="Unique Id"
  //                       name="id"
  //                       autoComplete="family-name"
  //                     />
  //                   </Grid>
  //                   <Grid item xs={12} sm={6}>
  //                     <TextField
  //                       required
  //                       fullWidth
  //                       type='number'
  //                       id="minimumBid"
  //                       label="Minimum bid"
  //                       name="minimumBid"
  //                       autoComplete="Minimum-bid"
  //                     />
  //                   </Grid>
  //                   <Grid item xs={12} sm={6}>
  //                     <TextField
  //                       required
  //                       fullWidth
  //                       id="url"
  //                       label="Url"
  //                       name="url"
  //                       autoComplete="NFT-Url"
  //                     />
  //                   </Grid>
  //                   <Grid item xs={12}>
  //                     <TextField
  //                       required
  //                       fullWidth
  //                       name="description"
  //                       label="description"
  //                       type="detail"
  //                       id="detail"
  //                       autoComplete="new-description"
  //                     />
  //                   </Grid>
  //                   <Grid item xs={12}>
  //                     <FormControlLabel
  //                       control={<Checkbox value="confirmCorrectness" color="primary" />}
  //                       label="I confirm all information is correct."
  //                     />
  //                   </Grid>
  //                 </Grid>
  //                 <LoadingButon display={display}>
  //                   { 'Submit' }
  //                 </LoadingButon>
  //               </Box>
  //             </Box>
  //           </CardContent>
  //         </Card>
  //       </Grid>
  //   </Grid>
  //   {/* /* <Copyright sx={{ mt: 5 }} /> */}
  // </Container>