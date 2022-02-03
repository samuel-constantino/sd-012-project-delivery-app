import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

export default function EndDialog(props) {
  const { showDialog, setShowDialog, saleId } = props;
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(`/customer/orders/${saleId}`);
    setShowDialog(false);
  };

  return (
    <div>
      <Dialog
        open={ showDialog }
        onClose={ handleClose }
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          Sua compra foi efetuada com sucesso!
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Aguarde enquanto nossa equipe prepara seu pedido com carinho 🥰
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ handleClose }>ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

EndDialog.propTypes = {
  showDialog: PropTypes.bool,
  setShowDialog: PropTypes.func,
  saleId: PropTypes.number,
}.isRequired;
