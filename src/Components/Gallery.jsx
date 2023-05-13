import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import "./css/Gallery.css"
import camera from "../images/camera.jpeg"
import watch from "../images/watch.jpeg"
import garments from "../images/garments.jpeg"
import clock from "../images/clock.jpeg"
import freezer from "../images/freezer.jpeg"
import ac from "../images/ac.jpeg"
import mobile from "../images/mobile.jpeg"
import shoes from "../images/shoes.jpeg"
import slipper from "../images/slipper.jpeg"

const Gallery = () => {
  return (
    <Container className="mt-5">
       
      <h1 className="text-center mb-5">Gallery</h1>
      <Row className="mt-3">
        <Col  md={4} sm={2}>
          <img src={camera} alt="camera" className='img' />
        </Col>
        <Col md={4} sm={2}>
          <img src={watch} alt="watch" className='img' />
        </Col>
        <Col md={4} sm={2}>
          <img src={mobile} alt="mobile" className='img' />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={4} sm={2}>
          <img src={clock} alt="clock" className='img' />
        </Col>
        <Col md={4} sm={2}>
          <img src={freezer} alt="freezer" className='img'  />
        </Col>
        <Col md={4} sm={2}>
          <img src={ac} alt="ac" className='img'/>
        </Col>
      </Row>
      <br/>
      <Row className="mt-3">
        <Col md={4} sm={2}>
        <img src={garments} alt="garments" className='img' />
        </Col>
        <Col md={4} sm={2}>
        <img src={shoes} alt="shoes" className='img' />
        </Col>
        <Col md={4} sm={2}>
        <img src={slipper} alt="slipper" className='img' />
        </Col>
      </Row>

      

    </Container>
  );
}

export default Gallery;
