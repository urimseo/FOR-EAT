import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Plus from "assets/img/Plus.png";
import Button2 from "components/commons/Button2";

const SubTheme = styled.div`
  margin-top: 3rem;
`;

const SubTitle = styled.div`
  font-size: 25px;
`;

const Sub = styled.div`
  font-size: 15px;
  color: #8c8b8b;
  margin-top: 1rem;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
`;

const PLUS = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid #c4c4c4;
  border-radius: 5rem;
  transition: 0.2s;
  cursor: default;
  width: 8.5rem;
  height: 8.5rem;
  background-color: white;
  margin-top: 1rem;
`;

const Image = styled.img`
  border-radius: 4rem;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
`;

const ImageSub = styled.div`
  display: grid;
  grid-template-columns: min-content;
  text-align: center;
  font-family: "Work Sans";
  font-weight: 500;
  font-size: 0.9rem;
  margin-top: 1rem;
`;

const Goal = styled.div`
  margin-bottom: 5rem;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Goals = ({ on, setWidgetId, surveyList }) => {
  const [beginnerShow, setBeginnerShow] = useState(surveyList.beginner);
  const [newCuisinShow, setNewCuisinShow] = useState(
    surveyList.recipe_challenger
  );
  const [saveTimeShow, setSaveTimeShow] = useState(surveyList.timesaver);
  const [healthyShow, setHealthyShow] = useState(surveyList.healthy_diet);
  const [dietShow, setDietShow] = useState(surveyList.lose_weight);
  const [interestShow, setInterestShow] = useState();

  useEffect(() => {
    setBeginnerShow(surveyList.beginner);
    setNewCuisinShow(surveyList.recipe_challenger);
    setSaveTimeShow(surveyList.timesaver);
    setHealthyShow(surveyList.healthy_diet);
    setDietShow(surveyList.lose_weight);
    if (
      surveyList.beginner === false &&
      surveyList.recipe_challenger === false &&
      surveyList.timesaver === false &&
      surveyList.healthy_diet === false &&
      surveyList.lose_weight === false
    ) {
      setInterestShow(true);
    } else {
      setInterestShow(false);
    }
  }, [surveyList]);

  return (
    <Goal>
      <SubTheme>
        <SubTitle>Goals</SubTitle>
        <Sub>Click ‘Edit Goals’ and Select from the goals below.</Sub>
      </SubTheme>

      <Item>
        <BoxContainer>
          <SpaceBetweenContainer>
            {beginnerShow ? (
              <Button2 cursor="default" name="Beginner cook" />
            ) : (
              ""
            )}
            {newCuisinShow ? (
              <Button2 cursor="default" name="Try new cuisin" />
            ) : (
              ""
            )}

            {saveTimeShow ? <Button2 cursor="default" name="Save time" /> : ""}
            {healthyShow ? <Button2 cursor="default" name="Eat healty" /> : ""}
            {dietShow ? <Button2 cursor="default" name="Try diet" /> : ""}

            {interestShow ? (
              <Button2 cursor="default" name="No interest" />
            ) : (
              ""
            )}
            <PLUS
              onClick={() => {
                if (setWidgetId) setWidgetId("M04");
              }}
            >
              <Image src={Plus} />
              <ImageSub>Edit Goals</ImageSub>
            </PLUS>
          </SpaceBetweenContainer>
        </BoxContainer>
      </Item>
    </Goal>
  );
};

export default Goals;
