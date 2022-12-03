import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
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
      <div>Profile</div>
    </Wrapper>
  );
}

export default Profile;
