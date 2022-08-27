import React from "react";
import Common from "../../components/Common";
import mic from "../../assests/Pictures/mic.jpg";
// import heroImg from "../../assests/Pictures/img2.png"
// import Avatar from "@mui/material/Avatar";
import team1 from "../../assests/Pictures/team1.jpg"
import team2 from "../../assests/Pictures/team2.jpeg"
import team3 from "../../assests/Pictures/team3.jpg"
import {MdEmail} from "react-icons/md"
import {AiFillGithub} from "react-icons/ai"
import {FaDiscord} from "react-icons/fa";
import { Divider } from "@mui/material";
import { Grid, Box, Typography, Stack, Card, CardMedia, CardContent } from "@mui/material";

function Home() {
  return (
    <>
      <Common
        imgsrc={mic}
        visit="/collections"
      />
      <Divider />
      {/* <img src={team1} alt=""  className='h-20 w-20 rounded-full'/> */}
      <div className='team flex flex-col justify-center items-center py-12 px-16'>
        <Typography variant='h5' className='text-purple-600 font-semibold pb-4'>Team-72</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} >
            <Box>
              <Card sx={{}}>
                <Grid item container xs={12}>
                  <Grid item xs={5}><CardMedia component="img" sx={{p: 4, width: '100%', height: '100%' }} image={team1} alt="random" className='rounded-full'/></Grid>
                  <Grid item xs={7} className='shadow-lg'>
                    <CardContent sx={{ flexGrow: 1, }} >
                      <Stack sx={{ }}>
                        <Typography gutterBottom variant="h5" className='text-sm text-purple-400'>Frontend Developer</Typography>
                        <Typography variant='body' gutterBottom className='text-lg font-semibold'>{"Oliviahotakwa"}</Typography>
                        <Typography className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo atque minima ipsum maxime possimus error cupiditate a libero ipsa?</Typography>
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, pt: 2 }}>
                          <MdEmail className="text-slate-500 cursor-pointer  text-lg" />
                          <AiFillGithub className="text-slate-500 cursor-pointer  text-lg"/>
                          <FaDiscord className="text-slate-500 cursor-pointer  text-lg"/>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            {/* <Grid item xs={12} md={4} > */}
              <Box>
                <Card sx={{}}>
                  <Grid item container xs={12}>
                    <Grid item xs={5}><CardMedia component="img" sx={{p: 4, width: '100%', height: '100%' }} image={team3} alt="random" className='rounded-full'/></Grid>
                    <Grid item xs={7}>
                      <CardContent sx={{ flexGrow: 1, }} >
                        <Stack sx={{ }}>
                          <Typography gutterBottom variant="h5" className='text-sm text-purple-400'>Fullstack Developer</Typography>
                          <Typography variant='body' gutterBottom className='text-lg font-semibold'>{"Scapula "}</Typography>
                          <Typography className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo atque minima ipsum maxime possimus error cupiditate a libero ipsa?</Typography>
                          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, pt: 2 }}>
                            <MdEmail className="text-slate-500 cursor-pointer  text-lg" />
                            <AiFillGithub className="text-slate-500 cursor-pointer  text-lg"/>
                            <FaDiscord className="text-slate-500 cursor-pointer  text-lg"/>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </Box>
            {/* </Grid> */}
          </Grid>
          
          <Grid item xs={12} md={4}>
          <Box>
            <Card sx={{}}>
              <Grid item container xs={12}>
                <Grid item xs={5}><CardMedia component="img" sx={{p: 4, width: '100%', height: '100%' }} image={team2} alt="random" className='rounded-full'/></Grid>
                <Grid item xs={7}>
                  <CardContent sx={{ flexGrow: 1, }} >
                    <Stack sx={{ }}>
                      <Typography gutterBottom variant="h5" className='text-sm text-purple-400'>Fullstack Developer</Typography>
                      <Typography variant='body' gutterBottom className='text-lg font-semibold'>{"Bobelr#8524 "}</Typography>
                      <Typography className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo atque minima ipsum maxime possimus error cupiditate a libero ipsa?</Typography>
                      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, pt: 2 }}>
                        <MdEmail className="text-slate-500 cursor-pointer  text-lg" />
                        <AiFillGithub className="text-slate-500 cursor-pointer  text-lg"/>
                        <FaDiscord className="text-slate-500 cursor-pointer  text-lg"/>
                      </Box>
                      </Stack>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;









