import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "components/commons/Button";
import Button2 from "components/commons/Button2";
import { editSurvey } from "api/MyPageApi";

const Container = styled(motion.div)`
  box-sizing: border-box;
  width: 700px;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 3rem;
  letter-spacing: -1px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${(props) => (props.fs ? props.fs : "3rem")};
  font-weight: ${(props) => (props.fw ? props.fw : "300")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
`;

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ButtonContainers = styled.div`
  display: flex;
  justify-content: center;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const SelectContent = styled.select`
  width: 20rem;
  height: 2rem;
  font-size: 1rem;
  font-family: Work Sans;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 3rem;
`;

const InfosModal = ({ setFlag, on, UserInfo, layoutId, setWidgetId, surveyList }) => {
  const [womanShow, setWomanShow] = useState();
  const [manShow, setManShow] = useState();
  const [age, setAge] = useState();

  useEffect(() => {
    setWomanShow(surveyList.gender)
    setManShow(!surveyList.gender)
    setAge(surveyList.age)
  }, []);

  const onClick = (event) => {
    event.stopPropagation();
  };

  const onCheck = async () => {
    const formData = new FormData();
    formData.append("gender", womanShow);
    formData.append("age", age);
    for (let key of formData.keys()) { console.log(key, ":", formData.get(key)); }
    editSurvey(UserInfo, formData)
    setWomanShow(surveyList.gender)
    setManShow(!surveyList.gender)
    setAge(surveyList.age)
    setWidgetId(null);
    setFlag(true)
  };

  const onClose = () => {
    setWidgetId(null);
  };

  const onChange = (e) => {
    setAge(e.target.value)
  }

  const onWoman = () => {
    setWomanShow(true);
    setManShow(false);
  };

  const onMan = () => {
    setWomanShow(false);
    setManShow(true);
  };

  return (
    <Container
      onClick={onClick}
      layout
      layoutId={layoutId}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Title fs="2.5rem" fw="300" mt="2rem" mb="1rem">
        Select your information
      </Title>
      <Title fs="1.2rem" fw="200" mb="2rem">
        Check your gender and age.
      </Title>
      <ButtonContainers>
        <div style={{ width: "26rem" }}>
          <SpaceBetweenContainer>
            <Button2 bc={manShow ? on : ""} mt="0px" mr="0px" onClick={onMan} name="Man" />
            <Button2 bc={womanShow ? on : ""} mt="0px" mr="0px" onClick={onWoman} name="Woman" />
          </SpaceBetweenContainer>
        </div>
      </ButtonContainers>
      <SelectContainer>
        <Title mt="0.5rem" fs="1rem" mr="0.5rem">
          AGE
        </Title>
        <SelectContent defaultValue={surveyList.age} onChange={onChange}>
          <option value="1">15-19 years old</option>
          <option value="2">20-29 years old</option>
          <option value="3">30-49 years old</option>
          <option value="4">50-64 years old</option>
          <option value="5">65-74 years old</option>
          <option value="6">75 years of age or older</option>
        </SelectContent>
      </SelectContainer>
      <ButtonContainer>
        <Button name="Check" onClick={onCheck} />

        <Button
          name="Cancel"
          bc="#C4C4C4"
          hoverColor="#a2a2a2"
          ml="3rem"
          onClick={onClose}
        />
      </ButtonContainer>
    </Container>
  );
};

export default InfosModal;
