import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useRecoilValue } from 'recoil';
import InformationSurvey from 'components/accounts/survey/InformationSurvey';
import NutritionSurvey from 'components/accounts/survey/NutritionSurvey';
import DietaryRestriction from 'components/accounts/survey/DietaryRestriction';
import GoalSurvey from 'components/accounts/survey/GoalSurvey';
import AllergySurvey from 'components/accounts/survey/AllergySurvey';
import LikeIngredient from 'components/accounts/survey/LikeIngredient';
import { userInfoState } from 'atoms/atoms';


const Container = styled.div`
  min-height: 100vh;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${(props) => (props.fs ? props.fs : "3rem")};
  font-weight: ${(props) => (props.fw ? props.fw : "300")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
`



const Survey = () => {
  const UserInfo = useRecoilValue(userInfoState);

  // useEffect(() => {
  //   if (UserInfo)
  // }, []);

  return (
    <>
      <Container>
        <Title fs="2rem" fw="200" mt="3rem" mb="3rem">PERSONALIZE YOUR EXPERIENCE</Title>
        <InformationSurvey />
        <NutritionSurvey />
        <DietaryRestriction />
        <AllergySurvey />
        <LikeIngredient />
        <GoalSurvey />
      </Container>
    </>
  )
}

export default Survey;