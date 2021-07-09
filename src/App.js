import React, { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';
import Wrapper from './components/Wrapper/Wrapper';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const random = parseInt(Math.random() * 10000000000000000).toString();
  const addUserHandler = (userName, userAge) => {
    setUsersList( ( prev ) => {
      return [ ...prev, { name: userName, age: userAge, id: random } ]
    })
  }
  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Wrapper>
  );
}

export default App;
