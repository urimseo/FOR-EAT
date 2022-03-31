import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useRecoilValue } from 'recoil';
import { userInfoState } from 'atoms/atoms';
import { getSurvey } from "api/MyPageApi";

import InfosModal from "../modal/InfosModal";
import AllergiesModal from "../modal/AllergiesModal";
import DietaryRestrictionsModal from "../modal/DietaryRestrictionsModal";
import GoalsModal from "../modal/GoalsModal";

import Infos from "../preferences/Infos";
import Allergies from "../preferences/Allergies";
import DietaryRestrictions from "../preferences/DietaryRestrictions";
import Goals from "../preferences/Goals";

const Container = styled.div`
`

const Title = styled.div`
  font-family: Playfair Display;
  font-size: 32px;
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
  const [flag, setFlag] = useState();
  const [surveyList, setSurveyList] = useState();
  
  const UserInfo = useRecoilValue(userInfoState);

  useEffect(() => {
    getSurvey(UserInfo).then((res) => {console.log(res); setSurveyList(res)})
    setFlag(false)
  },[flag])
  console.log(surveyList)

  const on = "#a2a2a2"

  const widgets = ["M01", "M02", "M03", "M04"];

  const wid = {
    M01: <Infos key={widgets[0]} surveyList={surveyList} UserInfo={UserInfo} setWidgetId={setWidgetId} />,
    M02: (
      <DietaryRestrictions key={widgets[1]} surveyList={surveyList} UserInfo={UserInfo} setWidgetId={setWidgetId}/>
    ),
    M03: <Allergies key={widgets[2]} surveyList={surveyList} UserInfo={UserInfo} setWidgetId={setWidgetId} />,
    M04: <Goals key={widgets[3]} surveyList={surveyList} UserInfo={UserInfo} setWidgetId={setWidgetId} />,
  };

  const mod = {
    M01: <InfosModal flag={flag} setFlag={setFlag} surveyList={surveyList} on={on} UserInfo={UserInfo} layoutId={widgetId} setWidgetId={setWidgetId} />,
    M02: <DietaryRestrictionsModal flag={flag} setFlag={setFlag} surveyList={surveyList} on={on} UserInfo={UserInfo} layoutId={widgetId} setWidgetId={setWidgetId} />,
    M03: <AllergiesModal flag={flag} setFlag={setFlag} surveyList={surveyList} on={on} UserInfo={UserInfo} layoutId={widgetId} setWidgetId={setWidgetId} />,
    M04: <GoalsModal flag={flag} setFlag={setFlag} surveyList={surveyList} on={on} UserInfo={UserInfo} layoutId={widgetId} setWidgetId={setWidgetId} />,
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
