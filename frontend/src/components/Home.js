import React from 'react';
import Paper from '@mui/material/Paper';
import {
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faCircle,
  faMinusCircle,
  faPlusCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import 'animate.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  paddingBlock: theme.spacing(4),
  paddingInline: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: 15,
}));

const categories = [
  'English',
  'Protuguese',
  'Mathematics',
  'Physics',
  'Chemistry',
  'French',
];

const difficulties = ['Easy', 'Medium', 'Hard', 'Challenge'];
const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];
const Home = () => {
  const [category, setCategory] = React.useState('');
  const [difficulty, setDifficulty] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [isFull, setFull] = React.useState(false);
  const [mouseIn, setMouseIn] = React.useState(false);
  const [isSwitch, setSwitch] = React.useState(false);
  const handleFullScreen = () => {
    setFull(!isFull);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleMouseIn = () => {
    setMouseIn(true);
  };

  const handleChangeDifficulty = (event) => {
    setDifficulty(event.target.value);
  };

  const handleVisibility = () => {
    if (category !== '') {
      setVisible(true);
    } else setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
    setMouseIn(false);
    setFull(false)
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexGrow: 1,

        marginInline: '2%',
        marginBlock: 40,
      }}
    >
      <Grid container spacing={1}>
        {!isFull && (
          <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
            <Paper elevation={10} sx={{ borderRadius: 5, marginBottom: 2 }}>
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  padding: 1,
                }}
              >
                <Grid item xs={6}>
                  {!isSwitch ? (
                    <div
                      style={{
                        height: 60,

                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 2,
                        borderRadius: 10,
                        cursor: 'pointer'
                      }}
                     
                      onClick={() => setSwitch(true)}
                    >
                      Input
                    </div>
                  ) : (
                    <div
                      style={{
                       
                        height: 60,
                        backgroundColor: '#2979ff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 2,
                        borderRadius: 10,
                        color: 'white',
                        cursor: 'pointer'
                      }}
                      className='animate__animated animate__fadeInRight animate__faster'
                      onClick={() => setSwitch(true)}
                    >
                      Input
                    </div>
                  )}
                </Grid>
                <Grid item xs={6}>
                  {!isSwitch ? (
                    <div
                      style={{
                        
                        height: 60,
                        backgroundColor: '#2979ff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 2,
                        borderRadius: 10,
                        color: 'white',
                        cursor: 'pointer'
                      }}
                      className='animate__animated animate__fadeInLeft animate__faster'
                      onClick={() => setSwitch(false)}
                    >
                      Output
                    </div>
                  ) : (
                    <div
                      style={{
                        height: 60,

                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 2,
                        borderRadius: 10,
                        cursor: 'pointer'
                      }}
                      onClick={() => setSwitch(false)}
                    >
                      Output
                    </div>
                  )}
                </Grid>
              </Grid>
            </Paper>

            <Item elevation={10}>
              <Typography
                style={{ marginBottom: 5, textAlign: 'start' }}
                variant='body2'
                fontWeight={900}
                color='initial'
              >
                CHOOSE CATEGORY
              </Typography>
              <FormControl size='small' fullWidth style={{ marginBottom: 20 }}>
                <InputLabel id='demo-simple-select-label'>Category</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={category}
                  label='Category'
                  onChange={handleChangeCategory}
                >
                  {categories.map((item, idx) => {
                    return (
                      <MenuItem key={idx} value={item.toLowerCase()}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <Typography
                style={{ marginBottom: 5, textAlign: 'start' }}
                variant='body2'
                fontWeight={900}
                color='initial'
              >
                CHOOSE DIFFICULTY
              </Typography>
              <FormControl size='small' fullWidth style={{ marginBottom: 20 }}>
                <InputLabel id='demo-simple-select-label'>
                  Difficulty
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={difficulty}
                  label='Category'
                  onChange={handleChangeDifficulty}
                >
                  {difficulties.map((dif, idx) => {
                    return (
                      <MenuItem key={idx} value={dif.toLowerCase()}>
                        {dif}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <Typography
                style={{ marginBottom: 5, textAlign: 'start' }}
                variant='body2'
                fontWeight={900}
                color='initial'
              >
                CHOOSE DIFFICULTY
              </Typography>
              <FormControl size='small' fullWidth style={{ marginBottom: 20 }}>
                <InputLabel id='demo-simple-select-label'>
                  Difficulty
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={difficulty}
                  label='Category'
                  onChange={handleChangeDifficulty}
                >
                  {difficulties.map((dif, idx) => {
                    return (
                      <MenuItem key={idx} value={dif.toLowerCase()}>
                        {dif}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              <Button
                variant='outlined'
                color='info'
                onClick={handleVisibility}
              >
                Start
              </Button>
            </Item>
          </Grid>
        )}
        {visible && (
          <Grid
            item
            xs={12}
            sm={isFull ? 12 : 8}
            md={isFull ? 12 : 8}
            lg={isFull ? 12 : 9}
            xl={isFull ? 12 : 10}
          >
            <Paper
              elevation={10}
              style={{ minHeight: '82vh', paddingBottom: 40, borderRadius: 15 }}
              className='animate__animated animate__zoomIn'
            >
              <Box
                style={{
                  display: 'flex',
                  position: 'relative',

                  margin: 0,
                  padding: 0,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: 50,
                    backgroundColor: '#e8f5e9',
                    textAlign: 'start',
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    paddingLeft: 20,
                    paddingTop: 20,
                  }}
                >
                  {mouseIn ? (
                    <FontAwesomeIcon
                      size='lg'
                      style={{  borderRadius: '50%' }}
                      onClick={handleClose}
                      color='#e63946'
                      icon={faTimesCircle}
                      onMouseLeave={() => setMouseIn(!mouseIn)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      size='lg'
                      color='#e63946'
                      icon={faCircle}
                      onMouseOver={handleMouseIn}
                    />
                  )}

                  {mouseIn ? (
                    <FontAwesomeIcon
                      size='lg'
                      style={{
                        marginLeft: 5,
                        
                        borderRadius: '50%',
                      }}
                      color='#ee9b00'
                      icon={faMinusCircle}
                      onMouseLeave={() => setMouseIn(!mouseIn)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      size='lg'
                      style={{ marginLeft: 5 }}
                      color='#ee9b00'
                      icon={faCircle}
                      onMouseOver={handleMouseIn}
                    />
                  )}

                  {mouseIn ? (
                    <FontAwesomeIcon
                      size='lg'
                      style={{
                        marginLeft: 5,
                        
                        borderRadius: '50%',
                      }}
                      color='#43aa8b'
                      icon={faPlusCircle}
                      onClick={handleFullScreen}
                      onMouseLeave={() => setMouseIn(!mouseIn)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      size='lg'
                      style={{ marginLeft: 5 }}
                      color='#43aa8b'
                      icon={faCircle}
                      onMouseOver={handleMouseIn}
                    />
                  )}
                </div>
              </Box>

              <Box
                sx={{
                  minHeight: '76vh',
                  transform: 'translateZ(0px)',
                  flexGrow: 1,
                }}
              >
                <SpeedDial
                  ariaLabel='SpeedDial basic example'
                  sx={{ position: 'absolute', bottom: -25, right: 15 }}
                  icon={<SpeedDialIcon />}
                >
                  {actions.map((action) => (
                    <SpeedDialAction
                      key={action.name}
                      icon={action.icon}
                      tooltipTitle={action.name}
                    />
                  ))}
                </SpeedDial>
              </Box>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Home;
