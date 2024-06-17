import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiHomeModern,
  HiMiniDevicePhoneMobile,
  HiMiniKey,
} from "react-icons/hi2";

const Navigatebar = styled.nav`
  background-color: Lime;
  color: white;
  padding: 5px 80px 5px 50px;
`;
const Nav = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 200px;
  align-items: center;
`;
const Li = styled.li`
  list-style-type: none;
`;
const StyleNavLink = styled(NavLink)`
  &:link,
  &:visited {
  text-decoration: none;
  color: white;
  font-weight: bold;
  justify-content:center;
  align-items:center;
  font-size: 25px;
  display: flex;
  gap: 10px;
  flex-direction: row;

  }
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: blue;
    border-radius: 13px;;
    padding: 5px 10px;
  }
  /* & svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.3s;
  } */

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color:red;
  }
`;

export default function Navigate() {
  return (
    <Navigatebar>
      <Nav>
        <Li>
          <StyleNavLink to="/">
            <HiHomeModern />
            <span>Homepage</span>
          </StyleNavLink>
        </Li>
        <Li>
          <StyleNavLink to="/contact">
            <HiMiniDevicePhoneMobile />
            <span>Contact</span>
          </StyleNavLink>
        </Li>
        <Li>
          <StyleNavLink to="/login">
            <HiMiniKey />
            <span>Login</span>
          </StyleNavLink>
        </Li>
      </Nav>
    </Navigatebar>
  );
}
