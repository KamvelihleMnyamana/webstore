import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from '../redux/actions';

// Header component for site navigation and user info
function Header() {
  const dispatch = useDispatch();

  // Get the current logged-in username from Redux state
  const username = useSelector(state => state.user);

  // Function to handle logout action
  function handleLogout() {
    dispatch(userLogout());
  }

  return React.createElement(
    Navbar,
    { bg: "dark", variant: "dark", expand: "lg" },
    React.createElement(
      Container,
      null,
      React.createElement(Navbar.Brand, { as: Link, to: "/" }, "Tech Nova"),
      React.createElement(Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }),
      React.createElement(
        Navbar.Collapse,
        { id: "basic-navbar-nav" },
        React.createElement(
          Nav,
          { className: "me-auto" },
          React.createElement(Nav.Link, { as: Link, to: "/" }, "Home"),
          React.createElement(Nav.Link, { as: Link, to: "/products" }, "Products"),
          React.createElement(Nav.Link, { as: Link, to: "/cart" }, "Cart"),
          React.createElement(Nav.Link, { as: Link, to: "/shipping" }, "Shipping"),
          React.createElement(Nav.Link, { as: Link, to: "/about" }, "About")
        ),
        username ?
          React.createElement(
            Nav,
            null,
            React.createElement(Navbar.Text, null, `Logged in as: ${username}`),
            React.createElement(Button, { variant: "outline-light", className: "ms-2", onClick: handleLogout }, "Logout")
          )
          :
          React.createElement(
            Nav,
            null,
            React.createElement(Button, { as: Link, to: "/login", variant: "outline-light", className: "me-2" }, "Login"),
            React.createElement(Button, { as: Link, to: "/register", variant: "outline-light" }, "Register")
          )
      )
    )
  );
}

export default Header;