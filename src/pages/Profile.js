import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Wrapper from '../components/Wrapper';

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      navigate('/login');
      // } else {
      //   if (!sessionStorage.getItem('profile')) {
      //     setUser(JSON.parse(localStorage.getItem('profile')));
      //   }
    } else {
      setUser(JSON.parse(sessionStorage.getItem('profile')));
    }
  }, [sessionStorage]);
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
              <Link to="/home" className="customerInactive">logout</Link>
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
                <p className="customerPhone">(+374) 95 067515</p>
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
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default Profile;
