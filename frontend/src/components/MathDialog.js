import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { addStyles, EditableMathField } from 'react-mathquill';
import { formulas } from '../constants/formulas';
import { IconButton, Typography } from '@mui/material';
import { CancelRounded } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
addStyles();
function PaperComponent(props) {
  return (
    <Draggable
      handle='#draggable-dialog-title'
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function MathDialog({ open, setOpen, latex, setLatex }) {
  const [formule, setFormule] = React.useState();
 

  React.useEffect(() => {
    if (latex) {
      setFormule(latex);
    } else setFormule('');
  }, [latex]);

  const handleClose = () => {
    setFormule('');
    setOpen(false);
  };

  const handleSubmit = () => {
    setLatex(formule);
    setFormule('');
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby='draggable-dialog-title'
      >
        <DialogTitle
          style={{
            cursor: 'move',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
          id='draggable-dialog-title'
        >
          <Typography
            variant='body1'
            sx={{ fontSize: '30px', fontWeight: 'bold' }}
          >
            Formula
          </Typography>{' '}
          <IconButton onClick={() => setOpen(false)}>
            <CancelRounded color='error' />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Paper
            style={{
              marginBlock: 20,
              display: 'flex',
              alignItems: 'end',
              flexWrap: 'wrap',
            }}
          >
            {formulas.map((formula) => (
              <Button
                key={formula.id}
                variant='contained'
                style={{
                  minHeight: 40,
                  maxHeight: 40,
                  minWidth: 40,
                  maxWidth: 40,
                  textTransform: 'lowerCase',
                  fontSize: formula.fontSize,
                  marginInline: 2,
                  borderRadius: 5,
                  marginBlock: 5,
                  dispaly: 'flex',
                  alignItems: 'center',
                }}
                size='small'
                onClick={() => {
                  setFormule(latex + formula.latex);
                }}
              >
                <MathJaxContext
                  style={{ cursor: 'pointer' }}
                >
                  <MathJax>{formula.formula}</MathJax>
                </MathJaxContext>
              </Button>
            ))}
          </Paper>

          <EditableMathField
            style={{ height: '80px', width: '100%' }}
            latex={formule}
            onChange={(mathField) => setFormule(mathField.latex())}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

MathDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  latex: PropTypes.string.isRequired,
  setLatex: PropTypes.func.isRequired,
};
