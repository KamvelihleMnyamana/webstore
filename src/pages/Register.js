import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';

function Register() {
  // State variables for user input fields
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    username: '',
    email: '',
    password: '',
  });

  // Updates state dynamically as user types in the form
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles form submission and basic validation
  const handleRegister = (e) => {
    e.preventDefault();
    const { firstName, surname, username, email, password } = formData;

    // Basic validation to ensure no fields are empty
    if (!firstName || !surname || !username || !email || !password) {
      toast.error('Please fill out all fields.');
    } else {
      toast.success('Registration successful!');
      setFormData({ firstName: '', surname: '', username: '', email: '', password: '' });
    }
  };

  return (
    <Container className="my-4">
      <h3>Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Control name="firstName" className="mb-2" placeholder="First Name" onChange={handleInput} value={formData.firstName} />
        <Form.Control name="surname" className="mb-2" placeholder="Surname" onChange={handleInput} value={formData.surname} />
        <Form.Control name="username" className="mb-2" placeholder="Username" onChange={handleInput} value={formData.username} />
        <Form.Control name="email" className="mb-2" type="email" placeholder="Email" onChange={handleInput} value={formData.email} />
        <Form.Control name="password" className="mb-3" type="password" placeholder="Password" onChange={handleInput} value={formData.password} />
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
}

export default Register;