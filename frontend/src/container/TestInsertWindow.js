import React from 'react';
import {
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Radio,
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
import axios from 'axios';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import InputComponent from '../components/InputComponent';

const StyledBox = styled(Box)({
  display: 'flex',
  position: 'relative',
  margin: 0,
  padding: 0,
});

const FormPaper = styled(Paper)({
  width: '100%',
  minHeight: 70,
  backgroundColor: '#eceff1',
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

const InsertWindow = () => {
  const [mouseIn, setMouseIn] = React.useState(false);
  const [isHover, setHover] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [radio, setRadio] = React.useState('True');
  const [mark, setMark] = React.useState('');
  const [question, setQuestion] = React.useState('');
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
          <FormPaper>
            <div>
              {mouseIn ? (
                <FontAwesomeIcon
                  size='lg'
                  style={{ borderRadius: '30%' }}
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

                    borderRadius: '30%',
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
                    borderRadius: '30%',
                    border: 'none',
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
              color='#006064'
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
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            mb={2}
          >
            <TextField
              
              size='small'
              label='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />{' '}
            <TextField
              sx={{  width: '100px' }}
              size='small'
              label='Mark'
              value={mark}
              type='number'
              onChange={(e) => setMark(e.target.value)}
            />
          </Box>
          <TextField label='Description' size='small' multiline rows={2} fullWidth value={question} onChange={(e) => setQuestion(e.target.value)} />
          <FormGroup>
            <FormControlLabel control={<Checkbox onChange={(e) => setIsFunction(e.target.checked)}/>}  label='Function' />
          </FormGroup>
          {isFunction && (
            <InputComponent
              
            />
          )}

        </Box>
      </Paper>
    </Grid>
  );
};

export default InsertWindow;
