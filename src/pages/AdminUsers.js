import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Modal } from 'react-bootstrap';
import AdminWrapper from '../components/AdminWrapper';
import { deleteUserRequest, getUserData } from '../store/actions/users';
import UserCard from '../components/UserCard';

function AdminUsers() {
  const users = useSelector((state) => state.users.usersData);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const pagination = useSelector((state) => state.users.pagination);

  useEffect(() => {
    dispatch(getUserData(1));
  }, []);

  const handleDelete = useCallback((email) => {
    dispatch(deleteUserRequest(email));
    dispatch(getUserData(1));
  }, []);

  const handleOpenModal = useCallback((userId) => {
    setShow(true);
    console.log(userId);
    setId(userId);
  }, []);

  const handleChange = useCallback((ev, value) => {
    setPageNumber(value);
    dispatch(getUserData(pageNumber));
  }, [pagination]);

  return (
    <AdminWrapper>
      <div className="adminProducts">
        <p className="adminTitle">Users</p>
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
              <tr key={u.id} onClick={() => handleOpenModal(u.id)}>
                <td>
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
                  <span className="adminTableBtn">
                    <DeleteIcon onClick={() => handleDelete(u.email)} />
                  </span>
                </td>
              </tr>
            )) : null}
          </tbody>
        </table>
        <Pagination count={+pagination} page={pageNumber} onChange={handleChange} />
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
