import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://wallpaper.dog/large/902910.jpg"
                  alt="Slide 1"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAWxXoa8fH3i1OxqgZ7ekFc4Gw_iMtl20PhA&usqp=CAU"
                  alt="Slide 2"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://w0.peakpx.com/wallpaper/291/756/HD-wallpaper-code-is-poetry-code-computer-programming-syntax.jpg"
                  alt="Slide 3"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2tQTM5u0kb7T48OXcdQo0KMMGEHEJLgqD_w&usqp=CAU"
                style={{ height: '280px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Laptops</Card.Title>
                <Card.Text>
                  This is the first card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor aliquam sem, ac commodo ante mattis et.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5QpbcRm4szd698m5CiJTwu7Lgip6tsfhiEOUmvQYIXrryXcUa3GsvLA8cqewI3Wv1Epk&usqp=CAU"
                style={{ height: '280px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Mobile Phones</Card.Title>
                <Card.Text>
                  This is the first card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor aliquam sem, ac commodo ante mattis et.
                </Card.Text>
                <Button variant="primary" style={{ transform: 'translateY(0) !important' }}>Learn More</Button>


              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvAgjFq6NxBtR71no-zPnDEGMyBDnJRj0DZQ&usqp=CAU"
                style={{ height: '280px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Cameras</Card.Title>
                <Card.Text>
                  This is the first card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor aliquam sem, ac commodo ante mattis et.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
          {/* Add other columns here */}
        </div>
      </div>
    </>
  );
}

export default Home;
