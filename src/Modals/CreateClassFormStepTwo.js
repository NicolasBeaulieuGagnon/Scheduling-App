import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { BsArrowLeftShort } from "react-icons/bs";

const CreateClassFormStepTwo = ({
  formStep,
  setFormStep,
  formInfo,
  setFormInfo,
  handleClose,
  allClasses,
  setAllClasses,
}) => {
  const [createdClass, setCreatedClass] = useState(false);

  useEffect(() => {
    if (createdClass) {
      setAllClasses([...allClasses, formInfo]);
      console.log(formInfo);
    }
  }, [createdClass]);

  const handleGoBackStepOne = () => {
    setFormStep("first");
  };

  const handleCreateClass = () => {
    const secondForm = document.getElementById("secondFormId");
    let formTwoInfo = {};
    let creatorObj = {};
    const ClassCreator = {
      id: "723801",
      handle: "Kelly Green",
      avatar: "/assets/ProfileImage.jpg",
    };
    creatorObj["classCreator"] = ClassCreator;

    formTwoInfo = Object.assign(creatorObj, formTwoInfo);

    for (let i = 0; i < secondForm.elements.length; i++) {
      const key = secondForm.elements[i].name;
      const value = secondForm.elements[i].value;

      let obj = {};

      if (key) {
        obj[key] = value;
      }
      formTwoInfo = Object.assign(obj, formTwoInfo);
    }
    setCreatedClass(!createdClass);
    setFormInfo({ ...formInfo, ...formTwoInfo });
    setTimeout(() => {
      setFormStep(`first`);
      handleClose();
    });
  };

  return (
    <Wrapper formStep={formStep}>
      <ReturnButton onClick={handleGoBackStepOne}>
        <BsArrowLeftShort
          style={{ marginBottom: "-5px", marginRight: "3px" }}
          size="20"
        />
        Back to Step 1
      </ReturnButton>
      <Title>Create Detailed Class</Title>
      <Form id="secondFormId">
        <StyledLabel htmlFor="classDescription">Class Description</StyledLabel>
        <TextInput name="classDescription" />
        <StyledLabel htmlFor="whiteBoard">Whiteboard</StyledLabel>
        <TextInput name="whiteBoard" />
      </Form>
      <ConfirmButton onClick={handleCreateClass}>Create Class</ConfirmButton>
    </Wrapper>
  );
};

const Form = styled.form``;

const Title = styled.div`
  font-size: 25px;
  margin-bottom: 50px;
`;

const ConfirmButton = styled.button`
  position: absolute;
  bottom: 70px;
  right: 20px;
  outline: none;
  border: none;
  color: white;
  background: ${(props) => {
    return props.classTypeChoice === `` ? `rgb(0,0,0,0.5)` : "black";
  }};
  padding: 17px 95px;
  font-size: 11px;
  cursor: ${(props) => {
    return props.classTypeChoice === `` ? "default" : "pointer";
  }};
`;

const ReturnButton = styled.button`
  padding: 0;
  margin-bottom: 25px;
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  color: var(--accent-color);
`;

const TextInput = styled.textarea`
  resize: none;
  height: 90px;
  border: 1px solid rgb(0, 0, 0, 0.2);
  margin: 5px 0 20px;
  outline: none;
  border-radius: 2px;
  width: 100%;

  &:focus {
    border: 1px solid rgb(0, 0, 0, 0.6);
  }
`;

const StyledLabel = styled.label`
  margin-top: 30px;
  font-size: 12px;
  color: rgb(89, 89, 89);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  opacity: ${(props) => {
    return props.formStep === "first" ? 0 : 1;
  }};
  position: absolute;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  padding: 20px;
  width: 500px;
  height: 100%;
  background: white;
  align-items: flex-start;
`;
export default CreateClassFormStepTwo;
