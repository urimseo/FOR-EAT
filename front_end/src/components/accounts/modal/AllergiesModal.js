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

const AllergiesModal = ({ on, layoutId, setWidgetId, SurveyList }) => {
  const [wheatShow, setWheatShow] = useState();
  const [peanutShow, setPeanutShow] = useState();
  const [walnutShow, setWalnutShow] = useState();
  const [appleShow, setAppleShow] = useState();
  const [sesameShow, setSesameShow] = useState();
  const [shellfishShow, setShellfishShow] = useState();
  const [eggShow, setEggShow] = useState();
  const [interestShow, setInterestShow] = useState();

  useEffect(() => {}, []);

  const onClick = (event) => {
    event.stopPropagation();
  };

  const onButton = () => {
    setWidgetId(null);
  };

  const onWheat = () => {
    setWheatShow(!wheatShow);
    setInterestShow(false);
  };

  const onPeanut = () => {
    setPeanutShow(!peanutShow);
    setInterestShow(false);
  };

  const onWalnut = () => {
    setWalnutShow(!walnutShow);
    setInterestShow(false);
  };

  const onApple = () => {
    setAppleShow(!appleShow);
    setInterestShow(false);
  };

  const onSesame = () => {
    setSesameShow(!sesameShow);
    setInterestShow(false);
  };

  const onShellfish = () => {
    setShellfishShow(!shellfishShow);
    setInterestShow(false);
  };

  const onEgg = () => {
    setEggShow(!eggShow);
    setInterestShow(false);
  };

  const onInterest = () => {
    setInterestShow(true);
    setWheatShow(false);
    setPeanutShow(false);
    setWalnutShow(false);
    setAppleShow(false);
    setSesameShow(false);
    setShellfishShow(false);
    setEggShow(false);
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
        Check your allergy information.
      </Title>
      <BoxContainer>
        <div style={{ width: "26rem" }}>
          <SpaceBetweenContainer>
            <Button2 bc={wheatShow ? on : ""} onClick={onWheat} name="Wheat" />
            <Button2
              bc={peanutShow ? on : ""}
              onClick={onPeanut}
              name="Peanut"
            />
          </SpaceBetweenContainer>
          <SpaceBetweenContainer>
            <Button2
              bc={walnutShow ? on : ""}
              onClick={onWalnut}
              name="walnut"
            />
            <Button2 bc={appleShow ? on : ""} onClick={onApple} name="Apple" />
          </SpaceBetweenContainer>
          <SpaceBetweenContainer>
            <Button2
              bc={sesameShow ? on : ""}
              onClick={onSesame}
              name="Sesame"
            />
            <Button2
              bc={shellfishShow ? on : ""}
              onClick={onShellfish}
              name="Shellfish"
            />
          </SpaceBetweenContainer>
          <SpaceBetweenContainer>
            <Button2 bc={eggShow ? on : ""} onClick={onEgg} name="Egg" />
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

export default AllergiesModal;