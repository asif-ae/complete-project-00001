import React, { Fragment } from 'react';
import { button } from './Button.module.css';

const Button = ({ children, type, onClick }) => {
  return (
    <Fragment>
      <button className={button} type={type || 'button'} onClick={onClick}>{children}</button>
    </Fragment>
  );
};

export default Button;