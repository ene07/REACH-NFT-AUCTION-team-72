import React from 'react';
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';

export const LoadingButon = ({display, children}) => {
  return (
    <Stack spacing={2} direction='row' >
      {
        display? <LoadingButton
        type="submit"
        fullWidth
        sx={{ 
          mt: 3, 
          mb: 2, 
        }}
        variant='contained'
        loading={display}
        // loadingIndicator='Creating your copyright ...'
      >
        Submit
      </LoadingButton> : 
        <LoadingButton 
          type="submit"
          fullWidth
          sx={{ 
            mt: 3, 
            mb: 2, 
            background: 'purple',
            "&:hover": {
              background: 'grey'
            }
          }}
          loading={display}
          variant='contained' 
          // loadingIndicator='Creating your copyright ...'
        >
          {children}
        </LoadingButton>

      }

    </Stack>
  )
}
