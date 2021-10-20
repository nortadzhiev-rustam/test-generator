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
  IconButton,
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

import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
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
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeDifficulty = (event) => {
    setDifficulty(event.target.value);
  };

  const handleVisibility = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };
  return (
    <Box sx={{ flexGrow: 1, marginTop: 5, marginInline: 50 }}>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={3}
          sx={{ paddingInline: 20 }}
        >
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
              <InputLabel id='demo-simple-select-label'>Difficulty</InputLabel>
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
              <InputLabel id='demo-simple-select-label'>Difficulty</InputLabel>
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

            <Button variant='outlined' color='info' onClick={handleVisibility}>
              Start
            </Button>
          </Item>
        </Grid>
        {visible &&  (
          <Grid
            item
            xs={12}
            sm={6}
            md={8}
            lg={8}
            xl={9}
            sx={{ paddingInline: 10 }}
          >
            <Item elevation={10} style={{ height: '80vh' }}>
              <Box style={{ width: '100%', textAlign: 'end' }}>
                <IconButton onClick={handleClose}>
                  <FontAwesomeIcon size='lg' color='red' icon={faWindowClose} />
                </IconButton>
              </Box>
              <hr />
              <Box
                sx={{
                  height: '75vh',
                  transform: 'translateZ(0px)',
                  flexGrow: 1,
                }}
              >
                <SpeedDial
                  ariaLabel='SpeedDial basic example'
                  sx={{ position: 'absolute', bottom: 10, right: 1 }}
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
