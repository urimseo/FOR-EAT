import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import DietsModal from "../modal/DietsModal";
import AllergiesModal from "../modal/AllergiesModal";
import DislikedIngredientsModal from "../modal/DislikedIngredientsModal";
import FavoriteCuisinesModal from "../modal/FavoriteCuisinesModal";
import GoalsModal from "../modal/GoalsModal";

import Diets from "../preferences/Diets";
import Allergies from "../preferences/Allergies";
import DislikedIngredients from "../preferences/DislikedIngredients";
import FavoriteCuisines from "../preferences/FavoriteCuisines";
import Goals from "../preferences/Goals";

// import { getSurvey } from "api/MyPageApi";
// import { editSurvey } from "api/MyPageApi";


const Container = styled.div`
`

const Title = styled.div`
  font-family: Playfair Display;
  font-size: 64px;
  margin-top: 3rem;
`

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Overlay = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};


const Preferences = () => {
  const [widgetId, setWidgetId] = useState();


  const widgets = ["M01", "M02", "M03", "M04", "M05"];

  const wid = {
    M01: <Diets  setWidgetId={setWidgetId} />,
    M02: <Allergies setWidgetId={setWidgetId} />,
    M03: (
      <DislikedIngredients setWidgetId={setWidgetId}/>
    ),
    M04: (
      <FavoriteCuisines setWidgetId={setWidgetId} />
    ),
    M05: <Goals setWidgetId={setWidgetId} />,
  };

  const mod = {
    M01: <DietsModal layoutId={widgetId} setWidgetId={setWidgetId} />,
    M02: <AllergiesModal layoutId={widgetId} setWidgetId={setWidgetId} />,
    M03: <DislikedIngredientsModal layoutId={widgetId} setWidgetId={setWidgetId} />,
    M04: <FavoriteCuisinesModal layoutId={widgetId} setWidgetId={setWidgetId} />,
    M05: <GoalsModal layoutId={widgetId} setWidgetId={setWidgetId} />,
  };

  return (
    <>
      <Container>
        <Title>My Preferences</Title>

        <SurveyContainer>
          <Container>
            {widgets.map((widget) => wid[widget])}
          </Container>
      <AnimatePresence>
        {widgetId && (
          <Overlay
            variants={overlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setWidgetId(null)}
          >
            {mod[widgetId]}
          </Overlay>
        )}
      </AnimatePresence>
           
        </SurveyContainer>
      </Container>
    </>
  );
};

export default Preferences;
