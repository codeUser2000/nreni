import React from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AdminCreateProduct from './AdminCreateProduct';

function AdminMenu() {
  return (
    <aside className="adminMenu">
      <p className="adminMenuTitle">menu</p>
      <ul className="adminMenuBlock">
        <li className="adminMenuList">
          <Link to={<AdminCreateProduct />} className="adminMenuLink">
            <ProductionQuantityLimitsIcon style={{ fill: '#c31e39', marginRight: '5px' }} />
            products
          </Link>
        </li>
        <li className="adminMenuList">
          <Link to="" className="adminMenuLink">
            <LocalMallIcon style={{ fill: '#c31e39', marginRight: '5px' }} />
            orders
          </Link>
        </li>
        <li className="adminMenuList">
          <Link to="" className="adminMenuLink">
            <PersonIcon style={{ fill: '#c31e39', marginRight: '5px' }} />
            users
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default AdminMenu;
