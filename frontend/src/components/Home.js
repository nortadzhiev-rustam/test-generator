import React from 'react';

import { Grid, Box } from '@mui/material';
import 'animate.css';
import GeneratePanel from './GeneratePanel';
import InserPanel from './InsertPanel';
import { useSelector } from 'react-redux';
import InsertWindow from './TestInsertWindow';
import GenerateWindow from './TestGenerateWindow';
import { styled } from '@mui/styles';
import Switcher from './Switcher';

const BoxContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  flexGrow: 1,
  flexDirection: 'column',
  marginInline: '2%',
  marginBlock: 40,
});

const Home = () => {
  const [isSwitch, setSwitch] = React.useState('generate');
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

  return (
    <BoxContainer>
      <Grid container justifyContent={isVisible && 'space-around'} spacing={1}>
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
            {<Switcher setSwitch={(sw) => setSwitch(sw)} isSwitch={isSwitch}/>}
            {isSwitch === 'insert' ? <GeneratePanel /> : <InserPanel />}
          </Grid>
        )}

        {isVisible && openWindow()}
      </Grid>
    </BoxContainer>
  );
};

export default Home;
