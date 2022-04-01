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

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ButtonContainers = styled.div`
  display: flex;
  justify-content: center;
`;

const Info = styled.div``;

const Infos = ({ on, setWidgetId, surveyList }) => {
  const [womanShow, setWomanShow] = useState();
  const [manShow, setManShow] = useState();
  const [age, setAge] = useState();

  useEffect(() => {
    setWomanShow(surveyList.gender);
    setManShow(!surveyList.gender);
    setAge(surveyList.age);
  }, [surveyList]);

  const ages = [
    "",
    "15-19 years old",
    "20-29 years old",
    "30-49 years old",
    "50-64 years old",
    "65-74 years old",
    "75 years of age or older",
  ];

  return (
    <Info>
      <SubTheme>
        <SubTitle>Infos</SubTitle>
        <Sub>Click ‘Edit Infos’ and Select from the infos below.</Sub>
      </SubTheme>

      <Item>
        <ButtonContainers>
          <SpaceBetweenContainer>
            {manShow ? <Button2 cursor="default" name="Man" /> : ""}
            {womanShow ? <Button2 cursor="default" name="Woman" /> : ""}
            <Button2 cursor="default" name={ages[age]} />
            <PLUS
              onClick={() => {
                if (setWidgetId) setWidgetId("M01");
              }}
            >
              <Image src={Plus} />
              <ImageSub>Edit Infos</ImageSub>
            </PLUS>
          </SpaceBetweenContainer>
        </ButtonContainers>
      </Item>
    </Info>
  );
};

export default Infos;
