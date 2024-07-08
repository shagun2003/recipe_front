import React from 'react';
import { AppBar, Toolbar, styled, useMediaQuery, useTheme } from '@mui/material';
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
  flex-direction: column; /* For mobile, change to column layout */
  align-items: center; /* Center items vertically */
  
  /* Apply responsive styles using MUI theme breakpoints */
  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    flex-direction: row; /* Switch back to row layout on larger screens */
  }
  
  & > a {
    padding: 10px; /* Adjust padding for smaller screens */
    color: #ffffff;
    text-decoration: none;
  }
`;

const Eader = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is small (sm) or smaller

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
