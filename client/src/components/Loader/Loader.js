import React from 'react';

import classes from './Loader.module.scss';

/**
 * Loader component
 */
const Loader = () => {
  return (
    <div className={ classes.spinner }></div>
  );
};

export default Loader;
