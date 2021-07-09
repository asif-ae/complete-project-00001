import React, { Fragment } from 'react';
import Card from '../../UI/Card/Card';
import styles from './UsersList.module.css';

const UsersList = ({ users }) => {
  return (
    <Fragment>
      <Card className={styles.users}>
        <ul>
          {
            users.map( ( user ) => <li key={user.id}>{ user.name } ({ user.age } years old)</li> )
          }
        </ul>
      </Card>
    </Fragment>
  );
};

export default UsersList;