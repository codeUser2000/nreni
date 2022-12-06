import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Wrapper from '../components/Wrapper';
import Account from '../helpers/Account';

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    if (!Account.getToken()) {
      navigate('/login');
    } else {
      setUser(JSON.parse(Account.getProfile()));
    }
  }, []);
  const handleLogout = useCallback(() => {
    Account.logout();
    window.location.reload(false);
  }, []);
  return (
    <Wrapper>
      <main className="profile">
        <div className="container">
          <h2 className="profileTitle">my account</h2>
          <div className="customer">
            <p className="customerWelcome">
              Hello
              <span className="customerInfo">
                {' '}
                {user.firstName}
                {' '}
                {user.lastName}
              </span>
              !
              ( Do you want
              {/* eslint-disable-next-line max-len */}
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <span
                onClick={handleLogout}
                className="customerInactive"
              >
                logout
              </span>
              {' '}
              ?)
            </p>
            <div className="customerDetails">
              <h4 className="customerTitle">user info</h4>
              <div className="customerDesk">
                {/* <i className="fa-solid fa-user customerIcon"></i> */}
                <p className="customerName">
                  <PersonIcon />
                  {user.firstName}
                  {' '}
                  {user.lastName}
                </p>
              </div>
              <div className="customerDesk">
                <LocalPhoneIcon />
                <p className="customerPhone">{user.phone}</p>
              </div>
              <div className="customerDesk">
                <MailOutlineIcon />
                <p className="customerEmail">{user.email}</p>
              </div>
            </div>
            <div className="customerOrder">
              <h4 className="customerTitle">my orders</h4>
              {/* եթե չունի գնումներ կատարած ուրեմ․․․ */}
              <p className="customerOrderInfo">
                <Link className="customerOrderLink" to="/shop">Make Your first order.</Link>
                You haven&apos;t placed any orders yet.
              </p>
              {/* եթե ունի գնումներ */}
              <div className="customerOrders" />
              <div>Delete profile</div>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default Profile;
