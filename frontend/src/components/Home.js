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
  faMinusCircle,
  faPlusCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

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

  const handleFullScreen = () => {
    setFull(!isFull);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
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
                spacing={1}
              >
                <Grid
                  item
                  xs={6}
                  style={{
                    height: 60,

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 2,
                    borderRadius: 10,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    Input
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{
                    height: 60,
                    backgroundColor: '#006d77',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 2,
                    borderRadius: 10,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    Output
                  </div>
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
            <Item elevation={10} style={{ minHeight: '75vh' }}>
              <Box
                style={{
                  width: '100%',
                  height: 60,
                  textAlign: 'start',
                  display: 'flex',
                  position: 'relative',
                  top: -15,
                  left: -15,
                }}
              >
                <FontAwesomeIcon
                  size='20px'
                  onClick={handleClose}
                  color='#e63946'
                  icon={faTimesCircle}
                />

                <FontAwesomeIcon
                  style={{ marginLeft: 5 }}
                  size='20px'
                  color='#ee9b00'
                  icon={faMinusCircle}
                />

                <FontAwesomeIcon
                  style={{ marginLeft: 5 }}
                  size='20px'
                  color='#43aa8b'
                  icon={faPlusCircle}
                  onClick={handleFullScreen}
                />
              </Box>

              <Box
                sx={{
                  minHeight: '70vh',
                  transform: 'translateZ(0px)',
                  flexGrow: 1,
                }}
              >
                <SpeedDial
                  ariaLabel='SpeedDial basic example'
                  sx={{ position: 'absolute', bottom: -10, right: -15 }}
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
            </Item>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Home;
