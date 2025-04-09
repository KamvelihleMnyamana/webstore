import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';

function Shipping() {
  // State variables for shipping details
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  // Handles shipping form submission
  const handleShipping = (e) => {
    e.preventDefault();

    if (!address || !city || !postalCode || !country) {
      toast.error('Please fill out all shipping details.');
    } else {
      toast.success('Shipping details saved.');
      setAddress('');
      setCity('');
      setPostalCode('');
      setCountry('');
    }
  };

  return (
    <Container className="my-4">
      <h3>Shipping Details</h3>
      <Form onSubmit={handleShipping}>
        <Form.Control placeholder="Address" className="mb-2" value={address} onChange={(e) => setAddress(e.target.value)} />
        <Form.Control placeholder="City" className="mb-2" value={city} onChange={(e) => setCity(e.target.value)} />
        <Form.Control placeholder="Postal Code" className="mb-2" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
        <Form.Control placeholder="Country" className="mb-3" value={country} onChange={(e) => setCountry(e.target.value)} />
        <Button type="submit">Save Shipping Info</Button>
      </Form>
    </Container>
  );
}

export default Shipping;