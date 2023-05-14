import React from 'react';
import { Card } from 'react-bootstrap';
import "./css/Services.css"
import HomeAppliances from "../images/homeappliances.jpeg"
import SmartTv from "../images/smarttv.webp"
import Mobiles from "../images/mobiles.jpg"
import Laptops from "../images/Laptops.jpeg"
import MensGarments from "../images/mensgarments.jpeg"
import Shoess from "../images/shoess.jpeg"

const services = [
  {
    id: 1,
    title: 'Home Appliances',
    description: 'Description of Home Appliances',
    imageUrl: HomeAppliances,
  },
  {
    id: 2,
    title: 'Smart Tv',
    description: 'Description of Smart',
    imageUrl: SmartTv,
  },
  {
    id: 3,
    title: 'Mobiles',
    description: 'Description of Mobiles',
    imageUrl: Mobiles,
  },
  {
    id: 4,
    title: 'Laptops',
    description: 'Description of Laptops',
    imageUrl: Laptops,
  },
  {
    id: 5,
    title: "Men's Garments",
    description: "Description of Men's Garments",
    imageUrl: MensGarments,
  },
  {
    id: 6,
    title: 'Shoes',
    description: 'Description of Shoes',
    imageUrl: Shoess,
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
