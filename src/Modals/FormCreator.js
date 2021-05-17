import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Formik, Form } from "formik";

import CreateClassFormStepTwo from "./CreateClassFormStepTwo";
import CreateClassFormStepOne from "./CreateClassFormStepOne";

// first part of the form where we pick everything except the class description and the whiteboard.
const FormCreator = ({ setIsOpen, isOpen, allClasses, setAllClasses }) => {
  const [formStep, setFormStep] = useState("first");
  const [formInfo, setFormInfo] = useState({});
  const [classTypeChoice, setClassTypeChoice] = useState(``);

  useEffect(() => {
    setFormInfo({
      className: "",
      classType: "",
      repeat: false,
      price: "",
      date: "",
      duration: "",
      registered: 0,
      classDescription: "",
      whiteBoard: "",
    });
  }, []);

  const handleClose = (ev) => {
    ev.preventDefault();
    setIsOpen(!isOpen);
    setClassTypeChoice(``);
  };

  return (
    <BackgroundWrapper isOpen={isOpen}>
      {formStep === "first" && (
        <CreateClassFormStepOne
          isOpen={isOpen}
          formInfo={formInfo}
          setFormInfo={setFormInfo}
          setFormStep={setFormStep}
          classTypeChoice={classTypeChoice}
          setClassTypeChoice={setClassTypeChoice}
          formStep={formStep}
          handleClose={handleClose}
        />
      )}

      {formStep === "second" && (
        <CreateClassFormStepTwo
          allClasses={allClasses}
          setAllClasses={setAllClasses}
          formInfo={formInfo}
          setFormInfo={setFormInfo}
          setFormStep={setFormStep}
          formStep={formStep}
          handleClose={handleClose}
        />
      )}
    </BackgroundWrapper>
  );
};

const BackgroundWrapper = styled.div`
  overflow: hidden;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.5);
  transition: 0.2s ease-in-out;
  opacity: ${(props) => {
    return props.isOpen === true ? 1 : 0;
  }};
  visibility: ${(props) => {
    return props.isOpen === true ? "visible" : "hidden";
  }};
`;
export default FormCreator;
