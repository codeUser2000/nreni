import React from 'react';
import { NavLink } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

function AdminMenu() {
  return (
    <aside className="adminMenu">
      <p className="adminTitle">menu</p>
      <ul className="adminMenuBlock">
        <li className="adminMenuList">
          <NavLink to="/adminProduct" className="adminMenuLink">
            <ProductionQuantityLimitsIcon style={{ fill: '#c31e39', marginRight: '5px' }} />
            products
          </NavLink>
        </li>
        <li className="adminMenuList">
          <NavLink to="" className="adminMenuLink">
            <LocalMallIcon style={{ fill: '#c31e39', marginRight: '5px' }} />
            orders
          </NavLink>
        </li>
        <li className="adminMenuList">
          <NavLink to="/adminUsers" className="adminMenuLink">
            <PersonIcon style={{ fill: '#c31e39', marginRight: '5px' }} />
            users
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default AdminMenu;
