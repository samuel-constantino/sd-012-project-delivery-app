import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Order(props) {
  const navigate = useNavigate();
  console.log('📺🐛 ', props);
  const { status, id: saleId, saleDate, totalPrice } = props;
  const date = moment(new Date(saleDate)).format('DD/MM/YY');

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
    onClick: () => navigate(`/customer/orders/${saleId}`),
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
          data-testid={ `customer_orders__element-order-id-${saleId}` }
        >
          { `Pedido: ${saleId}` }
        </Typography>
        <Typography sx={ { mb: 1.5 } } color="text.secondary">
          { date }
        </Typography>
        <Typography variant="body2">
          { `R$ ${totalPrice}` }
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
  id: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
};
