import React, { useState } from "react";
import styled from "styled-components";

import Classes from "../Classes/Classes";
import Form from "../Modals/Form";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [allClasses, setAllClasses] = useState([]);

  const handleOpenCreateClass = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Wrapper>
      <Classes allClasses={allClasses} setAllClasses={setAllClasses} />
      <Form
        allClasses={allClasses}
        setAllClasses={setAllClasses}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <FormButton onClick={handleOpenCreateClass}>+</FormButton>
    </Wrapper>
  );
};

const FormButton = styled.button`
  color: white;
  font-size: 40px;
  border-radius: 50px;
  position: absolute;
  padding-left: 12px;
  padding-right: 12px;
  bottom: 50px;
  right: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  background: var(--navbar-bg-color);
  transition: 0.1s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.7;
    transform: scale(0.8);
  }
`;

const Wrapper = styled.div``;

export default Homepage;
