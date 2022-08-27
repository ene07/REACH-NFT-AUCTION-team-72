import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 20,
  p: 4,
  display: "flex",
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center'
};

export default function ViewNftModal(prop) {
  const { 
    trigger, 
    handleClose,
    formdata,
    // setTrigger, 
    arrayctcInfo,
    setView,
    setDeadline,
    auctionReady,
    account,
    ctcInfo,
    errorMsg,
    addToCollection } = prop;

  return (
    <div>
      <Modal
        open={trigger}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant='h4' id="modal-modal-title" >Contract information</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>dfd{arrayctcInfo[0]}</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>dcd{errorMsg}</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>dcd{auctionReady}</Typography>
          <Button 
            variant='contained'
            sx={{background: "purple", mt: 2, width: '40%', "&:hover": {background: 'white', transition: '0.3s ease-in', color: 'purple', fontWeight: 'bold'}}}
            onClick={() => addToCollection({
              ...formdata,
              setView: setView,
              setDeadline: setDeadline,
              auctionReady: auctionReady,
              account: account,
              ctcInfo: ctcInfo,
              arrayctcInfo: arrayctcInfo,
              handleClose: handleClose
            }) }
            >ok</Button>
        </Box>
      </Modal>
    </div>
  );
}
