import React from 'react';
import {
  Grid,
  Paper,
  Box,
  Typography,
  // eslint-disable-next-line
  TextField,
  // eslint-disable-next-line
  FormControl,
  // eslint-disable-next-line
  FormLabel,
  // eslint-disable-next-line
  RadioGroup,
  // eslint-disable-next-line
  FormControlLabel,
  // eslint-disable-next-line
  Radio,
  // eslint-disable-next-line
  Button,
  FormGroup,
} from '@mui/material';
import { styled } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { setFull, setVisible } from '../store/questionTypeSlice';
import {
  faCircle,
  faMinusCircle,
  faPlusCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
//eslint-disable-next-line
import axios from 'axios';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import InputComponent from '../components/InputComponent';
import MyEditor from '../components/TinyMcEditor';

const StyledBox = styled(Box)({
  display: 'flex',
  position: 'relative',
  margin: 0,
  padding: 0,
});

const FormPaper = styled(Paper)({
  width: '100%',
  minHeight: 70,
  backgroundColor: '#006064',
  textAlign: 'start',
  borderTopRightRadius: 13,
  borderTopLeftRadius: 13,
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 0,
  paddingInline: 20,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Options = ({ option }) => {
  return (
    <FormControl>
      <FormLabel sx={{ marginBottom: 5 }} id='demo-radio-buttons-group-label'>
        Answers
      </FormLabel>
      <RadioGroup
        aria-labelledby='demo-radio-buttons-group-label'
        defaultValue='a'
        name='radio-buttons-group'
        sx={{ display: 'flex', flexDirection: 'row' }}
      >
        <FormControlLabel value={option} control={<Radio />} label={option} />
      </RadioGroup>
    </FormControl>
  );
};

const InsertWindow = () => {
  const [mouseIn, setMouseIn] = React.useState(false);
  const [isHover, setHover] = React.useState(false);
  //eslint-disable-next-line
  const [title, setTitle] = React.useState('');
  //eslint-disable-next-line
  const [radio, setRadio] = React.useState('True');
  //eslint-disable-next-line
  const [mark, setMark] = React.useState('');
  //eslint-disable-next-line
  const [question, setQuestion] = React.useState('');
  //eslint-disable-next-line
  const [answer, setAnswer] = React.useState({
    a: '',
    b: '',
    c: '',
    d: '',
  });
  const [isFunction, setIsFunction] = React.useState(false);
  const dispatch = useDispatch();
  const isFull = useSelector((state) => state.questionsType.isFull);
  const quest = useSelector((state) => state.questionsType.value);
  // eslint-disable-next-line
  const user = useSelector((state) => state.user.user);

  const handleFullScreen = () => {
    dispatch(setFull(!isFull));
  };

  const handleMouseIn = () => {
    setMouseIn(true);
  };

  const handleClose = () => {
    dispatch(setVisible(false));
    setMouseIn(false);
    dispatch(setFull(false));
  };

  return (
    <Grid item xs={12} sm={12} md={isFull ? 12 : 8}>
      <Paper
        elevation={isHover ? 10 : 2}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        sx={{
          borderRadius: 3,
          transition: 'all 0.3s ease-in-out',
          width: '100%',
          paddingBottom: 30,
        }}
        className='animate__animated animate__zoomIn animate__faster'
      >
        <StyledBox>
          <FormPaper elevation={5}>
            <div>
              {mouseIn ? (
                <FontAwesomeIcon
                  size='lg'
                  style={{ borderRadius: '50%', backgroundColor: 'white' }}
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
                    backgroundColor: 'white',
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
                    backgroundColor: 'white',
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
            <Typography
              variant='body1'
              fontFamily='roboto'
              color='white'
              fontWeight='900'
            >
              {`${quest.questionType.toUpperCase()} QUESTION`}
            </Typography>
          </FormPaper>
        </StyledBox>

        <Box
          component='div'
          sx={{
            transform: 'translateZ(0px)',
            flexGrow: 1,
            padding: '20px 20px',
          }}
        >
          <InputComponent />
          <Box style={{ marginTop: 30 }}>
            <Options option='A' />
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default InsertWindow;
