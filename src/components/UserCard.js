import React from 'react';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>John Done</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">john0@gmail.com</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
