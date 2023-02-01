import React from 'react';
import { NavLink } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

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
            <CreditCardIcon style={{ fill: '#c31e39', marginRight: '5px' }} />
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
          <NavLink to="/admin-analytics" className="adminMenuLink">
            <SignalCellularAltIcon style={{ fill: '#c31e39', marginRight: '5px' }} />
            Analytics
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
