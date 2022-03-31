import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Plus from "assets/img/Plus.png";
import Rosemary from "assets/img/Ingredient_rosemary.jpg";
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

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem;
`;

const PLUS = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
    console.log(surveyList)

    useEffect(() => {
      if (surveyList){
      setWomanShow(surveyList.gender)
      setManShow(!surveyList.gender)
      setAge(surveyList.age)
      }
    }, []);

  return (
    <Info>
      <SubTheme>
        <SubTitle>Infos</SubTitle>
        <Sub>Click ‘ADD Infos’ and Select from the Infos below.</Sub>
      </SubTheme>

      <Item>
      <ButtonContainers>
        <div style={{ width: "40rem" }}>
          <SpaceBetweenContainer>
            <Button2 bc={manShow ? on : ""} name="Man" />
            <Button2 bc={womanShow ? on : ""} name="Woman" />
            <PLUS
            onClick={() => {
              if (setWidgetId) setWidgetId("M01");
            }}
          >
          <Image src={Plus} />
          <ImageSub>ADD Infos</ImageSub>
        </PLUS>
          </SpaceBetweenContainer>
        </div>
      </ButtonContainers>
      </Item>
    </Info>
  );
};

export default Infos;
