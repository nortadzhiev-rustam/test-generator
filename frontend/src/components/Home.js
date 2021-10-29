import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { Grid, Box, Alert } from '@mui/material';
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
import GeneratePanel from './GeneratePanel';
import InserPanel from './InsertPanel';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];
const Home = () => {
  const [visible, setVisible] = React.useState(false);
  const [isFull, setFull] = React.useState(false);
  const [mouseIn, setMouseIn] = React.useState(false);
  const [isSwitch, setSwitch] = React.useState(false);
  const [isAlert, setAlert] = React.useState(false);
  const [isDisable, setDisable] = React.useState(false);

  const handleFullScreen = () => {
    setFull(!isFull);
  };

  const handleMouseIn = () => {
    setMouseIn(true);
  };

  const handleClose = () => {
    setVisible(false);
    setMouseIn(false);
    setFull(false);
  };

  useEffect(() => {
    if (isAlert) {
      setTimeout(() => {
        setAlert(!isAlert);
      }, 3000);
    }

    if (isAlert) {
      setTimeout(() => {
        setDisable(true);
      }, 2000);
    } else setDisable(false)

    
  }, [isAlert]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexGrow: 1,
        flexDirection: 'column',
        marginInline: '2%',
        marginBlock: 40,
      }}
    >
      {isAlert && (
        <Alert
          variant='filled'
          className={
            !isDisable
              ? 'animate__animated animate__fadeInDown'
              : 'animate__animated animate__fadeOutUp'
          }
          sx={{ marginBottom: 5 }}
          severity='warning'
        >
          This is a warning alert — check it out!
        </Alert>
      )}
      <Grid container spacing={1}>
        {!isFull && (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            style={{ paddingInline: 20, paddingBottom: 25 }}
            overflow='hidden'
          >
            <Paper
              elevation={10}
              sx={{
                borderRadius: 5,
                marginBottom: 2,
                backgroundColor: isSwitch ? '#f50057' : '#ef6c00',
                overflow: 'hidden',
              }}
            >
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  padding: 0.5,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    padding: 5,
                    borderRadius: 15,
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

                          cursor: 'pointer',
                        }}
                        className='animate__animated animate__fadeInLeft animate__faster'
                        onClick={() => setSwitch(true)}
                      >
<<<<<<< HEAD
                        <h3>Insert Test</h3>
=======
                        <h2>Insert</h2>
>>>>>>> edc374b9f3a9dab4ae9a68ccf332494453645fad
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

                          cursor: 'pointer',
                        }}
                        className='animate__animated animate__fadeInRight animate__faster'
                        onClick={() => setSwitch(true)}
                      ></div>
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

                          cursor: 'pointer',
                        }}
                        className='animate__animated animate__fadeInLeft animate__faster'
                        onClick={() => setSwitch(false)}
                      ></div>
                    ) : (
                      <div
                        style={{
                          height: 60,
                          position: 'relative',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 2,
                          borderTopRightRadius: 10,
                          borderBottomRightRadius: 10,
                          cursor: 'pointer',
                        }}
                        className='animate__animated animate__fadeInRight animate__faster'
                        onClick={() => setSwitch(false)}
                      >
<<<<<<< HEAD
                        <h3>Generate</h3>
=======
                        <h2>Generate</h2>
>>>>>>> edc374b9f3a9dab4ae9a68ccf332494453645fad
                      </div>
                    )}
                  </Grid>
                </div>
              </Grid>
            </Paper>
            {isSwitch ? (
              <GeneratePanel
                setVisible={(v) => setVisible(v)}
                setAlert={(a) => setAlert(a)}
              />
            ) : (
              <InserPanel
                setVisible={(v) => setVisible(v)}
                setAlert={(a) => setAlert(a)}
              />
            )}
          </Grid>
        )}
        {visible && (
          <Grid
            item
            xs={12}
            sm={12}
            md={isFull ? 12 : 8}
            lg={isFull ? 12 : 9}
            xl={isFull ? 12 : 10}
          >
            <Paper
              elevation={10}
              style={{ minHeight: '82vh', paddingBottom: 40, borderRadius: 15 }}
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
                  elevation={4}
                  style={{
                    width: '100%',
                    height: 50,
                    backgroundColor: '#eceff1',
                    textAlign: 'start',
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0,
                    paddingLeft: 20,
                    paddingTop: 20,
                  }}
                >
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
                        backgroundColor: 'black',
                        borderRadius: '50%',
                        border: 'none'
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
                </Paper>
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
