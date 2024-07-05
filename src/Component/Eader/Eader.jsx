import React from 'react';
import { AppBar, Toolbar, styled } from '@mui/material';
import { Link } from 'react-router-dom';

// Styled components
const Component = styled(AppBar)`
  background: brown;
  color: #ffffff;
`;

const Container = styled(Toolbar)`
  justify-content: space-around;
`;

const LinkContainer = styled('div')`
  display: flex;
  & > a {
    padding: 20px;
    color: #ffffff;
    text-decoration: none;
  }
`;

const Eader = () => {
  return (
    <Component>
      <Container>
        <LinkContainer>
          <Link to='/'>HOME</Link>
          <Link to='/about'>ABOUT</Link>
          <Link to='/contact'>CONTACT</Link>
          <Link to='/login'>LOGOUT</Link>
        </LinkContainer>
      </Container>
    </Component>
  );
};

export default Eader;
