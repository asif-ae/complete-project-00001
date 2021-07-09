import React, { Fragment } from 'react';
import { card } from './Card.module.css';

const Card = ({ className, children }) => {
  return (
    <Fragment>
      <div className={`${card} ${className}`}>{ children }</div>
    </Fragment>
  );
};

export default Card;