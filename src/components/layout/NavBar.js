import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <NavContainer>
      <Logo>Expensify</Logo>
      <Link to="/" exact activeStyle={ActiveLink}>
        Dashboard
      </Link>
      <Link to="/create" activeStyle={ActiveLink}>
        \Create Expense
      </Link>
      <Link to="/edit" activeStyle={ActiveLink}>
        Edit Expense
      </Link>
      <Link to="/help" activeStyle={ActiveLink}>
        Help
      </Link>
    </NavContainer>
  );
};

const Logo = styled.h1`
  margin: 20px 40px;
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  color: #9799a2;

  &:not(:last-child) {
    margin-right: 32px;
  }
`;

const ActiveLink = {
  color: "#303446"
};

export default NavBar;