// import React from 'react'
// import heroImg from "../../assests/Pictures/img2.png"
// import team1 from "../../assests/Pictures/team1.jpg"
// import team2 from "../../assests/Pictures/team2.jpeg"
// import team3 from "../../assests/Pictures/team3.jpg"
// import {MdEmail} from "react-icons/md"
// import {AiFillGithub} from "react-icons/ai"
// import {FaDiscord} from "react-icons/fa"


{/* <div className='team flex flex-col justify-center items-center py-12 px-16'>
<h5 className='text-blue-600 text-lg font-semibold'>Team-72</h5>
<main className='flex  justify-center items-center space-x-4 py-6'>
    <div className='team1 flex  items-center space-x-10 border py-8 px-12 rounded-lg shadow-lg'>
      <main className='flex justify-center'>
          <img src={team1} alt=""  className='h-20 w-20 rounded-full'/>
      </main>
      <main className='flex flex-col justify-center space-y-0'>
          <h5 className='text-sm text-purple-400'>Frontend Developer</h5>
          <h5 className='text-lg font-semibold'>{"Lorem ipsum dolor "}</h5>
          <p className='text-xs'>
            Lorem ipsum dolor sit amet,<br></br>
            consectetur adipiscing elit,<br></br>
            sed do eiusmod tempor incididunt <br></br>
            ut labore et dolore magna aliqua</p>
          <main className="flex justify-center items-center space-x-4 py-3 ">
                    <MdEmail className="text-slate-500  text-lg" />
                    <AiFillGithub className="text-slate-500  text-lg"/>
                    <FaDiscord className="text-slate-500  text-lg"/>
          </main>
      </main>
    </div>

    <div className='team2 flex  items-center space-x-10 border py-8 px-12 rounded-lg shadow-lg'>
      <main className='flex justify-center'>
          <img src={team2} alt=""  className='h-20 w-20 rounded-full'/>
      </main>
      <main className='flex flex-col justify-center space-y-0'>
          <h5 className='text-sm text-purple-400'>Fullstack Developer</h5>
          <h5 className='text-lg font-semibold'>{"Lorem ipsum dolor "}</h5>
          <p className='text-xs'>
            Lorem ipsum dolor sit amet,<br></br>
            consectetur adipiscing elit,<br></br>
            sed do eiusmod tempor incididunt <br></br>
            ut labore et dolore magna aliqua</p>
          <main className="flex justify-center items-center space-x-4 py-3">
            <MdEmail className="text-slate-500  text-lg" />
            <AiFillGithub className="text-slate-500  text-lg"/>
          <FaDiscord className="text-slate-500  text-lg"/>
        </main>
      </main>
    </div>

    <div className='team3 flex  items-center space-x-10 border py-8 px-12 rounded-lg shadow-lg'>
      <main className='flex justify-center'>
          <img src={team3} alt=""  className='h-20 w-20 rounded-full'/>
      </main>
      <main className='flex flex-col justify-center space-y-0'>
          <h5 className='text-sm text-purple-400'>Fullstack Developer</h5>
          <h5 className='text-lg font-semibold'>{"Lorem ipsum dolor "}</h5>
          <p className='text-xs'>
            Lorem ipsum dolor sit amet,<br></br>
            consectetur adipiscing elit,<br></br>
            sed do eiusmod tempor incididunt <br></br>
            ut labore et dolore magna aliqua</p>
            <main className="flex justify-center items-center space-x-4 py-3">
            <MdEmail className="text-slate-500 text-lg" />
            <AiFillGithub className="text-slate-500  text-lg"/>
          <FaDiscord className="text-slate-500  text-lg"/>
                  </main>
      </main>
    </div>
</main>
// export default function Home() { */}
//   return (
//     <div>
//        <div>
//           <div className='top flex px-20 py-20 flex items-center'>
//              <main className='w-3/5 flex flex-col space-y-4'>
//               <h5 className='text-3xl font-semibold text-slate-700'>Welcome to the world of <br></br><span className='text-4xl font-bold text-slate-900 py-0.5'>Audio NFT's.</span></h5>
//                <p className='text-slate-700 text-2xl font-semibold '>
//                We're a team of talented <br></br>
//                musical creators. Music is art and art is music.
//                <br></br>
//                Own your space.
//                </p>
//                <div className='flex px-6 py-3 '>
//                   <button className='py-0.5 px-2 bg-blue-700 text-white rounded-sm text-sm hover:bg-white hover:text-blue-700'>Explore</button>
                
