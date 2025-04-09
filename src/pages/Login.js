import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../redux/actions';
import { Form, Button, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput'; // Import reusable input

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Form state variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handles login logic
  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation
    if (!username || !password) {
      toast.error('Please enter both username and password.');
      return;
    }

    // Retrieve registered users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Match user credentials
    const userFound = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userFound) {
      // Dispatch login and redirect
      dispatch(userLogin(username));
      toast.success(`Welcome back, ${username}!`);
      navigate('/');
      setUsername('');
      setPassword('');
    } else {
      toast.error('Invalid username or password.');
    }
  };

  return (
    <Container className="my-4">
      <h3>Login</h3>
      <Form onSubmit={handleLogin}>
        <FormInput
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
}

export default Login;