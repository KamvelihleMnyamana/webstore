import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import { Button, Card, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import images stored locally
import smartphoneImg from './images/smartphone.webp';
import headphonesImg from './images/headphones.webp';
import speakerImg from './images/speaker.webp';
import laptopImg from './images/laptop.webp';
import smartwatchImg from './images/smartwatch.webp';
import iPadImg from './images/iPad.webp';
import tvImg from './images/tv.webp';
import droneImg from './images/drone.webp';
import ssdImg from './images/ssd.webp';
import keyboardImg from './images/keyboard.webp';

// Product data array
const products = [
  { id: 1, name: "Smartphone S24", price: 8999, image: smartphoneImg, description: "Powerful and sleek with AMOLED display.", colors: ["Black", "Silver", "Rose Gold"] },
  { id: 2, name: "Wireless Headphones", price: 1599, image: headphonesImg, description: "Noise-cancelling and comfy.", colors: ["Black", "White", "Blue"] },
  { id: 3, name: "Bluetooth Speaker", price: 799, image: speakerImg, description: "Loud with punchy bass.", colors: ["Red", "Black", "Teal"] },
  { id: 4, name: "Gaming Laptop", price: 17999, image: laptopImg, description: "High-performance for gaming.", colors: ["Black", "Grey", "RGB Edition"] },
  { id: 5, name: "Smartwatch", price: 2999, image: smartwatchImg, description: "Fitness tracking and notifications.", colors: ["Black", "Pink", "Light Purple"] },
  { id: 6, name: "iPad Pro 10.5", price: 7499, image: iPadImg, description: "Lightweight and powerful.", colors: ["Space Grey", "Silver", "Gold"] },
  { id: 7, name: "4K Smart TV 55\"", price: 12999, image: tvImg, description: "Crisp visuals and built-in apps.", colors: ["Black", "Metallic Grey", "Matte Silver"] },
  { id: 8, name: "Drone Camera", price: 4999, image: droneImg, description: "Stable flight and HD camera.", colors: ["White", "Black", "Camo"] },
  { id: 9, name: "Portable SSD 1TB", price: 1899, image: ssdImg, description: "Fast and compact storage.", colors: ["Black", "Blue", "Red"] },
  { id: 10, name: "Wireless Keyboard", price: 349, image: keyboardImg, description: "Responsive keys with long battery life.", colors: ["Black", "Light", "Grey"] },
];

const ProductList = () => {
  const dispatch = useDispatch();

  // State to track selected colors for each product
  const [selectedColors, setSelectedColors] = useState({});

  // Update color selection state
  const handleColorChange = (productId, color) => {
    setSelectedColors({ ...selectedColors, [productId]: color });
  };

  // Add selected product to cart and show notification
  const handleAddToCart = (product) => {
    const color = selectedColors[product.id] || product.colors[0];
    dispatch(addToCart({ ...product, selectedColor: color }));
    toast.success(`${product.name} (${color}) added to cart!`, { position: "top-right" });
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        {products.map((product) => (
          <Card key={product.id} className="m-2 shadow-sm" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} style={{ height: '180px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text style={{ height: '50px', overflow: 'hidden', fontSize: '14px' }}>
                {product.description}
              </Card.Text>
              <Card.Text className="fw-bold">R{product.price}</Card.Text>

              {/* Color Selection Dropdown */}
              <Form.Select
                size="sm"
                className="mb-2"
                value={selectedColors[product.id] || product.colors[0]}
                onChange={(e) => handleColorChange(product.id, e.target.value)}
              >
                {product.colors.map((color, idx) => (
                  <option key={idx} value={color}>{color}</option>
                ))}
              </Form.Select>

              <Button variant="primary" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductList;