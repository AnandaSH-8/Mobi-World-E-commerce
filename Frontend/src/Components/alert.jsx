import {Alert, Box, Collapse, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';

export const AlertComponent  = ({alertData}) => {
  let {show,type,message} = alertData;
  console.log(show,type,message,'IS AT LINE No. 8 IN alert.jsx');

  const [open,setOpen] = useState(false);

  useEffect(() => {
    if(show){
      setOpen(true)
    }
    else setOpen(false);
    
  }, [show])
    
  return (
  <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          severity={type}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{position:'absolute',width:400,top:80,left:'35%',zIndex:100,height:60 }}
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  )
}