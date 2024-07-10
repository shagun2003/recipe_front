import React, { useContext, useState } from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material';
import imageURL from './spice.png';
import { API } from '../../service/api.js';
import { DataContext } from '../../context/Dataprovider.jsx';
import { useNavigate } from 'react-router-dom';

const Comp = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  background-color: #F8F9FA;
`;

const StyledImage = styled('img')`
  width: 170px;
  height: 50px;
  margin: auto;
  display: flex;
  padding: 40px;
`;

const TextFieldContainer = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const Lobutton = styled(Button)`
  text-transform: none;
  background: #4caf50;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  &:hover {
    background: #45a049;
  }
`;

const Sibutton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #4caf50;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  &:hover {
    background: #f0f0f0;
  }
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const signupValues = {
  name: '',
  username: '',
  password: '',
};

const loginValues = {
  username: '',
  password: '',
};

const Login = ({ isauten }) => {
  const [account, toggleAccount] = useState('login');
  const [signup, setSignup] = useState(signupValues);
  const [error, showError] = useState('');
  const [login, setLogin] = useState(loginValues);
  const { setaccount } = useContext(DataContext);
  const navi = useNavigate();

  const toggleSignup = () => {
    account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      showError('');
      setSignup(signupValues);
      toggleAccount('login');
    } else {
      showError('Something went wrong! Please try again later');
    }
  };

  const loginUser = async () => {
    let response = await API.userLogin(login);
    console.log(response); // Log the response to check the structure
    if (response.isSuccess) {
      showError('');
      sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
      sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
      setaccount({ username: response.data.username, name: response.data.name });
      isauten(true);
      navi('/');
    } else {
      showError('Something went wrong! please try again later');
    }
  };

  return (
    <Comp>
      <Box>
        <StyledImage src={imageURL} alt="login" />
        {account === 'login' ? (
          <TextFieldContainer>
            <TextField variant="standard" value={login.username} onChange={onValueChange} name="username" label="Username" />
            <TextField variant="standard" value={login.password} onChange={onValueChange} name="password" label="Password" />
            {error && <Error>{error}</Error>}
            <Lobutton onClick={loginUser} variant="contained">Login</Lobutton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <Sibutton onClick={toggleSignup}>Create Account</Sibutton>
          </TextFieldContainer>
        ) : (
          <TextFieldContainer>
            <TextField variant="standard" onChange={onInputChange} name="name" label="Name" />
            <TextField variant="standard" onChange={onInputChange} name="username" label="Username" />
            <TextField variant="standard" onChange={onInputChange} name="password" label="Password" />
            {error && <Error>{error}</Error>}
            <Sibutton onClick={signupUser}>Signup</Sibutton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <Lobutton onClick={toggleSignup}>Already Have an Account</Lobutton>
          </TextFieldContainer>
        )}
      </Box>
    </Comp>
  );
};

export default Login;
