import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

import "./newsletter.css";

const Newsletter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful traveling information.</h2>

              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email" style={{ width: '100%', padding: '10px', borderRadius: '5px' }} />

                <button className="btn newsletter__btn orange" onClick={togglePopup}>
                  Subscribe
                </button>
              </div>

              <p>
              Join our community and gain access to essential tips, exclusive offers, and insider knowledge to enhance your adventures. 
              </p>
            </div>
          </Col>

          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>

      {isOpen && (
        <div
          className="popup"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            className="popup-content"
            style={{
              backgroundColor: '#f58523',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              color: '#fff',
            }}
          >
            <h2>Successfully Subscribed</h2>
            <p>You will get the latest news and tour plans via email.</p>
            <button
              onClick={togglePopup}
              style={{
                backgroundColor: '#fff',
                color: '#f58523',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Newsletter;
