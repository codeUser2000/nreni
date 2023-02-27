import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import DiamondIcon from '@mui/icons-material/Diamond';
import GroupIcon from '@mui/icons-material/Group';
import React from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const offCanvasUserData = [
  {
    id: 1,
    title: 'Home',
    link: '/home',
    icon: <HomeIcon style={{ marginTop: -5 }} />,
  },
  {
    id: 2,
    title: 'Shop',
    link: '/shop',
    icon: <ShoppingBagIcon style={{ marginTop: -5 }} />
    ,
  },
  {
    id: 3,
    title: 'About',
    link: '/about',
    icon: <GroupIcon style={{ marginTop: -5 }} />
    ,
  },
  {
    id: 4,
    title: 'Silver',
    link: '/clean',
    icon: <DiamondIcon style={{ marginTop: -5 }} />
    ,
  },
  {
    id: 5,
    title: 'Contact',
    link: '/contact',
    icon: <AddIcCallIcon style={{ marginTop: -5 }} />
    ,
  },
  {
    id: 6,
    title: 'Card',
    link: '/card',
    icon: <ShoppingCartIcon style={{ marginTop: -5 }} />
    ,
  },
];

export const offCanvasAdminData = [
  {
    id: 1,
    title: 'products',
    link: '/admin-product',
    icon: <ProductionQuantityLimitsIcon style={{ marginRight: '5px' }} />,
  },
  {
    id: 2,
    title: 'orders',
    link: '/admin-orders',
    icon: <ShoppingCartIcon style={{ marginRight: '5px' }} />,
  },
  {
    id: 3,
    title: 'users',
    link: '/admin-users',
    icon: <PersonIcon style={{ marginRight: '5px' }} />,
  },
  {
    id: 4,
    title: 'analytics',
    link: '/admin-analytics',
    icon: <SignalCellularAltIcon style={{ marginRight: '5px' }} />,
  },
  {
    id: 5,
    title: 'quotes',
    link: '/admin-quotes',
    icon: <FormatQuoteIcon style={{ marginRight: '5px' }} />,
  },
];
