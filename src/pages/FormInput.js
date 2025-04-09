import React from 'react';
import { Form } from 'react-bootstrap';

// A reusable form input component
function FormInput({ name, type = 'text', placeholder, value, onChange }) {
  return (
    <Form.Control
      name={name}
      type={type}
      placeholder={placeholder}
      className="mb-2"
      value={value}
      onChange={onChange}
    />
  );
}

export default FormInput;