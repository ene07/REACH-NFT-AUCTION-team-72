import React from 'react';
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';

export const LoadingButon = ({display}) => {
  return (
    <Stack spacing={2} direction='row' >
      {
        display? <LoadingButton
        type="submit"
        fullWidth
        sx={{ 
          mt: 3, 
          mb: 2, 
          background: 'black',
          "&:hover": {
            background: 'tomato'
          }
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
            background: 'transparent',
            "&:hover": {
              background: 'tomato'
            }
          }}
          loading={display}
          variant='outlined' 
          // loadingIndicator='Creating your copyright ...'
        >
          Submit
        </LoadingButton>

      }

    </Stack>
  )
}
