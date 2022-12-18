import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@mui/material';
import AdminWrapper from '../components/AdminWrapper';
import { deleteUserRequest, getUserData } from '../store/actions/users';

function AdminUsers() {
  const users = useSelector((state) => state.users.usersData);
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const pagination = useSelector((state) => state.users.pagination);
  useEffect(() => {
    dispatch(getUserData(1));
  }, []);
  const handleDelete = useCallback((email) => {
    dispatch(deleteUserRequest(email));
    dispatch(getUserData(1));
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
              <td>first name</td>
              <td>last name</td>
              <td>phone number</td>
              <td>email</td>
              <td>role</td>
              <td>status</td>
              <td>action</td>
            </tr>
          </thead>
          <tbody className="adminTableTbody">
            {users.length ? users.map((u) => (
              <tr key={u.id}>
                <td>
                  <p className="adminTableName">{u.firstName}</p>
                </td>
                <td>
                  <p className="adminTableName">{u.lastName}</p>
                </td>
                <td>
                  <p>{u.phone}</p>
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
                  <button type="button" onClick={() => handleDelete(u.email)} className="adminUserDelete">delete</button>
                </td>
              </tr>
            )) : null}
          </tbody>
        </table>
        <Pagination count={+pagination} page={pageNumber} onChange={handleChange} />
      </div>
    </AdminWrapper>

  );
}

export default AdminUsers;
