import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../redux/actions';
import { Form, Button, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';

function Login() {
  const dispatch = useDispatch();

  // State variables for username and password input fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Check if both username and password fields are filled
    if (!username || !password) {
      toast.error('Please enter both username and password.');
    } else {
      // Dispatch login action to Redux store
      dispatch(userLogin(username));
      toast.success(`Welcome back, ${username}!`);
      setUsername('');
      setPassword('');
    }
  };

  return (
    <Container className="my-4">
      <h3>Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Control
          className="mb-3"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Control
          className="mb-3"
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