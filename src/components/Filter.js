import React from 'react';
import Recursive from './Recursive';
import data from '../data';

function Filter() {
  const menu = data;
  return (
    <Recursive items={menu} className="" />
  );
}

export default Filter;
