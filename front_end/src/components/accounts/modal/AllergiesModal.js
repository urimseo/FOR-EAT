import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "components/commons/Button";
import Button2 from "components/commons/Button2";

import egg from "assets/img/IngredientItem/egg.PNG";
import wheat from "assets/img/IngredientItem/flour.jpg";
import shellfish from "assets/img/IngredientItem/seafood.PNG";
import apple from "assets/img/IngredientItem/apple.PNG";
import walnut from "assets/img/IngredientItem/walnut.jpg";
import peanut from "assets/img/IngredientItem/peanut.jpg";
import sesame from "assets/img/IngredientItem/sesame.jpg";

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

const ButtonContainers = styled.div`
  display: flex;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 3rem;
  margin-left: auto;
`;

const AllergiesModal = ({ layoutId, setWidgetId }) => {
  const onClick = (event) => {
    event.stopPropagation();
  };

  const onButton = () => {
    setWidgetId(null);
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
            <Button2
              name="Wheat"
            />
            <Button2
              name="Peanut"
            />
          </SpaceBetweenContainer>
          <SpaceBetweenContainer>
            <Button2
              name="walnut"
            />
            <Button2
              name="Apple"
            />
          </SpaceBetweenContainer>
          <SpaceBetweenContainer>
            <Button2
              name="Sesame"
            />
            <Button2
              name="Shellfish"
            />
          </SpaceBetweenContainer>
          <SpaceBetweenContainer>
            <Button2
              name="Egg"
            />
            <Button2
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
