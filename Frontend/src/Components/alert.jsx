import {Alert, Box, Collapse, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';

export const AlertComponent  = ({alertData}) => {
  let {show,type,message} = alertData;

  const [open,setOpen] = useState(false);

  useEffect(() => {
    if(show){
      setOpen(true)
    }
    else setOpen(false);
    
  }, [show])

  useEffect(() => {
    if(open){
      setTimeout(() => {
        setOpen(false);
      }, 4000);
    };
  }, [open])
    
  return (
  <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          severity={type}
          variant="filled"
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
          sx={{position:'absolute',width:400,top:80,left:'35%',zIndex:100,height:60,borderRadius:2,fontSize:19,alignItems:'center' }}
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  )
}