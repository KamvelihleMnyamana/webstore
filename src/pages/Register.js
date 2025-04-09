import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput'; // import the reusable input component

function Register() {
  const navigate = useNavigate();

  // Form state to capture input
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    username: '',
    email: '',
    password: '',
  });

  // Handle input field updates
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle registration form submission
  const handleRegister = (e) => {
    e.preventDefault();
    const { firstName, surname, username, email, password } = formData;

    // Simple validation
    if (!firstName || !surname || !username || !email || !password) {
      toast.error('Please fill out all fields.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if username is already taken
    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      toast.error('Username already taken. Please choose another one.');
      return;
    }

    // Store user in localStorage
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));

    toast.success('Registration successful! Please log in.');
    setFormData({ firstName: '', surname: '', username: '', email: '', password: '' });
    navigate('/login');
  };

  return (
    <Container className="my-4">
      <h3>Register</h3>
      <Form onSubmit={handleRegister}>
        <FormInput
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInput}
        />
        <FormInput
          name="surname"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleInput}
        />
        <FormInput
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInput}
        />
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInput}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInput}
        />
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
}

export default Register;