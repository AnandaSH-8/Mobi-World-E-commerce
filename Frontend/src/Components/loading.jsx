import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export const Loading = () => {
  return (
   <div style={{margin:"auto",width:"25%",marginTop:"5%"}}>
        <Stack sx={{ color: 'orange' }} spacing={15} direction="row">
            <CircularProgress color="secondary"/>
            <CircularProgress color="success" />
            <CircularProgress color="inherit" />
    </Stack>
   </div>
  );
}