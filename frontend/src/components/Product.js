import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

// Animate on Scroll stuff.
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({ duration: 1000, once: false });

const Product = ({ product }) => {
  return (
    <Card
      className="my-3 p-3 rounded"
      data-aos="flip-right"
      data-aos-easing="ease-in-sine"
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={` ${product.numReviews} reviews`}
            // color="red"
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
