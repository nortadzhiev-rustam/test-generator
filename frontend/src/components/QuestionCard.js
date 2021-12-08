import React from 'react';
import { Paper, Box } from '@mui/material';
import MathmlToLatex from 'mathml-to-latex';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Image } from '@mui/icons-material';
const QuestionCard = ({ question, answer, img }) => {
  const config = {
    /* in theory, the MathML input processor should be activated if we add
        an "mml" block to the config OR if "input/mml" (NOT "input/mathml" as stated 
        in the docs) is in the load array. However, this is not necessary as MathML is 
        ALWAYS enabled in MathJax */
    loader: { load: ['input/mml', 'output/chtml'] },
    mml: {},
  };

  return (
    <MathJaxContext config={config} version={3}>
      <Paper elevation={3} sx={{ margin: 5 }}>
        <Box p={2}>
          <Box mb={5}>
            {MathmlToLatex.convert(question)}
          </Box>
          {img !== null ||
            (img !== undefined && (
              <Image sx={{ width: '100%', height: 'auto' }} src={img} />
            ))}
          <Box
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
            component='div'
          >
            <span> A: &nbsp; </span>
            <MathJax hideUntilTypeset={'first'} inline>
              <div dangerouslySetInnerHTML={{ __html: answer.answerA }}></div>
            </MathJax>
          </Box>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
            component='div'
          >
            <span> B: &nbsp; </span>
            <MathJax hideUntilTypeset={'first'} inline>
              <div dangerouslySetInnerHTML={{ __html: answer.answerB }}></div>
            </MathJax>
          </Box>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
            component='div'
          >
            <span> C: &nbsp; </span>
            <MathJax hideUntilTypeset={'first'} inline>
              <div dangerouslySetInnerHTML={{ __html: answer.answerC }}></div>
            </MathJax>
          </Box>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
            component='div'
          >
            <span> D: &nbsp; </span>
            <MathJax hideUntilTypeset={'first'} inline>
              <div dangerouslySetInnerHTML={{ __html: answer.answerD }}></div>
            </MathJax>
          </Box>
        </Box>
      </Paper>
    </MathJaxContext>
  );
};

export default QuestionCard;
