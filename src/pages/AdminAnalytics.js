import React from 'react';
import AdminWrapper from '../components/AdminWrapper';
import ProductsAnalytics from '../components/ProductsAnalytics';
import MonthAnalytics from '../components/MonthAnalytics';

function AdminAnalytics() {
  return (
    <AdminWrapper>
      <ProductsAnalytics />
      <MonthAnalytics />
    </AdminWrapper>
  );
}

export default AdminAnalytics;
