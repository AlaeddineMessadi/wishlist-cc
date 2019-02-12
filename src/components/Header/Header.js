import React from "react";

import classes from "./Header.module.scss";

/**
 * Header Component
 * @param {*} props
 */
const header = props => (
  <header className={ classes.header }>
    I am the header
  </header>
);

export default header;