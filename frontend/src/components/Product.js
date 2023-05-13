import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Product1 from '../assets/Product1.png'

// Import css
import "../styles/HomeScreen.css";

function Product({ product }) {
  return (
    <div>
      <Card className="my-3">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} height={300} />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`} className="product-hd">
          <Card.Title as="h3">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="h5">Price: ${product.price}</Card.Text>
      {/*}  <Button className="btn btn-primary">Add to Cart</Button>*/}
      </Card.Body>
    </Card>
    </div>
  )
}

export default Product