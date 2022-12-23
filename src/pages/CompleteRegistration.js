import React, { useEffect } from 'react';
import qs from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import Api from '../Api';

function CompleteRegistration() {
  const location = useLocation();
  const query = qs.parse(location.search);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await Api.confirmToken(query);
      if (data.status === 'ok') {
        navigate('/login');
      }
    })();
  }, []);
  return (
    <div />
  );
}

export default CompleteRegistration;
