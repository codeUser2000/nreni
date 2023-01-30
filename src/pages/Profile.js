import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import Wrapper from '../components/Wrapper';
import Account from '../helpers/Account';
import { deleteUserSelfRequest, getUserProfileRequest } from '../store/actions/users';
import CartItems from '../components/CartItems';
import AddNewAddresses from './AddNewAddresses';

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.users.singleUserData);
  const userStatus = useSelector((state) => state.users.singleUserDataStatus);

  useEffect(() => {
    (async () => {
      if (!Account.getToken() || Account.getToken() === 'undefined') {
        navigate('/login');
      } else {
        await dispatch(getUserProfileRequest());
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
          <h2 className="profileTitle">my account</h2>
          {!_.isEmpty(user) ? (
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
              <div
                className="deleteProfile"
                onClick={handleDelete}
              >
                Delete profile
              </div>
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
                {/* <div className="customerDesk"> */}
                {/*  <LocalPhoneIcon style={{ fill: '#c31e39' }} /> */}
                {/*  <p className="customerPhone">{user.phone}</p> */}
                {/* </div> */}
                <div className="customerDesk">
                  <MailIcon style={{ fill: '#c31e39' }} />
                  <p className="customerEmail">{user.email}</p>
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
                  ? <AddNewAddresses />
                  : null}
              </div>
              {/*<div className="customerOrder">*/}
              {/*  <h4 className="customerTitle">my orders</h4>*/}
              {/*  {user.cart.cartItem.length*/}
              {/*    ? (*/}
              {/*      <table className="cartTable">*/}
              {/*        <thead className="cartTableThead">*/}
              {/*          <tr className="cartTableTheadTitles">*/}
              {/*            <td>Description</td>*/}
              {/*            <td>Quantity</td>*/}
              {/*            <td>Price</td>*/}
              {/*            <td className="">remove</td>*/}
              {/*          </tr>*/}
              {/*        </thead>*/}
              {/*        <tbody className="cartTableTbody">*/}
              {/*          <CartItems />*/}
              {/*        </tbody>*/}
              {/*      </table>*/}
              {/*    )*/}
              {/*    : (*/}
              {/*      <p className="customerOrderInfo">*/}
              {/*        <Link className="customerOrderLink" to="/shop">Make Your first order.</Link>*/}
              {/*        {' '}*/}
              {/*        {' '}*/}
              {/*        You haven&apos;t placed any orders yet.*/}
              {/*      </p>*/}
              {/*    )}*/}
              {/*</div>*/}
            </div>
          )
            : null}
        </div>
      </main>
    </Wrapper>
  );
}

export default Profile;
