import Card from 'react-bootstrap/Card';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../store/actions/users';

function BasicExample({ id = 4 }) {
  const users = useSelector((state) => state.users.usersData);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getUserData(1));
    })();
  }, []);
  useEffect(() => {
    setUser(users.filter((u) => +u.id === id));
  }, [users]);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>
          {user.firstName}
          {' '}
          {user.lastName}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">naira@gmail.com</Card.Subtitle>
        <Card.Text>
          lorem ipsum
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
