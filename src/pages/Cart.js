// components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';
import { ListGroup, Button, Container } from 'react-bootstrap';

// Shopping Cart Component
function Cart() {
  const dispatch = useDispatch();

  // Fetch cart items from Redux store
  const cart = useSelector((state) => state.cart);

  // Function to calculate total price of cart items
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return React.createElement(
    Container,
    { className: 'my-4' },
    React.createElement('h3', null, 'Your Shopping Cart'),
    React.createElement(
      ListGroup,
      null,
      cart.length === 0
        ? React.createElement(ListGroup.Item, null, 'Your cart is empty.')
        : cart.map((item) =>
            React.createElement(
              ListGroup.Item,
              { key: item.id, className: 'd-flex justify-content-between align-items-center' },
              `${item.name} (${item.selectedColor}) - R${item.price}`,
              React.createElement(
                Button,
                { variant: 'danger', size: 'sm', onClick: () => dispatch(removeFromCart(item.id)) },
                'Remove'
              )
            )
          ),
      // Display total price clearly
      cart.length > 0 &&
        React.createElement(
          ListGroup.Item,
          { className: 'fw-bold d-flex justify-content-between align-items-center' },
          'Total:',
          `R${calculateTotal().toFixed(2)}`
        )
    )
  );
}

export default Cart;