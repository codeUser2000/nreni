import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Modal } from 'react-bootstrap';
import qs from 'query-string';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import AdminWrapper from '../components/AdminWrapper';
import { deleteUserRequest, getUserData } from '../store/actions/users';
import UserCard from '../components/UserCard';

function AdminUsers() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = qs.parse(location.search, { arrayFormat: 'comma' });
  const users = useSelector((state) => state.users.usersData);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchText, setSearch] = useState('');

  const pagination = useSelector((state) => state.users.pagination);

  useEffect(() => {
    (async () => {
      await dispatch(getUserData(query.page || 1));
    })();
  }, []);

  const handleDelete = useCallback(async (email, status) => {
    await dispatch(deleteUserRequest(email, status));
    await dispatch(getUserData(query.page || 1));
  }, []);

  const handleOpenModal = useCallback((userId) => {
    setShow(true);
    setId(userId);
  }, []);

  const handleChange = useCallback(async (ev, value) => {
    setPageNumber(value);
    query.page = value;
    navigate(`?${qs.stringify(query, {
      arrayFormat: 'comma',
      skipEmptyString: true,
    })}`);
  }, [location.search]);

  useEffect(() => {
    (async () => {
      if (query.searchText) {
        setSearch(query.searchText);
      }
      if (query.searchText) {
        setPageNumber(+query.page || 1);
        await dispatch(getUserData(query.page || 1, query.searchText));
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      if (query.searchText) {
        setPageNumber(1);
        await dispatch(getUserData(1, query.searchText));
      } else {
        await dispatch(getUserData(1));
      }
    })();
  }, [location.search]);
  const handleSearch = useCallback((ev) => {
    setSearch(ev);
    query.searchText = ev;
    navigate(`?${qs.stringify(query, {
      arrayFormat: 'comma',
      skipEmptyString: true,
    })}`);
  }, [location.search]);

  return (
    <AdminWrapper>
      <div className="adminProducts">
        <p className="adminTitle">Users</p>
        <input
          type="text"
          style={{ height: 49 }}
          value={searchText}
          placeholder="Search user"
          className="shopSearchInput"
          onChange={(ev) => handleSearch(ev.target.value)}
        />
        <table className="adminTable">
          <thead className="adminTableThead">
            <tr className="adminTableTheadTitles">
              <td>name</td>
              <td>email</td>
              <td>role</td>
              <td>status</td>
              <td>action</td>
            </tr>
          </thead>
          <tbody className="adminTableTbody">
            {users.length ? users.map((u) => (
              <tr key={u.id}>
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                <td onClick={() => handleOpenModal(u.id)}>
                  <p className="adminTableName">
                    {u.firstName}
                    {' '}
                    {' '}
                    {' '}
                    {u.lastName}
                  </p>
                </td>
                <td>
                  <p>{u.email}</p>
                </td>
                <td>
                  <p className="adminTableRole">{u.admin ? 'admin' : 'customer'}</p>
                </td>
                <td>
                  <p className="adminTableRole">{u.status}</p>
                </td>
                <td>
                  <span className="adminTableBtn" onClick={() => handleDelete(u.email, u.status)}>
                    {u.status === 'deleted' ? <CheckCircleIcon /> : <DeleteIcon />}
                  </span>
                </td>
              </tr>
            )) : null}
          </tbody>
        </table>
        <Pagination count={+pagination} page={+pageNumber} onChange={handleChange} />
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        onExit={() => setShow(false)}
      >
        <button type="button" onClick={() => setShow(false)}>
          x
        </button>
        <UserCard id={id} />
      </Modal>
    </AdminWrapper>

  );
}

export default AdminUsers;
