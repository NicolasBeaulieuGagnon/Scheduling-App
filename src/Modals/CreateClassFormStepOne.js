import React, { useEffect, useState } from "react";
import styled from "styled-components";

import MainButton from "../Buttons/MainButton";
import { BsLightningFill, BsFillPeopleFill, BsWifi } from "react-icons/bs";
import DropDown from "../Components/DropDown";
import { BsArrowLeftShort } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";

const CreateClassFormStepOne = ({
  isOpen,
  formStep,
  setFormStep,
  formInfo,
  setFormInfo,
  handleClose,
  classTypeChoice,
  setClassTypeChoice,
}) => {
  const [openDropDown, setOpenDropDown] = useState(false);

  useEffect(() => {
    if (classTypeChoice === ``) {
      document.getElementById("nextStepButton").disabled = true;
    } else {
      document.getElementById("nextStepButton").disabled = false;
    }
  }, [classTypeChoice]);

  useEffect(() => {
    const dropDownList = document.getElementById(`repeatListId`);

    if (dropDownList) {
      if (openDropDown) {
        dropDownList.style.height = `50px`;
        dropDownList.style.border = `1px solid rgb(0, 0, 0, 0.2)`;
      } else {
        dropDownList.style.height = `0px`;
        dropDownList.style.border = `none`;
      }
    }
  }, [openDropDown]);

  const handleOpenDropDown = (ev) => {
    ev.preventDefault();
    setOpenDropDown(!openDropDown);
  };

  const handleNextStep = () => {
    const stepOneForm = document.getElementById("stepOneForm");
    const Repeat = document.getElementById("repeatChoiceDiv");
    let classTypeObj = {};
    let formOneInfo = {};
    let repeatObj = {};

    classTypeObj[`classType`] = classTypeChoice;
    formOneInfo = Object.assign(classTypeObj, formOneInfo);

    if (Repeat.innerText === "Yes") {
      repeatObj[`repeat`] = true;
      formOneInfo = Object.assign(repeatObj, formOneInfo);
    } else {
      repeatObj[`repeat`] = false;
      formOneInfo = Object.assign(repeatObj, formOneInfo);
    }
    for (let i = 0; i < stepOneForm.elements.length; i++) {
      const key = stepOneForm.elements[i].name;
      const value = stepOneForm.elements[i].value;

      let obj = {};

      if (key) {
        obj[key] = value;
      }

      formOneInfo = Object.assign(obj, formOneInfo);
    }

    setFormInfo({ ...formInfo, ...formOneInfo });
    setFormStep("second");
  };

  return (
    <FirstWrapper formStep={formStep} isOpen={isOpen}>
      <BackButton onClick={handleClose}>
        <BsArrowLeftShort
          style={{ marginBottom: "-5px", marginRight: "3px" }}
          size="20"
        />
        Back to Class Management
      </BackButton>
      <Title>Create Detailed Class</Title>
      <InputTitle>Class Type</InputTitle>
      <ButtonsWrapper>
        <MainButton
          selected={classTypeChoice === "virtual"}
          onClick={() => {
            setClassTypeChoice("virtual");
          }}
          title="Virtual Class"
          details="Will be hosted online on ARINA live"
          iconLeft={<BsWifi size="30" />}
        />
        <MainButton
          selected={classTypeChoice === "person"}
          onClick={() => {
            setClassTypeChoice("person");
          }}
          title="In Person Class"
          details="Will be hosted in person"
          iconLeft={<BsLightningFill size="30" />}
        />
        <MainButton
          selected={classTypeChoice === "both"}
          onClick={() => {
            setClassTypeChoice("both");
          }}
          title="Hybrid Class "
          details="Will be hosted both virtually and in person simultaneously"
          iconLeft={<BsFillPeopleFill size="30" />}
        />
      </ButtonsWrapper>
      {classTypeChoice === `` && <BlockedDiv />}
      <FormWrapper id="stepOneForm">
        <StyledLabel htmlFor="className">Class Name</StyledLabel>
        <ClassName name="className" />

        <FourOptionDiv>
          <BlockDiv>
            <StyledLabel htmlFor="date">Start Date & Time</StyledLabel>
            <TextInput name="date" />
            <StyledLabel htmlFor="duration">Duration</StyledLabel>
            <TextInput name="duration" />
          </BlockDiv>

          <BlockDiv>
            <StyledLabel>Repeat</StyledLabel>
            <RepeatChoiceDiv id="repeatChoiceDiv">None</RepeatChoiceDiv>
            <DropDown
              openDropDown={openDropDown}
              setOpenDropDown={setOpenDropDown}
              formInfo={formInfo}
              setFormInfo={setFormInfo}
            />
            <OpenDropDownButton onClick={handleOpenDropDown}>
              <RiArrowDownSLine />
            </OpenDropDownButton>
            <StyledLabel htmlFor="price">Price</StyledLabel>
            <TextInput name="price" />
          </BlockDiv>
        </FourOptionDiv>
      </FormWrapper>
      <NextStepButton
        classTypeChoice={classTypeChoice}
        onClick={handleNextStep}
        id="nextStepButton"
      >
        Next Step
      </NextStepButton>
    </FirstWrapper>
  );
};

const ClassName = styled.input`
  height: 30px;
  border: 1px solid rgb(0, 0, 0, 0.2);
  margin: 5px 0 20px;
  outline: none;
  border-radius: 2px;

  &:focus {
    border: 1px solid rgb(0, 0, 0, 0.6);
  }
`;

const BlockedDiv = styled.div`
  background: rgb(255, 255, 255, 0.7);
  position: absolute;
  width: 500px;
  height: 300px;
  z-index: 20;
`;

const NextStepButton = styled.button`
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

const ButtonsWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const BlockDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const FourOptionDiv = styled.div`
  display: flex;
  align-items: flex-start;
`;

const BackButton = styled.button`
  padding: 0;
  margin-bottom: 25px;
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  color: var(--accent-color);
`;
const Title = styled.div`
  font-size: 25px;
  margin-bottom: 50px;
`;
const StyledLabel = styled.label`
  margin-top: 30px;
  font-size: 12px;
  color: rgb(89, 89, 89);
`;
const InputTitle = styled.div`
  font-size: 13px;
  color: rgb(89, 89, 89);
`;

const OpenDropDownButton = styled.button`
  position: absolute;
  right: 25px;
  top: 619px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const RepeatChoiceDiv = styled.div`
  position: relative;
  margin: 5px 0 20px;
  border-radius: 2px;
  border: 1px solid rgb(0, 0, 0, 0.2);
  padding: 7px;
`;

const TextInput = styled(ClassName)`
  width: 233px;
`;

const FirstWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  padding: 20px;
  width: ${(props) => {
    return props.isOpen === true ? "500px" : "200px";
  }};
  height: 100%;
  background: white;
  opacity: ${(props) => {
    return props.formStep === "first" ? 1 : 0;
  }};
`;

export default CreateClassFormStepOne;
