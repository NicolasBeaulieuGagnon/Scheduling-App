import React, { useEffect } from "react";
import styled from "styled-components";

import ClassCard from "./ClassCard";
import ClassObjectDemo from "../assets/ClassObjectDemo.json";

//added a demo json object for display purposes
const Classes = ({ allClasses, setAllClasses }) => {
  useEffect(() => {
    setAllClasses(ClassObjectDemo);
  }, []);

  //mapping through all the created classes and sending each to ClassCard.js
  return (
    <Wrapper>
      {allClasses.length > 0 &&
        allClasses.map((savedClass, index) => {
          return (
            <ClassCard
              key={savedClass.className}
              index={index}
              savedClass={savedClass}
            />
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 140px;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
`;

export default Classes;
