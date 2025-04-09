import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';

function Shipping() {
  // Shipping form fields
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('standard'); // default delivery option

  // Delivery estimate based on selection
  const getEstimatedDays = () => {
    switch (deliveryMethod) {
      case 'express':
        return '1-2 business days';
      case 'overnight':
        return 'Next day delivery';
      default:
        return '3-5 business days';
    }
  };

  // Form submission
  const handleShipping = (e) => {
    e.preventDefault();

    // Validation
    if (!address || !city || !postalCode || !country) {
      toast.error('Please fill out all shipping details.');
    } else {
      toast.success('Shipping information saved successfully!');
      // You can also store or dispatch this data if needed
      setAddress('');
      setCity('');
      setPostalCode('');
      setCountry('');
      setDeliveryMethod('standard');
    }
  };

  return (
    <Container className="my-4">
      <h3>Shipping Details</h3>

      {/* Help Section */}
      <Alert variant="info" className="mb-4">
        Please enter your complete shipping information. Use the dropdown to choose a delivery option. 
        <br />
        <strong>Need help?</strong> Contact our support team at <a href="mailto:support@technova.com">support@technova.com</a>.
      </Alert>

      <Form onSubmit={handleShipping}>
        <Form.Control
          className="mb-2"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Form.Control
          className="mb-2"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Form.Control
          className="mb-2"
          placeholder="Postal Code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <Form.Control
          className="mb-3"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        {/* Delivery Method Dropdown */}
        <Form.Group className="mb-3">
          <Form.Label>Select Delivery Method</Form.Label>
          <Form.Select
            value={deliveryMethod}
            onChange={(e) => setDeliveryMethod(e.target.value)}
          >
            <option value="standard">Standard (3–5 days)</option>
            <option value="express">Express (1–2 days)</option>
            <option value="overnight">Overnight (next day)</option>
          </Form.Select>
        </Form.Group>

        {/* Estimated Delivery Display */}
        <p className="text-muted">
          Estimated Delivery Time: <strong>{getEstimatedDays()}</strong>
        </p>

        <Button type="submit">Save Shipping Info</Button>
      </Form>
    </Container>
  );
}

export default Shipping;