import React from "react";

/* REACT BOOTSTRAP */
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

/* REACT ROUTER BOOTSTRAP */
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

/* REACT - REDUX */
import { useDispatch, useSelector } from "react-redux";

/* ACTION CREATORS */
import { logout } from "../actions/userActions";

/* COMPONENTS */
import SearchBox from "../components/SearchBox";

import "../styles/HomeScreen.css";

function Header() {
  /* PULLING A PART OF STATE FROM THE ACTUAL STATE IN THE REDUX STORE */
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  /* HANDLER */
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header class="section-header pt-4">
      <section class="header-main pt-4 pb-5 border-bottom">
        <div class="container">
          <div class="row gy-3 align-items-center">
            <div class="order-lg-last col-lg-8 col-sm-8 col-8">
              <div class="float-end">
                <span class="ms-1 pr-2 d-sm-inline-block">
                  {userInfo ? (
                    <NavDropdown title={userInfo.name} id="username">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>

                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <LinkContainer to="/login">
                      <Nav.Link>
                        <i className="fas fa-user"></i> My Account
                      </Nav.Link>
                    </LinkContainer>
                  )}
                </span>
                <span class="ms-1 d-sm-inline-block">
                  {userInfo && userInfo.isAdmin && (
                    <NavDropdown title="Admin" id="adminmenu">
                      <LinkContainer to="/admin/userlist">
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer to="/admin/productlist">
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer to="/admin/orderlist">
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
                </span>
                <span class="ms-1 d-sm-inline-block">
                  <LinkContainer to="/cart" className="header-txt">
                    <Nav.Link>
                      <i className="fa fa-shopping-cart"></i> Cart
                    </Nav.Link>
                  </LinkContainer>
                </span>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-12">
              <SearchBox />
           {/*}   <form action="#" class="">
                <div class="input-group">
                  <input
                    type="search"
                    class="form-control"
                    style={{ width: "25%" }}
                    placeholder="Search"
                  />
                  <button class="btn btn-primary">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
                  </form>*/}
            </div>
          </div>
        </div>
      </section>

      <nav class="navbar navbar-light navbar-expand-lg">
        <div class="container">
          <button
            class="navbar-toggler border"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar_main"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-center pb-2"
            id="navbar_main"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link ps-0 custom-nav" to="/"> HOME </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link custom-nav" to="/products">PRODUCTS</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link custom-nav" to="/about">ABOUT US</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link custom-nav" to="/about">SITE FEATURES</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
