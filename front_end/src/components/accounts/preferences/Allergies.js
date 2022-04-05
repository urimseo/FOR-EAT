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

const Allergie = styled.div``;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Allergies = ({ setWidgetId, surveyList }) => {
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
        <Sub>Click ‘Edit Allergies’ and Select from the allergies below.</Sub>
      </SubTheme>

      <Item>
        <BoxContainer>
          <SpaceBetweenContainer>
            {wheatShow ? <Selected bc="rgba(196, 196, 196, 0.3)" cursor="default">Wheat</Selected> : ""}
            {peanutShow ? <Selected bc="rgba(196, 196, 196, 0.3)" cursor="default">Peanut</Selected> : ""}
            {walnutShow ? <Selected bc="rgba(196, 196, 196, 0.3)" cursor="default">walnut</Selected> : ""}
            {appleShow ? <Selected bc="rgba(196, 196, 196, 0.3)" cursor="default">Apple</Selected> : ""}
            {sesameShow ? <Selected bc="rgba(196, 196, 196, 0.3)" cursor="default">Sesame</Selected> : ""}
            {shellfishShow ? <Selected bc="rgba(196, 196, 196, 0.3)" cursor="default">Shellfish</Selected> : ""}
            {eggShow ? <Selected bc="rgba(196, 196, 196, 0.3)" cursor="default">Egg</Selected> : ""}
            {interestShow ? (
              <Selected cursor="default">No relevant</Selected>
            ) : (
              ""
            )}
            <PLUS
              onClick={() => {
                if (setWidgetId) setWidgetId("M03");
              }}
            >
              <Image src={Plus} />
              <ImageSub>Edit Allergies</ImageSub>
            </PLUS>
          </SpaceBetweenContainer>
        </BoxContainer>
      </Item>
    </Allergie>
  );
};

export default Allergies;