import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
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
              {' '}
              {' '}
              <span
                onClick={handleLogout}
                className="customerInactive"
              >
                logout
              </span>
              {' '}
              ?)
            </p>
            <div className="deleteProfile">Delete profile</div>
            <div className="customerDetails">
              <h4 className="customerTitle">user info</h4>
              <div className="customerDesk">
                <PersonIcon style={{ fill: '#c31e39' }} />
                <p className="customerName">
                  {user.firstName}
                  {' '}
                  {user.lastName}
                </p>
              </div>
              <div className="customerDesk">
                <LocalPhoneIcon style={{ fill: '#c31e39' }} />
                <p className="customerPhone">{user.phone}</p>
              </div>
              <div className="customerDesk">
                <MailIcon style={{ fill: '#c31e39' }} />
                <p className="customerEmail">{user.email}</p>
              </div>
            </div>
            <div className="customerOrder">
              <h4 className="customerTitle">my orders</h4>
              {/* եթե չունի գնումներ կատարած ուրեմ․․․ */}
              <p className="customerOrderInfo">
                <Link className="customerOrderLink" to="/shop">Make Your first order.</Link>
                {' '}
                {' '}
                You haven&apos;t placed any orders yet.
              </p>
              {/* եթե ունի գնումներ */}
              <div className="customerOrders" />
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default Profile;
