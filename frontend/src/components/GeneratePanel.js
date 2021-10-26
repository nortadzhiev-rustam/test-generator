import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
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

const GeneratePanel = ({setVisible, setAlert}) => {
  const [category, setCategory] = React.useState('');
  const [difficulty, setDifficulty] = React.useState('');
 
  const handleVisibility = () => {
    if (category !== '') {
      setVisible(true);
    } else {
      setVisible(false)
      setAlert(true)
    }
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleChangeDifficulty = (event) => {
    setDifficulty(event.target.value);
  };

  return (
    <Item elevation={10} className='animate__animated animate__fadeInRight'>
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

      <Button variant='contained' color='success' onClick={handleVisibility}>
        Generate
      </Button>
    </Item>
  );
};

export default GeneratePanel;
