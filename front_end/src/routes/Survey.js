import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import InformationSurvey from 'components/accounts/survey/InformationSurvey';
import NutritionSurvey from 'components/accounts/survey/NutritionSurvey';
import DietaryRestriction from 'components/accounts/survey/DietaryRestriction';
import AllergySurvey from 'components/accounts/survey/AllergySurvey';
import LikeIngredient from 'components/accounts/survey/LikeIngredient';
import GoalSurvey from 'components/accounts/survey/GoalSurvey';
import { userInfoState } from 'atoms/atoms';
import { getUserInfo } from 'api/SurveyApi';


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
  const navigate = useNavigate();
  const[step, setStep] = useState(1)
  const[ingredient, setIngredient] = useState([])

  const[form, setForm] = useState(
    {
        age : '',
        gender : '',
        liked_ingredient : [],
        allergy : [],
        carbohydrate : '',
        protein : '',
        fat : '',
        cholesterol : false,
        sodium :false,
        sugar : false,
        beginner : false,
        recipe_challenger : false,
        timesaver : false,
        healthy_diet : false,
        lose_weight : false,
    }
  )

  const { age, gender, liked_ingredient, allergy, carbohydrate, protein, fat, cholesterol, sodium, sugar, beginner, recipe_challenger, timesaver, healthy_diet, lose_weight } = form
  
  const getInformation = (Info)=>{
    const value = Info[0]
    const info = Info[1]

    console.log(value, info)

    if (value === 'age' || value === 'carbohydrate' || value === 'protein' || value === 'fat') {
      setForm({
        ...form,
        [value] : Number(info)
      })
    } 
    if (value === 'interest') {
      setForm({
        ...form,
        sugar : false,
      })
      console.log(form)
    }
    if (value === true || value === false) {
      if (value === false) {
        setIngredient(ingredient => [...ingredient, info]);
      } else {
        setIngredient(ingredient.filter(item => item !== info));
      }
      setForm({
        ...form,
        liked_ingredient : ingredient
      })
    }
    else {
      setForm({
          ...form,
          [value] : info
      })
    }
  }


  const getUserSurveyInfo = async (UserInfo) => {
    const response = await getUserInfo(UserInfo);
      if (response.isSurvey === true) {
        navigate('/recommend')
      } 
  }
  useEffect(() => {
    if (UserInfo) {
      getUserSurveyInfo(UserInfo);
    }
  }, []);

  const nextSteps =()=>{
    setStep(step + 1)
  } 
  const prevSteps =()=>{
    setStep(step - 1)
  }

  return (
    <>
      <Container>
        <Title fs="2rem" fw="200" mt="3rem" mb="3rem">PERSONALIZE YOUR EXPERIENCE</Title>
        { step === 1 ? <InformationSurvey propFunction={getInformation} nextSteps={nextSteps} /> : null}
        { step === 2 ? <NutritionSurvey propFunction={getInformation} prevSteps={prevSteps} nextSteps={nextSteps} />: null}
        { step === 3 ? <DietaryRestriction propFunction={getInformation} prevSteps={prevSteps} nextSteps={nextSteps} /> : null}
        { step === 4 ? <AllergySurvey propFunction={getInformation} prevSteps={prevSteps} nextSteps={nextSteps} /> : null}
        { step === 5 ? <LikeIngredient propFunction={getInformation} prevSteps={prevSteps} nextSteps={nextSteps} /> : null}
        { step === 6 ? <GoalSurvey propFunction={getInformation} prevSteps={prevSteps}/> : null}
      </Container>
    </>
  )
}

export default Survey;