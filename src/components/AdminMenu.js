import React from 'react';
import { NavLink } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

function AdminMenu() {
  return (
    <aside className="adminMenu">
      <p className="adminTitle">menu</p>
      <ul className="adminMenuBlock">
        <li className="adminMenuList">
          <NavLink to="/admin-product" className="adminMenuLink">
            <ProductionQuantityLimitsIcon style={{ fill: '#c31e39', marginRight: '5px' }} />
            products
          </NavLink>
        </li>
        <li className="adminMenuList">
          <NavLink to="/admin-orders" className="adminMenuLink">
            <LocalMallIcon style={{ fill: '#c31e39', marginRight: '5px' }} />
            orders
          </NavLink>
        </li>
        <li className="adminMenuList">
          <NavLink to="/admin-users" className="adminMenuLink">
            <PersonIcon style={{ fill: '#c31e39', marginRight: '5px' }} />
            users
          </NavLink>
        </li>
        <li className="adminMenuList">
          <NavLink to="/admin-quotes" className="adminMenuLink">
            <FormatQuoteIcon style={{ fill: '#c31e39', marginRight: '5px' }} />
            Quotes
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default AdminMenu;
