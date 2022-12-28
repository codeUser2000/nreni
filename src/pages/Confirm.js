import React, { useEffect } from 'react';
import Api from '../Api';

function Confirm() {
  useEffect(() => {
    (async () => {
      const { data } = await Api.confirm();
      console.log(data);
    })();
  }, []);
  return (
    <div>Hello</div>
  );
}

export default Confirm;
