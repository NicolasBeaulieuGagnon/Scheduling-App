import React from "react";
import styled from "styled-components";

const DropDown = ({ openDropDown, setOpenDropDown, SetFormInfo, formInfo }) => {
  const handleRepeatChoice = (ev) => {
    ev.preventDefault();
    setOpenDropDown(!openDropDown);
    const repeatChoice = document.getElementById(`repeatChoiceDiv`);
    repeatChoice.innerText = ev.target.innerText;
  };

  return (
    <DropDownList id="repeatListId">
      <Button>
        <DropDownItem onClick={handleRepeatChoice}>Yes</DropDownItem>
      </Button>
      <Button>
        <DropDownItem onClick={handleRepeatChoice}>No</DropDownItem>
      </Button>
    </DropDownList>
  );
};

const DropDownList = styled.ul`
  position: absolute;
  top: 636px;
  width: 200px;
  background: white;
  box-shadow: 0 10px 20px 1px rgb(0, 0, 0, 0.2);
  margin: 5px 0 20px;
  padding: 0;
  overflow: hidden;
  border: none;
  list-style-type: none;
  border-radius: 2px;
  transition: 0.1s ease-in-out;
  height: 0px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  outline: none;
  border: none;
  background: white;
  cursor: pointer;
`;

const DropDownItem = styled.li`
  font-size: 20px;
`;

export default DropDown;
