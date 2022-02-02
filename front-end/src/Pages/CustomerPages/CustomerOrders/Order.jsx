import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Order(props) {
  const navigate = useNavigate();
  const { status = 'Pendente', orderId = '13', date = '1/1/22', cost = 0 } = props;

  const statusPkg = {
    variant: 'h5',
    backgroundColor: '#55f',
    color: '#fff',
    px: 2,
    py: 1,
    mx: -2,
    mt: -2,
  };

  const detailsBtnPkg = {
    size: 'small',
    onClick: () => navigate(`/order-details/${orderId}`),
  };

  return (
    <Card sx={ { width: '200px', margin: '20px' } }>
      <CardContent>
        <Typography { ...statusPkg }>
          { status }
        </Typography>
        <Typography
          sx={ { fontSize: 14 } }
          color="text.secondary"
          gutterBottom
          data-testid={ `customer_orders__element-order-id-${orderId}` }
        >
          { `Pedido: ${orderId}` }
        </Typography>
        <Typography sx={ { mb: 1.5 } } color="text.secondary">
          { date }
        </Typography>
        <Typography variant="body2">
          { `R$ ${cost.toFixed(2)}` }
        </Typography>
      </CardContent>
      <CardActions>
        <Button { ...detailsBtnPkg }>Detalhes</Button>
      </CardActions>
    </Card>
  );
}

Order.propTypes = {
  status: PropTypes.string.isRequired,
  orderId: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
};
