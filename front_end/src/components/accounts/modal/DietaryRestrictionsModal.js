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

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 3rem;
  margin-left: auto;
`;

const DietaryRestrictionsModal = ({
  on,
  layoutId,
  setWidgetId,
  SurveyList,
}) => {
  const [cholesterolShow, setCholesterolShow] = useState();
  const [sodiumShow, setSodiumShow] = useState();
  const [sugerShow, setSugerShow] = useState();
  const [interestShow, setInterestShow] = useState();

  useEffect(() => {}, []);

  const onClick = (event) => {
    event.stopPropagation();
  };

  const onButton = () => {
    setWidgetId(null);
  };

  const onCholesterol = () => {
    setCholesterolShow(!cholesterolShow);
    setInterestShow(false);
  };

  const onSodium = () => {
    setSodiumShow(!sodiumShow);
    setInterestShow(false);
  };

  const onSuger = () => {
    setSugerShow(!sugerShow);
    setInterestShow(false);
  };

  const onInterest = () => {
    setInterestShow(true);
    setCholesterolShow(false);
    setSodiumShow(false);
    setSugerShow(false);
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
      <Title fs="1.2rem" fw="200" mb="1rem">
        Check your dietary restriction.
      </Title>
      <BoxContainer>
        <div style={{ width: "26rem" }}>
          <SpaceBetweenContainer>
            <Button2
              bc={cholesterolShow ? on : ""}
              onClick={onCholesterol}
              name="Low cholesterol"
            />
            <Button2
              bc={sodiumShow ? on : ""}
              onClick={onSodium}
              name="Low sodium"
            />
          </SpaceBetweenContainer>
          <SpaceBetweenContainer>
            <Button2
              bc={sugerShow ? on : ""}
              onClick={onSuger}
              name="Low sugar"
            />

            <Button2
              bc={interestShow ? on : ""}
              onClick={onInterest}
              name="No interest"
            />
          </SpaceBetweenContainer>
        </div>
      </BoxContainer>

      <ButtonContainer>
        <Button name="Check" onClick={onButton} />

        <Button
          name="Cancel"
          bc="#C4C4C4"
          hoverColor="#a2a2a2"
          ml="3rem"
          onClick={onButton}
        />
      </ButtonContainer>
    </Container>
  );
};

export default DietaryRestrictionsModal;