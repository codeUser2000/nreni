import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';
import Wrapper from '../components/Wrapper';

function Profile() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      navigate('/login');
    }
  }, [sessionStorage]);
  return (
    <Wrapper>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div>Profile</div>
    </Wrapper>
  );
}

export default Profile;
