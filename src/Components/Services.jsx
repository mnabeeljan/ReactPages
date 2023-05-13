import React from 'react';
import { Card } from 'react-bootstrap';
import "./css/Services.css"


const services = [
  {
    id: 1,
    title: 'Service 1',
    description: 'Description of service 1',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    title: 'Service 2',
    description: 'Description of service 2',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    title: 'Service 3',
    description: 'Description of service 3',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 4,
    title: 'Service 3',
    description: 'Description of service 3',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 5,
    title: 'Service 3',
    description: 'Description of service 3',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 6,
    title: 'Service 3',
    description: 'Description of service 3',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
];

const Services = () => {
  return (
    <div className="container mt-5 services-container" >
      <h1>Our Services</h1>
      <p>We offered so many services to our respected customers</p>
      <div className="row mt-4">
        {services.map((service) => (
          <div key={service.id} className="col-md-4">
            <Card className="service-card">
              <Card.Img variant="top" src={service.imageUrl} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
