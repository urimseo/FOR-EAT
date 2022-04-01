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

const Allergie = styled.div``;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Allergies = ({ on, setWidgetId, surveyList }) => {
  const [wheatShow, setWheatShow] = useState();
  const [peanutShow, setPeanutShow] = useState();
  const [walnutShow, setWalnutShow] = useState();
  const [appleShow, setAppleShow] = useState();
  const [sesameShow, setSesameShow] = useState();
  const [shellfishShow, setShellfishShow] = useState();
  const [eggShow, setEggShow] = useState();
  const [interestShow, setInterestShow] = useState();

  useEffect(() => {
    setInterestShow(false);
    setWheatShow(false);
    setPeanutShow(false);
    setWalnutShow(false);
    setAppleShow(false);
    setSesameShow(false);
    setShellfishShow(false);
    setEggShow(false);
      if (surveyList.allergy.length === 0) {
        setInterestShow(true);
      } else {
        surveyList.allergy.map((item) => {
          if (item.allergy_seq === 1) setWheatShow(true);
          if (item.allergy_seq === 2) setPeanutShow(true);
          if (item.allergy_seq === 3) setWalnutShow(true);
          if (item.allergy_seq === 4) setAppleShow(true);
          if (item.allergy_seq === 5) setSesameShow(true);
          if (item.allergy_seq === 6) setShellfishShow(true);
          if (item.allergy_seq === 7) setEggShow(true);
        });
      }
  }, [surveyList]);

  return (
    <Allergie>
      <SubTheme>
        <SubTitle>Allergies</SubTitle>
        <Sub>Click ‘Allergies’ and Select from the allergies below.</Sub>
      </SubTheme>

      <Item>
        <BoxContainer>
          <div style={{ width: "40rem" }}>
            <SpaceBetweenContainer>
              <Button2 bc={wheatShow ? on : ""} name="Wheat" />
              <Button2 bc={peanutShow ? on : ""} name="Peanut" />
            </SpaceBetweenContainer>
            <SpaceBetweenContainer>
              <Button2 bc={walnutShow ? on : ""} name="walnut" />
              <Button2 bc={appleShow ? on : ""} name="Apple" />
            </SpaceBetweenContainer>
            <SpaceBetweenContainer>
              <Button2 bc={sesameShow ? on : ""} name="Sesame" />
              <Button2 bc={shellfishShow ? on : ""} name="Shellfish" />
            </SpaceBetweenContainer>
            <SpaceBetweenContainer>
              <Button2 bc={eggShow ? on : ""} name="Egg" />
              <Button2 bc={interestShow ? on : ""} name="No interest" />
              <PLUS
                onClick={() => {
                  if (setWidgetId) setWidgetId("M03");
                }}
              >
                <Image src={Plus} />
                <ImageSub>ADD Infos</ImageSub>
              </PLUS>
            </SpaceBetweenContainer>
          </div>
        </BoxContainer>
      </Item>
    </Allergie>
  );
};

export default Allergies;