import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill';
import { formulas } from '../constants/formulas';
import { IconButton, Typography } from '@mui/material';
import { CancelRounded } from '@mui/icons-material';
import PropTypes from 'prop-types';
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
  const [formule, setFormule] = React.useState(latex);

  const handleClose = () => {
    setFormule('');
    setOpen(false);
  };

  const handleSubmit = () => {
    setLatex(latex + formule);
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
        sx={{MaxWidth: '600px'}}
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
            style={{ marginBlock: 20, display: 'flex', alignItems: 'end' }}
          >
            {formulas.map((formula) => (
              <button
                key={formula.id}
                variant='outlined'
                style={{
                  minHeight: 30,
                  maxHeight: 60,
                  minWidth: 30,
                  maxWidth: 60,
                  textTransform: 'lowerCase',
                  fontSize: 10,
                  border: 'none',
                  marginInline: 2,
                  borderRadius: 5,
                  backgroundColor: 'yellow',
                }}
                size='small'
                onClick={() =>
                  setFormule((prevState) => prevState + formula.latex)
                }
              >
                <StaticMathField style={{ cursor: 'pointer' }}>
                  {formula.formula}
                </StaticMathField>
              </button>
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
