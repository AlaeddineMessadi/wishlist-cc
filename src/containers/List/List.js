import React from 'react';

import classes from './List.module.scss';

const List = ({ items }) => {
  return (
    <div className={ classes.list_items }>
      { items }
    </div>
  );
};

export default List;
