import React from 'react';
import {
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
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
import FroalaEditorComponent from 'react-froala-wysiwyg';
import 'froala-editor/js/plugins.pkgd.min.js';
import MathJax from 'mathjax3-react';
// Import jQuery so we can expose Froala editor to the window.
import $ from 'jquery';
import 'froala-editor/css/themes/dark.min.css';
import axios from 'axios';
// Expose froala-editor to the window.
window.$ = $;
window.FroalaEditor = require('froala-editor');
// Load wiris mathtype-froala plugin.
require('@wiris/mathtype-froala3');

// Load WIRISplugins.js dynamically.
const jsDemoImagesTransform = document.createElement('script');
jsDemoImagesTransform.type = 'text/javascript';
jsDemoImagesTransform.src =
  'https://www.wiris.net/demo/plugins/app/WIRISplugins.js?viewer=image';
// Load generated scripts.
document.head.appendChild(jsDemoImagesTransform);
// Define the toolbar & configuration options for the froala editor.
const toolbar = [
  'undo',
  'redo',
  '|',
  'wirisEditor',
  'wirisChemistry',
  '|',
  'bold',
  'italic',
  'underline',
  'strikeThrough',
  'subscript',
  'superscript',
  'outdent',
  'indent',
  'clearFormatting',
  'insertTable',
  'html',
  'insertImage',
];
const froalaConfig = {
  iframe: true,

  // Set the image upload parameter.
  imageUploadParam: 'image',
  imageUpload: true,
  imageDefaultAlign: 'left',
  imageDefaultDisplay: 'inline-block',
  // Set max image size to 5MB.
  imageMaxSize: 5 * 1024 * 1024,
  // Allow to upload PNG and JPG.
  imageAllowedTypes: ['jpeg', 'jpg', 'png', 'svg'],
  toolbarButtons: toolbar,
  // Add [MW] uttons to the image editing popup Toolbar.
  imageEditButtons: [
    'wirisEditor',
    'wirisChemistry',
    'imageDisplay',
    'imageAlign',
    'imageInfo',
    'imageRemove',
  ],
  // Allow all the tags to understand the mathml
  htmlAllowedTags: ['.*'],
  htmlAllowedAttrs: ['.*'],
  // List of tags that are not removed when they have no content inside
  // so that formulas renderize propertly
  htmlAllowedEmptyTags: ['mprescripts', 'none'],
  useClasses: false,
  // In case you are using a different Froala editor language than default,
  // language: 'es',
  // You can choose the language for the MathType editor, too:
  // @see: https://docs.wiris.com/en/mathtype/mathtype_web/sdk-api/parameters#regional_properties
  // mathTypeParameters: {
  //   editorParameters: { language: 'es' },
  // },
  // Execute on initialized editor.
  theme: 'dark',
  innerHeight: '600px',
  events: {
    imageBeforeUpload: function (e, editor, images) {
     //upload image to cloudinary
      const formData = new FormData();
      formData.append('file', images[0]);
      formData.append('upload_preset', 'test');
      axios
        .post('https://api.cloudinary.com/v1_1/cepi-complexo-escolar-privado-internacional/image/upload', formData)
        .then(res => {
          const imgURL = res.data.secure_url;
          editor.image.insert(imgURL, true, null, editor.image.get());
        }).catch(err => {
          console.log(err);
        }
        );
        

    },

    updateFunction: function (e, editor) {
      console.log(editor.html.get());
    },
    initialized() {
      // Since Froala 3.1.1 version, initialization events need to be called manually for the React component.
      // Parse the initial content set on the editor through html to render it
      const contentRendered = window.WirisPlugin.Parser.initParse(
        this.html.get(true)
      );
      this.html.set(contentRendered);
    },
  },
};

const InsertWindow = () => {
  const [mouseIn, setMouseIn] = React.useState(false);
  const [isHover, setHover] = React.useState(false);

  const [aChecked, setAChecked] = React.useState(false);
  const [bChecked, setBChecked] = React.useState(false);
  const [cChecked, setCChecked] = React.useState(false);
  const [dChecked, setDChecked] = React.useState(false);
  const [radio, setRadio] = React.useState('True');
  const [mark, setMark] = React.useState('');
  const [question, setQuestion] = React.useState('');
  const [answer, setAnswer] = React.useState({
    a: '',
    b: '',
    c: '',
    d: '',
  });
  const dispatch = useDispatch();
  const isFull = useSelector((state) => state.questionsType.isFull);
  const quest = useSelector((state) => state.questionsType.value);
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

  const handleModelChange = (model) => {
    setQuestion(model);
  };

  const handleMarkChange = (e) => {
    setMark(e.target.value);
  };

  const insertTrueOrFalse = () => {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box
            component='form'
            noValidate
            autoComplete='off'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              paddingBlock: 30,
              paddingInline: 20,
            }}
          >
            <TextField
              sx={{
                marginBottom: 5,
                width: { xs: '100%', md: '50%' },
              }}
              id='Title'
              label='Question Title'
              size='small'
            />
            <TextField
              id='Title'
              label='Question'
              multiline
              rows={5}
              sx={{ marginBottom: 5 }}
            />

            <FormControl component='fieldset'>
              <FormLabel component='legend'>Answer</FormLabel>
              <RadioGroup
                aria-label='Answer'
                name='Answer'
                row
                value={radio}
                onChange={(event) => setRadio(event.target.value)}
              >
                <FormControlLabel
                  value='True'
                  control={<Radio />}
                  label='True'
                />
                <FormControlLabel
                  value='False'
                  control={<Radio />}
                  label='False'
                />
              </RadioGroup>
            </FormControl>
            <div
              style={{
                marginTop: 5,
                display: 'flex',
                justifyContent: 'end',
              }}
            >
              <Button
                sx={{ marginRight: 1 }}
                variant='contained'
                color='primary'
              >
                Submit
              </Button>
              <Button
                sx={{ marginRight: 1 }}
                type='reset'
                variant='contained'
                color='error'
              >
                Cancel
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    );
  };

  const handleAnswerA = (model) => {
    setAnswer({ ...answer, a: model });
  };

  const handleAnswerB = (model) => {
    setAnswer({ ...answer, b: model });
  };

  const handleAnswerC = (model) => {
    setAnswer({ ...answer, c: model });
  };

  const handleAnswerD = (model) => {
    setAnswer({ ...answer, d: model });
  };

  const handleSubmit = () => {};

  const insertMultipleChoise = () => {
    return (
      <Grid container justifyContent='center' spacing={1}>
        <Grid item xs={12} xl={10}>
          <Box
            component='form'
            noValidate
            autoComplete='off'
            encType='multipart/form-data'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              paddingBlock: 30,
              paddingInline: 20,
            }}
            onSubmit={handleSubmit}
          >
            <Box
              component='div'
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <TextField
                sx={{
                  marginBottom: 5,
                  width: { xs: '100%', md: '50%' },
                }}
                id='Title'
                label='Question Title'
                size='small'
              />
              <TextField
                sx={{
                  marginBottom: 5,
                  width: 80,
                }}
                value={mark}
                id='mark'
                label='Mark'
                size='small'
                onChange={handleMarkChange}
              />
            </Box>

            <Box component='div' sx={{ marginBottom: 5, width: '100%' }}>
              <FroalaEditorComponent
                tag='div'
                config={froalaConfig}
                model={question}
                onModelChange={handleModelChange}
              />
            </Box>

            <div>
              <MathJax.Provider>
                <MathJax.Html html={question} />
              </MathJax.Provider>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                marginBottom: 20,
              }}
            >
              <Checkbox
                value='A'
                onClick={() => setAChecked(!aChecked)}
                color='error'
                disabled={cChecked || bChecked || dChecked}
              />

              <Box component='div' sx={{ marginBottom: 5, width: '100%' }}>
                <FroalaEditorComponent
                  tag='div'
                  config={froalaConfig}
                  model={answer.a}
                  onModelChange={handleAnswerA}
                />
              </Box>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                marginBottom: 20,
              }}
            >
              <Checkbox
                value='B'
                onClick={() => setBChecked(!bChecked)}
                color='error'
                disabled={cChecked || dChecked || aChecked}
              />

              <Box component='div' sx={{ marginBottom: 5, width: '100%' }}>
                <FroalaEditorComponent
                  tag='div'
                  config={froalaConfig}
                  model={answer.b}
                  onModelChange={handleAnswerB}
                />
              </Box>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                marginBottom: 20,
              }}
            >
              <Checkbox
                value='C'
                onClick={() => setCChecked(!cChecked)}
                color='error'
                disabled={dChecked || bChecked || aChecked}
              />

              <Box component='div' sx={{ marginBottom: 5, width: '100%' }}>
                <FroalaEditorComponent
                  tag='div'
                  config={froalaConfig}
                  model={answer.c}
                  onModelChange={handleAnswerC}
                />
              </Box>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                marginBottom: 20,
              }}
            >
              <Checkbox
                value={dChecked}
                onClick={() => setDChecked(!dChecked)}
                color='error'
                disabled={cChecked || bChecked || aChecked}
              />

              <Box component='div' sx={{ marginBottom: 5, width: '100%' }}>
                <FroalaEditorComponent
                  tag='div'
                  config={froalaConfig}
                  model={answer.d}
                  onModelChange={handleAnswerD}
                />
              </Box>
            </div>
            <div
              style={{ marginTop: 5, display: 'flex', justifyContent: 'end' }}
            >
              <Button
                sx={{ marginRight: 1 }}
                variant='contained'
                color='primary'
                type='submit'
              >
                Submit
              </Button>
              <Button
                sx={{ marginRight: 1 }}
                type='reset'
                variant='contained'
                color='error'
                // when clicked setAchecked to false
                onClick={() => {
                  setAChecked(false);
                  setBChecked(false);
                  setCChecked(false);
                  setDChecked(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    );
  };

  

  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={isFull ? 12 : 8}
      lg={isFull ? 12 : 8}
      xl={isFull ? 12 : 8}
    >
      <Paper
        elevation={isHover ? 10 : 2}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        sx={{
          borderRadius: 3,
          transition: 'all 0.5s ease-in-out',
          width: '100%',
        }}
        className='animate__animated animate__zoomIn animate__faster'
      >
        <Box
          style={{
            display: 'flex',
            position: 'relative',

            margin: 0,
            padding: 0,
          }}
        >
          <Paper
            elevation={2}
            style={{
              width: '100%',
              minHeight: 70,
              backgroundColor: '#eceff1',
              textAlign: 'start',
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 0,
              paddingInline: 20,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              {mouseIn ? (
                <FontAwesomeIcon
                  size='lg'
                  style={{ borderRadius: '50%' }}
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
          </Paper>
        </Box>

        <Box
          sx={{
            transform: 'translateZ(0px)',
            flexGrow: 1,
          }}
        >
          {quest.questionType === 'multiple choice'
            ? insertMultipleChoise()
            : insertTrueOrFalse()}
        </Box>
      </Paper>
    </Grid>
  );
};

export default InsertWindow;
