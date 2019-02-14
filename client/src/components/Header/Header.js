import React from "react";

import { Link } from 'react-router-dom';

import classes from "./Header.module.scss";

/**
 * Header Component
 * @param {*} props
 */
const header = props => (
  <header className={ classes.header }>
    <Link to="/" className={ classes.text_logo }>Adidas Wishlist</Link>
    <Link to="/search" className={ classes.search_link }><i className="fa fa-search"></i></Link>
  </header>
);

export default header;