import React, { Fragment } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import styles from './ErrorModal.module.css';


const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <Fragment>
      <div className={styles.backdrop} onClick={onConfirm}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onConfirm}>Okay!</Button>
        </footer>
      </Card>
    </Fragment>
  );
};

export default ErrorModal;