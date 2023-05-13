import React, {useEffect} from 'react'
import Cover from '../assets/HomeCover.png'
import { Row, Col, Container } from "react-bootstrap";
import { Card, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Product1 from '../assets/Product1.png'
import Product2 from '../assets/Product2.png'

// Import css
import "../styles/HomeScreen.css";

//Import Product
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import SearchBox from "../components/SearchBox";

/* REACT - REDUX */
import { useDispatch, useSelector } from "react-redux";

/* ACTION CREATORS */
import { listProducts } from "../actions/productActions";

function HomeScreen({ history }) {
  const dispatch = useDispatch();

  /* PULLING A PART OF STATE FROM THE ACTUAL STATE IN THE REDUX STORE */
  const productList = useSelector((state) => state.productList);
  const { products, page, pages, loading, error } = productList;

  /* FIRING OFF THE ACTION CREATORS USING DISPATCH */

  let keyword =
    history.location
      .search; /* IF USER SEARCHES FOR ANYTHING THEN THIS KEYWORD CHANGES AND USE EFFECT GETS TRIGGERED */

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <div>
      <div style={{ backgroundImage: `url(${Cover})`, width:'100%', height:'600px' }}>
      <h2 className='cover-photo-heading'>A Perfect Present for<br/> Any Occasion</h2>
      <p className='cover-photo-paragraph pt-2'>In addition to our traditional flower gift boxes, we also offer a <br/> variety of other gifts, including chocolates, wines, and more.<br/> So whether you're looking for the perfect gift for a special<br/> someone, or simply want to treat yourself, we have something<br/> to suit every taste and budget.</p>
    </div>
      {/*}  <img src={Cover} style={{width:'100%', height:'500px'}} />*/}
      <Container className='mb-4 pb-4'>
        <Row>
          <h1 className="text-center mt-4 pt-4 mb-4 ">Featured Product</h1>
        </Row>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {products.map((product) => {
              return (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              );
            })}
          </Row>

          <Paginate page={page} pages={pages} keyword={keyword} />
        </div>
      )}
      </Container>
    </div>
  )
}

export default HomeScreen