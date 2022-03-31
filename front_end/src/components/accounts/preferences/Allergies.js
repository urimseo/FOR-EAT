import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Plus from "assets/img/Plus.png"
import Rosemary from "assets/img/Ingredient_rosemary.jpg"
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

const Allergie = styled.div`
`

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;


const Allergies = ({ on, setWidgetId, surveyList }) => {
    return (
      <Allergie>
        <SubTheme>
          <SubTitle>Allergies</SubTitle>
          <Sub>Click ‘Allergies’ and Select from the allergies below.</Sub>
        </SubTheme>

        <Item>
          <ImageContainer>
            <Image src={Rosemary}/>
            <ImageSub>VEGETARIAN</ImageSub>
          </ImageContainer>
            
          <ImageContainer>
            <PLUS
              onClick={() => {
                if (setWidgetId) setWidgetId("M03");
              }}
            >
              <Image src={Plus}/>
              <ImageSub>ADD Infos</ImageSub>
            </PLUS>
          </ImageContainer>
        </Item>
      </Allergie>
          
      );
    }
  
  export default Allergies;
  