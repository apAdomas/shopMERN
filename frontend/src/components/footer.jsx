import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';

const footer = () => {
  const currentYear = new Date().getFullYear()

    
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p>shop &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default footer