import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
<<<<<<< HEAD
import {
  InputBase,
  InputAdornment,
  Box,
  Grow,
  
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
=======
import { InputBase } from '@mui/material';
>>>>>>> parent of 16fd8ff (added FroalaEditor & Mathtype)

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    height: 40,
    borderRadius: 10,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
      cursor: 'pointer',
    },
  }));

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

<<<<<<< HEAD


export default function SearchWindow({ open, setOpen }) {
  const [scroll] = React.useState('paper');
=======
  
>>>>>>> parent of 16fd8ff (added FroalaEditor & Mathtype)

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

 

  return (
    <Dialog
<<<<<<< HEAD
      
      TransitionComponent={Grow}
      transitionDuration={{ enter: 500, exit: 500 }}
=======
>>>>>>> parent of 16fd8ff (added FroalaEditor & Mathtype)
      open={open}
      onClose={handleClose}
      scroll={scroll}
      aria-labelledby='scroll-dialog-title'
      aria-describedby='scroll-dialog-description'
<<<<<<< HEAD
      sx={{ backdropFilter: 'blur(3px)', }}
    >
      <DialogTitle sx={{ paddingInline: 0, borderRadius: '10px' }} id='scroll-dialog-title'>
        <Search>
          <StyledInputBase
            sx={{ fontSize: '1.3rem' }}
            placeholder='Search…'
            inputProps={{ 'aria-label': 'search' }}
            endAdornment={
              <InputAdornment
                sx={{ padding: '10px', cursor: 'pointer' }}
                position='end'
              >
                <Box
                  sx={{
                    bgcolor: '#f5f5f5',
                    borderRadius: 2,
                    paddingInline: '15px',
                    paddingBlock: '5px',
                    fontSize: '1.2rem',
                    color: '#90a4ae',
                    '&:hover': {
                      color: '#b0bec5',
                    },
                  }}
                  onClick={() => setOpen(false)}
                >
                  Esc
                </Box>
              </InputAdornment>
            }
            startAdornment={
              <InputAdornment position='start'>
                <SearchIconWrapper>
                  <SearchIcon fontSize='large' />
                </SearchIconWrapper>
              </InputAdornment>
            }
          />
        </Search>
      </DialogTitle>
      <DialogContent sx={{minHeight: 400, p:0 }} dividers={scroll === 'paper'}>
        
=======
    >
      <DialogTitle id='scroll-dialog-title'>Subscribe</DialogTitle>
      <DialogContent dividers={scroll === 'paper'}>
        <DialogContentText
          id='scroll-dialog-description'
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          {[...new Array(50)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join('\n')}
        </DialogContentText>
>>>>>>> parent of 16fd8ff (added FroalaEditor & Mathtype)
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
}
