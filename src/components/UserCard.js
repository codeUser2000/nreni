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
          <p className="userCardItems">
            <Inventory2Icon style={{ fill: ' #c31e39' }} />
            {' '}
            {user.postal ? user.postal : null}
          </p>
          <p className="userCardItems">
            <CalendarMonthIcon style={{ fill: ' #c31e39' }} />
            {' '}
            {user.birthYear ? user.birthYear : null}
          </p>
          <p className="userCardItems">
            <PermPhoneMsgIcon style={{ fill: ' #c31e39' }} />
            {' '}
            {user.phone ? user.phone : null}
          </p>
          <p className="userCardItems">
            <LocalPostOfficeIcon style={{ fill: ' #c31e39' }} />
            {' '}
            {user.email}
          </p>
          <p className="userCardItems" style={{ textTransform: 'capitalize' }}>
            <ImportContactsIcon style={{ fill: ' #c31e39' }} />
            {' '}
            {user.country ? user.country : null}
            {' '}
            {user.city ? user.city : null}
            {' '}
            {user.street ? user.street : null}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
