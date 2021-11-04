import React from 'react';
import Paper from '@mui/material/Paper';
import { Grid, Box } from '@mui/material';
import 'animate.css';
import GeneratePanel from './GeneratePanel';
import InserPanel from './InsertPanel';
import { useSelector } from 'react-redux';
import InsertWindow from './TestInsertWindow';
import GenerateWindow from './TestGenerateWindow';
import { styled } from '@mui/styles';

const BoxContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  flexGrow: 1,
  flexDirection: 'column',
  marginInline: '2%',
  marginBlock: 40,
});

const GridContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: 2,
});
const MainDiv = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: 'white',
  padding: 5,
  borderRadius: 15,
});

const TextDiv = styled('div')({
  height: 60,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 2,
  borderRadius: 10,
  cursor: 'pointer',
});

const SwitchDiv = styled('div')({
  height: 60,
  backgroundColor: '#880e4f',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 2,
  borderRadius: 10,
  cursor: 'pointer',
});

const Home = () => {
  
  const [isSwitch, setSwitch] = React.useState(false);
  const isFull = useSelector((state) => state.questionsType.isFull);
  const open = useSelector((state) => state.questionsType.isOpen);
  const isVisible = useSelector((state) => state.questionsType.isVisible);
  const openWindow = () => {
    if (open === 'insert') {
      return <InsertWindow />;
    } else if (open === 'generate') {
      return <GenerateWindow />;
    } else return;
  };

  const PaperItem = styled(Paper)({
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: isSwitch ? '#f50057' : '#ef6c00',
    overflow: 'hidden',
  });

  return (
    <BoxContainer>
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
            <PaperItem elevation={10}>
              <GridContainer container>
                <MainDiv>
                  <Grid item xs={6}>
                    {!isSwitch ? (
                      <TextDiv
                        className='animate__animated animate__fadeInLeft animate__faster'
                        onClick={() => setSwitch(true)}
                      >
                        <h2>Insert</h2>
                      </TextDiv>
                    ) : (
                      <SwitchDiv
                        className='animate__animated animate__fadeInRight animate__faster'
                        onClick={() => setSwitch(true)}
                      ></SwitchDiv>
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    {!isSwitch ? (
                      <SwitchDiv
                        className='animate__animated animate__fadeInLeft animate__faster'
                        onClick={() => setSwitch(false)}
                      ></SwitchDiv>
                    ) : (
                      <TextDiv
                        className='animate__animated animate__fadeInRight animate__faster'
                        onClick={() => setSwitch(false)}
                      >
                        <h2>Generate</h2>
                      </TextDiv>
                    )}
                  </Grid>
                </MainDiv>
              </GridContainer>
            </PaperItem>
            {isSwitch ? (
              <GeneratePanel  />
            ) : (
              <InserPanel  />
            )}
          </Grid>
        )}
        {isVisible && openWindow()}
      </Grid>
    </BoxContainer>
  );
};

export default Home;
