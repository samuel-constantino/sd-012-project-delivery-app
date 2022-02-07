import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import moment from 'moment';

export default function Sale(props) {
  const navigate = useNavigate();
  const {
    id: saleId,
    status,
    saleDate,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  } = props;

  const serializedDate = moment(saleDate).format('DD/MM/YYYY');

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
    onClick: () => navigate(`/seller/orders/${saleId}`),
  };

  return (
    <Card
      sx={ { width: '200px', margin: '20px' } }
      onClick={ () => navigate(`/seller/orders/${saleId}`) }
    >
      <CardContent>
        <Typography
          { ...statusPkg }
          data-testid={ `seller_orders__element-delivery-status-${saleId}` }
        >
          {status}
        </Typography>
        <Typography
          sx={ { fontSize: 14 } }
          color="text.secondary"
          gutterBottom
          onClick={ () => navigate(`/seller/orders/${saleId}`) }
          data-testid={ `seller_orders__element-order-id-${saleId}` }
        >
          { `Pedido: ${saleId}` }
        </Typography>
        <Typography
          sx={ { mb: 1.5 } }
          color="text.secondary"
          data-testid={ `seller_orders__element-order-date-${saleId}` }
        >
          { serializedDate }
        </Typography>
        <Typography
          variant="body2"
          data-testid={ `seller_orders__element-card-price-${saleId}` }
        >
          { `R$ ${totalPrice}` }
        </Typography>
        <Typography
          variant="caption"
          data-testid={ `seller_orders__element-card-address-${saleId}` }
        >
          { `${deliveryAddress}, ${deliveryNumber}` }
        </Typography>
      </CardContent>
      <CardActions>
        <Button { ...detailsBtnPkg }>Detalhes</Button>
      </CardActions>
    </Card>
  );
}

Sale.propTypes = {
  status: PropTypes.string,
  saleId: PropTypes.string,
  saleDate: PropTypes.string,
  totalPrice: PropTypes.number,
  deliveryAddress: PropTypes.string,
  deliveryNumber: PropTypes.string,
}.isRequired;
