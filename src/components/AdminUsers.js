import React from 'react';

function AdminUsers() {
  return (
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
          <tr>
            <td>
              <p className="adminTableName">naira</p>
            </td>
            <td>
              <p className="adminTableName">hovhannisyan</p>
            </td>
            <td>
              <p>+374 94 257256</p>
            </td>
            <td>
              <p>hovhannisya03@mail.ru</p>
            </td>
            <td>
              <p className="adminTableRole">customer</p>
            </td>
            <td>
              <button className="adminUserTableBtn">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}

export default AdminUsers;
