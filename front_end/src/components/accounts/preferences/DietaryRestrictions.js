import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Plus from "assets/img/Plus.png";

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
  cursor: pointer;
  width: 8.5rem;
  height: 8.5rem;
  background-color: white;
  margin-top: 1rem;
`;

const Selected = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 5px solid #c4c4c4;
  border-radius: 5rem;
  transition: 0.2s;
  width: 8.5rem;
  height: 8.5rem;
  background-color: white;
  margin-top: 1rem;
  margin-right: 3rem;
  font-family: "Work Sans";
  font-size: 0.9rem;
  font-weight: 500;
  cursor: "default";
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

const DislikedIngredient = styled.div``;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DietaryRestrictions = ({ setWidgetId, surveyList }) => {
  const [cholesterolShow, setCholesterolShow] = useState(
    surveyList.cholesterol
  );
  const [sodiumShow, setSodiumShow] = useState(surveyList.sodium);
  const [sugarShow, setsugarShow] = useState(surveyList.sugar);
  const [interestShow, setInterestShow] = useState();

  useEffect(() => {
    setCholesterolShow(surveyList.cholesterol);
    setSodiumShow(surveyList.sodium);
    setsugarShow(surveyList.sugar);
    if (
      surveyList.cholesterol === false &&
      surveyList.sodium === false &&
      surveyList.sugar === false
    ) {
      setInterestShow(true);
    } else {
      setInterestShow(false);
    }
  }, [surveyList]);

  return (
    <DislikedIngredient>
      <SubTheme>
        <SubTitle>Dietary Restrictions</SubTitle>
        <Sub>
          Click ‘Edit Dietary Restrictions’ and Select from the dietary restrictions below.
        </Sub>
      </SubTheme>

      <Item>
        <BoxContainer>
          <SpaceBetweenContainer>
            {cholesterolShow ? (
              <Selected cursor="default">Low cholesterol</Selected>
            ) : (
              ""
            )}
            {sodiumShow ? <Selected cursor="default">Low sodium</Selected> : ""}
            {sugarShow ? <Selected cursor="default">Low sugar</Selected> : ""}
            {interestShow ? (
              <Selected cursor="default">No interest</Selected>
            ) : (
              ""
            )}
            <PLUS
              onClick={() => {
                if (setWidgetId) setWidgetId("M02");
              }}
            >
              <Image src={Plus} />
              <ImageSub>Edit Dietary Restrictions</ImageSub>
            </PLUS>
          </SpaceBetweenContainer>
        </BoxContainer>
      </Item>
    </DislikedIngredient>
  );
};

export default DietaryRestrictions;
