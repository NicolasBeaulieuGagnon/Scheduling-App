import React from "react";
import styled from "styled-components";

const MainButton = ({ iconLeft, selected, onClick, title, details }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <ButtonWrapper selected={selected} onClick={handleClick}>
      {iconLeft}
      <Info>
        <Title>{title}</Title>
        <Details>{details}</Details>
      </Info>
    </ButtonWrapper>
  );
};

const Title = styled.div`
  font-size: 18px;
  color: black;
  margin-bottom: 5px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 25px;
`;

const Details = styled.div``;

const ButtonWrapper = styled.button`
  margin-bottom: 20px;
  background: ${(props) => {
    return props.selected ? "rgb(0,0,0,0.1)" : "white";
  }};
  display: flex;
  outline: none;
  padding: 15px 25px;
  border-radius: 2px;
  border: 1px solid var(--accent-color);
  cursor: pointer;
  transition: 0.1s ease-in-out;
  color: gray;
  opacity: ${(props) => {
    return props.selected ? 1 : 0.5;
  }};
  &:hover {
    opacity: 0.7;
  }
  &:active {
    color: black;
    transform: scale(0.9);
  }
`;

export default MainButton;
