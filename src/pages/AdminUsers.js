import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminWrapper from '../components/AdminWrapper';
import { getUserData } from '../store/actions/users';

function AdminUsers() {
  const users = useSelector((state) => state.users.usersData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData(1));
  }, []);
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
                  <p className="adminTableRole">customer</p>
                </td>
                <td>
                  <button type="button" className="adminUserDelete">delete</button>
                </td>
              </tr>
            )) : null}
          </tbody>
        </table>
      </div>
    </AdminWrapper>

  );
}

export default AdminUsers;
