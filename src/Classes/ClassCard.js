import React from "react";
import styled from "styled-components";
import moment from "moment";

import { MdTimer, MdPeople } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import avatarSrc from "../assets/ProfileImage.jpg";

//This is all easthetic to display the booked classes
const ClassCard = ({ savedClass }) => {
  const {
    classCreator,
    classDescription,
    className,
    date,
    duration,
    registered,
    _id,
  } = savedClass;
  return (
    <Wrapper key={_id}>
      Your Next Class
      <CreatorWrapper>
        <AvatarWrapper>
          <CreatorAvatar src={avatarSrc} />
        </AvatarWrapper>
        <Info>
          <Title>{className}</Title>
          with: <CreatorName>{classCreator.handle}</CreatorName>
          <div>{moment(date).calendar()}</div>
        </Info>
      </CreatorWrapper>
      <MiddleWrapper>
        <MiddleDiv>
          <MdTimer style={{ marginBottom: "-6px" }} size={25} /> {duration}{" "}
          Minutes
        </MiddleDiv>
        <MiddleDiv>
          <MdPeople style={{ marginBottom: "-6px" }} size={25} /> {registered}{" "}
          People Registered
        </MiddleDiv>
      </MiddleWrapper>
      <Description>{classDescription}</Description>
      <SignUpButton>
        Start Class <BsArrowRight style={{ marginBottom: "-2px" }} />{" "}
      </SignUpButton>
    </Wrapper>
  );
};

const SignUpButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: underline;
  color: var(--accent-color);
  background: transparent;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

const Description = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  padding-right: 0;
  font-size: 17px;
  color: gray;
  width: 400px;
`;

const Wrapper = styled.div`
  border: 1px solid var(--accent-color);
  padding: 15px;
  margin-right: 20px;
  margin-bottom: 20px;
  font-size: 23px;
  position: relative;
`;

const CreatorWrapper = styled.div`
  display: flex;
  margin: 20px;
  font-size: 17px;
`;
const Info = styled.div`
  margin-left: 30px;
`;

const MiddleWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  color: var(--accent-color);
`;

const MiddleDiv = styled.div`
  font-size: 15px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
`;
const CreatorName = styled.span`
  color: var(--accent-color);
  text-decoration: underline;
`;

const CreatorAvatar = styled.img`
  height: 100%;
  width: auto;
`;
const AvatarWrapper = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100px;
  height: 100px;
`;

export default ClassCard;
