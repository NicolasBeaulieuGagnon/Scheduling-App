import React from "react";
import styled from "styled-components";

const UserAccount = () => {
  return <Wrapper>USER'S ACCOUNT</Wrapper>;
};

const Wrapper = styled.div`
  position: absolute;
  font-size: 3em;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export default UserAccount;
