import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router';
import { adminLoginRequest } from '../store/actions/users';
import Account from '../helpers/Account';

function AdminLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [show, setShow] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const adminDataStatus = useSelector((state) => state.users.adminDataStatus);

  useEffect(() => {
    if (Account.getAdminToken()) {
      navigate('/admin-product');
    }
  }, [adminDataStatus]);

  const handleSubmit = useCallback(async (ev) => {
    ev.preventDefault();
    if (!email || !password) {
      toast.error('Enter email and password');
      return;
    }
    dispatch(adminLoginRequest({ email, password }, remember));
  }, [email, password, remember]);

  return (
    <div className="resetPas">
      <div className="container">
        <div className="resetPasPage">
          <form onSubmit={handleSubmit} className="resetPasForm">
            <h2 className="resetPasTitle">Admin login your account</h2>
            <hr />
            <input
              type="email"
              value={email}
              className="adminInput"
              placeholder="Type Your Email"
              style={{ marginBottom: 20 }}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <label htmlFor="adminPas" style={{ display: 'flex' }} className="adminFormLabel">
              <input
                id="adminPas"
                value={password}
                className="adminInput"
                placeholder="Type Your Password"
                type={show ? 'text' : 'password'}
                onChange={(ev) => setPassword(ev.target.value)}
              />
              {show
                ? <RemoveRedEyeIcon fontSize="small" onClick={() => setShow(false)} />
                : <VisibilityOffIcon fontSize="small" onClick={() => setShow(true)} />}
            </label>
            <label htmlFor="remember" className="containerCheck adminRemember">
              <input
                type="checkbox"
                id="remember"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              <span className="checkmark" />
              Remember me
            </label>
            <button type="submit" className="resetPasBtn">login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
