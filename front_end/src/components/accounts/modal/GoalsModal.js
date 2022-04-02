import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "components/commons/Button";
import Button2 from "components/commons/Button2";
import { editSurvey } from "api/MyPageApi";
import { Alert } from "components/commons/Alert";

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
`;

const GoalsModal = ({ setFlag, on, UserInfo, layoutId, setWidgetId, surveyList }) => {
  const [beginnerShow, setBeginnerShow] = useState();
  const [newCuisinShow, setNewCuisinShow] = useState();
  const [saveTimeShow, setSaveTimeShow] = useState();
  const [healthyShow, setHealthyShow] = useState();
  const [dietShow, setDietShow] = useState();
  const [interestShow, setInterestShow] = useState();

  useEffect(() => {
    setBeginnerShow(surveyList.beginner)
    setNewCuisinShow(surveyList.recipe_challenger)
    setSaveTimeShow(surveyList.timesaver)
    setHealthyShow(surveyList.healthy_diet)
    setDietShow(surveyList.lose_weight)
    if (surveyList.beginner === false && surveyList.recipe_challenger === false && surveyList.timesaver === false &&
      surveyList.healthy_diet === false && surveyList.lose_weight === false) {setInterestShow(true)}
  }, []);

  const onClick = (event) => {
    event.stopPropagation();
  };

  const onCheck = async () => {
    if(beginnerShow === false && newCuisinShow === false && saveTimeShow === false &&
      healthyShow === false && dietShow === false &&interestShow === false) Alert("🧡 Please Check your diet goal.")
    else{
    const formData = new FormData();
    formData.append("beginner", beginnerShow);
    formData.append("recipe_challenger", newCuisinShow);
    formData.append("timesaver", saveTimeShow);
    formData.append("healthy_diet", healthyShow);
    formData.append("lose_weight", dietShow);
    for (let key of formData.keys()) { console.log(key, ":", formData.get(key)); }
    editSurvey(UserInfo, formData)
    setBeginnerShow(surveyList.beginner)
    setNewCuisinShow(surveyList.recipe_challenger)
    setSaveTimeShow(surveyList.timesaver)
    setHealthyShow(surveyList.healthy_diet)
    setDietShow(surveyList.lose_weight)
    setWidgetId(null);
    setFlag(true)
    }
  };

  const onClose = () => {
    setWidgetId(null);
  };

  const onBeginner = () => {
    setBeginnerShow(!beginnerShow);
    setInterestShow(false);
  };

  const onNewCuisin = () => {
    setNewCuisinShow(!newCuisinShow);
    setInterestShow(false);
  };

  const onSaveTime = () => {
    setSaveTimeShow(!saveTimeShow);
    setInterestShow(false);
  };

  const onHealthy = () => {
    setHealthyShow(!healthyShow);
    setInterestShow(false);
  };

  const onDiet = () => {
    setDietShow(!dietShow);
    setInterestShow(false);
  };

  const onInterest = () => {
    setInterestShow(true);
    setBeginnerShow(false);
    setNewCuisinShow(false);
    setSaveTimeShow(false);
    setHealthyShow(false);
    setDietShow(false);
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
        Check your diet goal.
      </Title>
      <BoxContainer>
        <div style={{ width: "26rem" }}>
          <SpaceBetweenContainer>
            <Button2
              bc={beginnerShow ? on : ""}
              mr="0px" 
              onClick={onBeginner}
              name="Beginner cook"
            />

            <Button2
              bc={newCuisinShow ? on : ""}
              mr="0px" 
              onClick={onNewCuisin}
              name="Try new cuisin"
            />
          </SpaceBetweenContainer>
          <SpaceBetweenContainer>
            <Button2
              bc={saveTimeShow ? on : ""}
              mr="0px" 
              onClick={onSaveTime}
              name="Save time"
            />

            <Button2
              bc={healthyShow ? on : ""}
              mr="0px" 
              onClick={onHealthy}
              name="Eat healty"
            />
          </SpaceBetweenContainer>
          <SpaceBetweenContainer>
            <Button2 bc={dietShow ? on : ""} mr="0px" onClick={onDiet} name="Try diet" />

            <Button2
              bc={interestShow ? on : ""}
              mr="0px" 
              onClick={onInterest}
              name="No interest"
            />
          </SpaceBetweenContainer>
        </div>
      </BoxContainer>

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

export default GoalsModal;