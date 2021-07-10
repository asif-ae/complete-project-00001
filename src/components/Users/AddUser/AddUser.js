import React, { Fragment, useRef, useState } from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import { input, label } from './AddUser.module.css';

const AddUser = ({ onAddUser }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  

  // const [enteredData, setEnteredData] = useState({
  //   enteredUsername: '',
  //   enteredAge: '',
  // });
  const [error, setError] = useState();
  // console.log(enteredData);

  // const onChangeHandler = (event) => {
  //   console.log(event.target.value, event.target.name);
  //   event.target.name === 'username' &&
  //   setEnteredData( (prev) => { return { ...prev, enteredUsername: event.target.value } } );
  //   event.target.name === 'age' &&
  //   setEnteredData( (prev) => { return { ...prev, enteredAge: event.target.value } } );
  // }

  const addUserHandler = ( event ) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input!',
        message: 'Please enter a valid name and age (non-empty values).',
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age!',
        message: 'Please enter a valid age (greater than > 0).',
      })
      return;
    }

    console.log(event.target.value);
    onAddUser(enteredName, enteredAge);

    // Reset all input data
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    // setEnteredData( (prev) => { return { ...prev, enteredUsername: '', enteredAge: '' } } )
  }

  const errorHandler = () => {
    setError(null)
  }
  return (
    <Fragment>
      {
        error &&
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      }
      <Card className={input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username" className={label}>Username</label>
          {/* onChange={onChangeHandler} value={enteredData.enteredUsername} */}
          <input type="text" name="username" id="username" className={input} ref={nameInputRef} />

          <label htmlFor="age">Age (Years)</label>
          {/* onChange={onChangeHandler} value={enteredData.enteredAge} */}
          <input type="number" name="age" id="age" className={input} ref={ageInputRef} />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;