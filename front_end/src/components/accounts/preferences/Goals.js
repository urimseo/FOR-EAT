import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Plus from "assets/img/Plus.png"
import Button2 from "components/commons/Button2";

const SubTheme = styled.div`
  margin-top: 3rem;
`

const SubTitle = styled.div`
  font-size: 25px;
`

const Sub = styled.div`
  font-size: 15px;
  color: #8C8B8B;
  margin-top: 1rem;
`

const Item = styled.div`
  display: flex;
  flex-direction: row;
`

const PLUS = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  border-radius: 4rem;
  height: 8rem;
  width: 8rem;
  cursor: pointer;
`;

const ImageSub = styled.div`
  font-size: 15px;
  margin-top: 1rem;
  font-weight: bold;

`;

const Goal = styled.div`
`

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
  const [newCuisinShow, setNewCuisinShow] = useState(surveyList.recipe_challenger);
  const [saveTimeShow, setSaveTimeShow] = useState(surveyList.timesaver);
  const [healthyShow, setHealthyShow] = useState(surveyList.healthy_diet);
  const [dietShow, setDietShow] = useState(surveyList.lose_weight);
  const [interestShow, setInterestShow] = useState();

  useEffect(() => {
    setBeginnerShow(surveyList.beginner)
    setNewCuisinShow(surveyList.recipe_challenger)
    setSaveTimeShow(surveyList.timesaver)
    setHealthyShow(surveyList.healthy_diet)
    setDietShow(surveyList.lose_weight)
    if (surveyList.beginner === false && surveyList.recipe_challenger === false && surveyList.timesaver === false &&
      surveyList.healthy_diet === false && surveyList.lose_weight === false) {setInterestShow(true)}
      else{setInterestShow(false)}
  }, [surveyList]);

    return (
      <Goal>
        <SubTheme>
          <SubTitle>Goals</SubTitle>
          <Sub>Click ‘ADD GOALS’ and Select your goals.</Sub>
        </SubTheme>

        <Item>
          <BoxContainer>
        <div style={{ width: "40rem" }}>
          <SpaceBetweenContainer>
            <Button2
              bc={beginnerShow ? on : ""}
              name="Beginner cook"
            />

            <Button2
              bc={newCuisinShow ? on : ""}
              name="Try new cuisin"
            />
          </SpaceBetweenContainer>
          <SpaceBetweenContainer>
            <Button2
              bc={saveTimeShow ? on : ""}
              name="Save time"
            />

            <Button2
              bc={healthyShow ? on : ""}
              name="Eat healty"
            />
          </SpaceBetweenContainer>
          <SpaceBetweenContainer>
            <Button2 bc={dietShow ? on : ""} name="Try diet" />

            <Button2
              bc={interestShow ? on : ""}
              name="No interest"
            />
            <PLUS
              onClick={() => {
                if (setWidgetId) setWidgetId("M04");
              }}
            >
              <Image src={Plus}/>
              <ImageSub>ADD Infos</ImageSub>
            </PLUS>
          </SpaceBetweenContainer>
        </div>
      </BoxContainer>
        </Item>
      </Goal>
          
      );
    }
  
  export default Goals;
  