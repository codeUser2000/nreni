import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { getUserData } from '../store/actions/users';

function BasicExample({ id = 7 }) {
  const users = useSelector((state) => state.users.usersData);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getUserData(1));
    })();
  }, []);
  useEffect(() => {
    setUser(users.filter((u) => +u.id === id)[0]);
  }, [users, id]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {user.firstName}
          {' '}
          {user.lastName}
        </Card.Title>
        <Card.Text>
          {user.postal
            ? (
              <p className="userCardItems">
                <Inventory2Icon style={{ fill: ' #c31e39' }} />
                {' '}
                {user.postal}
              </p>
            )
            : null}
          {user.birthYear ? (
            <p className="userCardItems">
              <CalendarMonthIcon style={{ fill: ' #c31e39' }} />
              {' '}
              {user.birthYear}
            </p>
          ) : null}
          {user.phone ? (
            <p className="userCardItems">
              <PermPhoneMsgIcon style={{ fill: ' #c31e39' }} />
              {' '}
              {user.phone}
            </p>
          ) : null}
          {user.email ? (
            <p className="userCardItems">
              <LocalPostOfficeIcon style={{ fill: ' #c31e39' }} />
              {' '}
              {user.email}
            </p>
          ) : null}

          {user.country || user.city || user.street ? (
            <p className="userCardItems" style={{ textTransform: 'capitalize' }}>
              <ImportContactsIcon style={{ fill: ' #c31e39' }} />
              {' '}
              {user.country}
              {' '}
              {user.city}
              {' '}
              {user.street}
            </p>
          ) : null}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
