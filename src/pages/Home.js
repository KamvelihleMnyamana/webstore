import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Home component displays the welcoming hero section of Tech Nova
function Home() {
  return (
    <Container className="my-5">
      {/* Hero section card */}
      <Card className="text-center shadow-sm py-5 bg-light border-0">
        <Card.Body>
          <Card.Title as="h1" className="display-4 text-primary">
            Welcome to Tech Nova
          </Card.Title>
          <Card.Text className="lead my-3">
            Discover cutting-edge technology and unbeatable deals on your favorite tech gadgets!
          </Card.Text>
          <Link to="/products">
            <Button variant="primary" size="lg">
              Shop Now
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;