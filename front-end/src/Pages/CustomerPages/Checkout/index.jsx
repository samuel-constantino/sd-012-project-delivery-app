import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Paper, Stack, Chip, Button, Typography } from '@mui/material';
import { useGlobalState } from '../../../Provider';
import Product from './Product';
import ProductsTitle from './ProductsTitle';
import DeliveryDetails from './DeliveryDetails';
// import EndDialog from './EndDialog';
import api from '../../../Services/api';
import NavBar from '../../../Components/Navbar';

const num = 200;

export default function Checkout() {
  // State
  const { cart, setCart, setTotalPrice } = useGlobalState();
  const { deliveryInfo } = useGlobalState();
  // const [showDialog, setShowDialog] = useState(false);
  // const [saleId, setSaleId] = useState();
  const navigate = useNavigate();

  // Handlers
  const handleSubmit = async () => {
    const products = cart
      .map(({ id: productId, quantity }) => ({ productId, quantity }));
    const customerOrder = { products, deliveryInfo };
    customerOrder.deliveryInfo.status = 'Pendente';
    customerOrder.deliveryInfo.sellerName = 'Fulana Pereira';
    const { data } = await api.post('customer/orders', customerOrder);
    // setSaleId(data.sale.id);
    setTimeout((() => {
      navigate(`/customer/orders/${data.sale.id}`);
    }), num);
    // navigate(`/customer/orders/${data.sale.id}`);
  };
  const handleDelete = (product, productIndex) => {
    const { price, quantity } = product;
    const subTotal = +price * quantity;
    const updatedCart = cart.filter(
      (_product, index) => productIndex !== index,
    );
    setCart(updatedCart);
    setTotalPrice((prevPrice) => prevPrice - subTotal);
  };

  // Render functions
  const renderProducts = () => cart.map((product, index) => {
    const props = {
      ...product,
      item: index + 1,
      handleDelete: () => handleDelete(product, index),
    };
    return <Product key={ index } { ...props } />;
  });
  const renderChip = () => {
    const total = cart.reduce(
      (prev, curr) => prev + (curr.price * curr.quantity), 0,
    );
    return (
      <Stack direction="row" justifyContent="flex-end" marginTop={ 5 }>
        <Chip
          color="secondary"
          label={ `Total: R$ ${total.toFixed(2).replace('.', ',')}` }
          data-testid="customer_checkout__element-order-total-price"
        />
      </Stack>);
  };

  // Packaging
  const SubmitBtnPkg = {
    variant: 'contained',
    size: 'large',
    onClick: handleSubmit,
  };
  const typographyPkg = {
    sx: { margin: '0 0 30px 0' },
    variant: 'h5',
  };
  // const endDialogPkg = {
  //   showDialog,
  //   setShowDialog,
  //   saleId,
  // };

  return (
    <>
      <NavBar />
      <Container>
        <Paper elevation={ 6 } sx={ { margin: '10px 0' } }>
          <Box px={ 4 } py={ 6 }>
            <ProductsTitle />
            { renderProducts() }
            { renderChip() }
          </Box>
        </Paper>
        <Paper elevation={ 6 } sx={ { margin: '10px 0' } }>
          <Box px={ 4 } py={ 10 }>
            <Typography { ...typographyPkg }>
              Detalhes e endere??o para entrega
            </Typography>
            <DeliveryDetails />
          </Box>
        </Paper>
        <Button
          { ...SubmitBtnPkg }
          data-testid="customer_checkout__button-submit-order"
          // type="button"
        >
          Finalizar pedido
        </Button>
        {/* <EndDialog { ...endDialogPkg } /> */}
      </Container>
    </>
  );
}
