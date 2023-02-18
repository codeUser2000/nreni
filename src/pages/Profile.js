import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import Aos from 'aos';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Wrapper from '../components/Wrapper';
import Account from '../helpers/Account';
import { deleteUserSelfRequest, getUserProfileRequest } from '../store/actions/users';
import AddNewAddresses from '../components/AddNewAddresses';
import { getOrderListUserRequest } from '../store/actions/others';
import OrderItems from '../components/OrderItems';
import 'aos/dist/aos.css';

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.users.singleUserData);
  const userStatus = useSelector((state) => state.users.singleUserDataStatus);
  const orders = useSelector((state) => state.others.orderDataUser);

  useEffect(() => {
    Aos.init();
    (async () => {
      if (!Account.getToken() || Account.getToken() === 'undefined') {
        navigate('/login');
      } else {
        await dispatch(getUserProfileRequest());
        await dispatch(getOrderListUserRequest(1));
      }
    })();
  }, []);

  useEffect(() => {
    if (_.isEmpty(user) && !userStatus) {
      navigate('/login');
    }
  }, [user, userStatus]);

  const handleLogout = useCallback(() => {
    Account.logout();
    window.location.reload(false);
  }, []);

  const handleDelete = useCallback(async (id) => {
    await dispatch(deleteUserSelfRequest(id));
    navigate('/home');
  }, []);
  return (
    <Wrapper>
      <main className="profile">
        <div className="container">
          <h2
            className="profileTitle"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            my account
          </h2>
          {!_.isEmpty(user) ? (
              <div className="customer">
                <p
                  className="customerWelcome"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
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
                <div
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  className="deleteProfile"
                  onClick={handleDelete}
                >
                  Delete profile
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="customerDetails"
                >
                  <h4 className="customerTitle">user info</h4>
                  <div className="customerDetailsDesk">
                    <div className="customerDesk">
                      <PersonIcon style={{ fill: '#c31e39' }}/>
                      <p className="customerName">
                        {user.firstName}
                        {' '}
                        {user.lastName}
                      </p>
                    </div>
                    {user.postal
                      ? (
                        <div className="customerDesk">
                          <Inventory2Icon style={{ fill: '#c31e39' }}/>
                          <p className="customerEmail">{user.postal}</p>
                        </div>
                      )
                      : null}
                    {user.birthYear
                      ? (
                        <div className="customerDesk">
                          <CalendarMonthIcon style={{ fill: '#c31e39' }}/>
                          <p className="customerEmail">{user.birthYear}</p>
                        </div>
                      )
                      : null}
                    {user.phone
                      ? (
                        <div className="customerDesk">
                          <PermPhoneMsgIcon style={{ fill: '#c31e39' }}/>
                          <p className="customerEmail">{user.phone}</p>
                        </div>
                      )
                      : null}
                    {user.email
                      ? (
                        <div className="customerDesk">
                          <MailIcon style={{ fill: '#c31e39' }}/>
                          <p className="customerEmail">{user.email}</p>
                        </div>
                      )
                      : null}
                    {user.country || user.city || user.street ? (
                      <div className="customerDesk">
                        <ImportContactsIcon style={{ fill: '#c31e39' }}/>
                        <p className="customerEmail">
                          {user.country}
                          {' '}
                          {user.city}
                          {' '}
                          {user.street}
                        </p>
                      </div>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    className="addAddress"
                    onClick={() => setShow(!show)}
                  >
                    {show ? 'Close modal'
                      : 'Add new addresses'}
                  </button>
                  {show
                    ? <AddNewAddresses/>
                    : null}
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="customerOrder"
                >
                  <h4 className="customerTitle">my orders</h4>
                  {orders?.length
                    ? (
                      <table className="cartTable">
                        <thead className="cartTableThead">
                        <tr className="cartTableTheadTitles">
                          <td>Description</td>
                          <td>Quantity</td>
                          <td>Price</td>
                          <td className="">Status</td>
                        </tr>
                        </thead>
                        <tbody className="cartTableTbody">
                        <OrderItems/>
                        </tbody>
                      </table>
                    )
                    : (
                      <p className="customerOrderInfo">
                        <Link className="customerOrderLink" to="/shop">Make Your first order.</Link>
                        {' '}
                        {' '}
                        You haven&apos;t placed any orders yet.
                      </p>
                    )}
                </div>
              </div>
            )
            : null}
        </div>
      </main>
    </Wrapper>
  );
}

export default Profile;
