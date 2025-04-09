import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// About component to display company information and contact details
function About() {
  return (
    <Container className="my-5">
      {/* Introduction Section */}
      <Row className="text-center mb-4">
        <Col>
          <h2>Welcome to <span className="text-primary">Tech Nova</span></h2>
          <p className="lead">Your trusted partner in technology and innovation!</p>
        </Col>
      </Row>

      {/* About the Company Section */}
      <Row className="mb-5">
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Who We Are</Card.Title>
              <Card.Text>
                At <strong>Tech Nova</strong>, we specialize in providing top-notch tech products and innovative gadgets that enhance your daily life. Our passion is driven by technology, quality, and outstanding customer support. We ensure competitive pricing without compromising on quality because your satisfaction is our utmost priority!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Why Choose Us Section */}
      <Row className="mb-5">
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Quality Products</Card.Title>
              <Card.Text>
                We source only the best products to guarantee quality and performance.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Affordable Prices</Card.Title>
              <Card.Text>
                Enjoy competitive pricing designed to give you value for your money.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Dedicated Support</Card.Title>
              <Card.Text>
                Our friendly customer support team is always ready to help with your needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Contact Information Section */}
      <Row className="text-center">
        <Col md={12}>
          <h4>Get in Touch</h4>
          <p>If you have any questions or need support, we're here for you!</p>
          <p>
            <strong>Email:</strong> <a href="mailto:support@technova.com">support@technova.com</a><br/>
            <strong>Phone:</strong> (074) 487-2877<br/>
            <strong>Address:</strong> 123 Tech Street, Innovation City, Techland
          </p>
          <Button href="/contact" variant="primary">Contact Us</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default About;