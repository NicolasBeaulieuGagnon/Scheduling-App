import React from "react";
import styled from "styled-components";
import {
  RiDropFill,
  RiCheckboxBlankCircleFill,
  RiLayoutMasonryFill,
  RiBarChartBoxLine,
  RiSettings3Line,
  RiQuestionLine,
} from "react-icons/ri";

import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

// we navigate through the Navbar by using Link imported from react-router-dom
const NavBar = () => {
  return (
    <Wrapper>
      <TopWrapper>
        <Logo>
          <RiDropFill size="16" />
          <RiCheckboxBlankCircleFill style={{ marginTop: "3px" }} size="20" />
          <Circle />
        </Logo>
        <Border />
        <StyledLink to="/">
          <OptionWrapper>
            <RiLayoutMasonryFill />
          </OptionWrapper>
        </StyledLink>

        <StyledLink to="/analytics">
          <OptionWrapper>
            <RiBarChartBoxLine />
          </OptionWrapper>
        </StyledLink>
      </TopWrapper>

      <BottomWrapper>
        <StyledLink to="/profile">
          <OptionWrapper>
            <RiSettings3Line />
          </OptionWrapper>
        </StyledLink>

        <StyledLink to="/faq">
          <OptionWrapper>
            <RiQuestionLine />
          </OptionWrapper>
        </StyledLink>
        <Border />
        <SignOutWrapper>
          <FaSignOutAlt />
        </SignOutWrapper>
      </BottomWrapper>
    </Wrapper>
  );
};

const TopWrapper = styled.div``;

const BottomWrapper = styled.div``;

const OptionWrapper = styled.div`
  font-size: 25px;
  text-align: center;
  margin-top: 10px;
  width: 80%;
  margin-left: 10%;
  padding-top: 15px;
  padding-bottom: 10px;
  border-radius: 50px;
  background: var(--navbar-option-color);
`;

const SignOutWrapper = styled(OptionWrapper)`
  background: transparent;
`;

const StyledLink = styled(Link)`
  font-style: none;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 10px;
  position: absolute;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 98vh;
  overflow: hidden;

  width: 70px;
  color: var(--navbar-color);
  background: var(--navbar-bg-color);
`;

const Circle = styled.div`
  border: 2px solid white;
  width: 35%;
  border-radius: 50%;
  height: 7px;
  margin-bottom: 10px;
  margin-top: 5px;
`;

const Border = styled.div`
  width: 70%;
  margin-left: 15%;
  height: 1px;
  margin-bottom: 10px;
  margin-top: 10px;
  background: rgb(255, 255, 255, 0.3);
`;

export default NavBar;