//                </div>
//              </main>
//              <main className='w-2/5 flex justify-center'>
//                 <img src={heroImg} alt="" className=''/>
//              </main>

//           </div>
//           <div className='mid flex flex-col justify-center items-center space-y-6' >
//             <h5 className='text-blue-600 text-lg font-semibold'>About Our project</h5>
//             <p className='text-sm text-slate-800 px-32'>
//                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "}
//             </p>
            
//             </div>
//          <div className='team flex flex-col justify-center items-center py-12 px-16'>
//             <h5 className='text-blue-600 text-lg font-semibold'>Team-72</h5>
//             <main className='flex  justify-center items-center space-x-4 py-6'>
//                <div className='team1 flex  items-center space-x-10 border py-8 px-12 rounded-lg shadow-lg'>
//                   <main className='flex justify-center'>
//                      <img src={team1} alt=""  className='h-20 w-20 rounded-full'/>
//                   </main>
//                   <main className='flex flex-col justify-center space-y-0'>
//                      <h5 className='text-sm text-purple-400'>Frontend Developer</h5>
//                      <h5 className='text-lg font-semibold'>{"Lorem ipsum dolor "}</h5>
//                      <p className='text-xs'>
//                         Lorem ipsum dolor sit amet,<br></br>
//                         consectetur adipiscing elit,<br></br>
//                         sed do eiusmod tempor incididunt <br></br>
//                         ut labore et dolore magna aliqua</p>
//                       <main className="flex justify-center items-center space-x-4 py-3 ">
//                                 <MdEmail className="text-slate-500  text-lg" />
//                                 <AiFillGithub className="text-slate-500  text-lg"/>
//                                 <FaDiscord className="text-slate-500  text-lg"/>
//                      </main>
//                   </main>
//                </div>

//                <div className='team2 flex  items-center space-x-10 border py-8 px-12 rounded-lg shadow-lg'>
//                   <main className='flex justify-center'>
//                      <img src={team2} alt=""  className='h-20 w-20 rounded-full'/>
//                   </main>
//                   <main className='flex flex-col justify-center space-y-0'>
//                      <h5 className='text-sm text-purple-400'>Fullstack Developer</h5>
//                      <h5 className='text-lg font-semibold'>{"Lorem ipsum dolor "}</h5>
//                      <p className='text-xs'>
//                         Lorem ipsum dolor sit amet,<br></br>
//                         consectetur adipiscing elit,<br></br>
//                         sed do eiusmod tempor incididunt <br></br>
//                         ut labore et dolore magna aliqua</p>
//                      <main className="flex justify-center items-center space-x-4 py-3">
//                        <MdEmail className="text-slate-500  text-lg" />
//                        <AiFillGithub className="text-slate-500  text-lg"/>
//                       <FaDiscord className="text-slate-500  text-lg"/>
//                    </main>
//                   </main>
//                </div>

//                <div className='team3 flex  items-center space-x-10 border py-8 px-12 rounded-lg shadow-lg'>
//                   <main className='flex justify-center'>
//                      <img src={team3} alt=""  className='h-20 w-20 rounded-full'/>
//                   </main>
//                   <main className='flex flex-col justify-center space-y-0'>
//                      <h5 className='text-sm text-purple-400'>Fullstack Developer</h5>
//                      <h5 className='text-lg font-semibold'>{"Lorem ipsum dolor "}</h5>
//                      <p className='text-xs'>
//                         Lorem ipsum dolor sit amet,<br></br>
//                         consectetur adipiscing elit,<br></br>
//                         sed do eiusmod tempor incididunt <br></br>
//                         ut labore et dolore magna aliqua</p>
//                         <main className="flex justify-center items-center space-x-4 py-3">
//                         <MdEmail className="text-slate-500 text-lg" />
//                        <AiFillGithub className="text-slate-500  text-lg"/>
//                       <FaDiscord className="text-slate-500  text-lg"/>
//                              </main>
//                   </main>
//                </div>
//             </main>
//          </div>
//        </div>
//     </div>
//   )
// }
