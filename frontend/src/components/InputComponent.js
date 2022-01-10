import React from 'react';
import {
  TextField,
  Button,
  InputBase,
  Box,
  IconButton,
  Grid,
} from '@mui/material';
import { styled } from '@mui/styles';
import MathDialog from './MathDialog';

import { FunctionsRounded } from '@mui/icons-material';
import MathJax from 'mathjax3-react';

const StyledInput = styled(InputBase)({
  width: '100%',
  margin: '10px 10px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  padding: '10px',
});

const Input = (props) => {
  const [latex, setLatex] = React.useState('');
  const [open, setOpen] = React.useState(false);

  

  return (
    <Box display='flex' component='div' flexDirection='column'>
      <Grid
        container
        spacing={1}
        display='flex'
        flexDirection='row'
        alignItems='center'
      >
        <Grid item xs={12} md={1} mr={5}>
         <Button onClick={()=> setOpen(true)}><FunctionsRounded/></Button>
        </Grid>
        <Grid item xs={12} md={8} display='flex' justifyContent='start'>
          <MathJax.Provider
            
          >
            <MathJax.Formula formula={'$$' + latex + '$$'} />
          </MathJax.Provider>
        </Grid>
      </Grid>
      <MathDialog
        latex={latex}
        setLatex={(value) => setLatex(value)}
        setOpen={(status) => setOpen(status)}
        open={open}
      />
    </Box>
  );
};

export default Input;
