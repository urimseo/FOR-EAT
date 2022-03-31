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
import { getUserInfo, submitSurvey } from 'api/SurveyApi';
import { Alert } from "components/commons/Alert";
import logo from "assets/img/logo.png"


const Container = styled.div`
  min-height: 100vh;
`

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0 0.5rem 0;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-family: ${(props) => (props.ff ? props.ff : "work sans")};
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
  const[allergyItem, setAllergyItem] = useState([])

  const[form, setForm] = useState(
    {
        age : null,
        gender : null,
        liked_ingredient : [],
        allergy : [],
        carbohydrate : 0,
        protein : 0,
        fat : 0,
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
    const allergyInformation = [1, 2, 3, 4, 5, 6, 7];
    const ingredientInformation = ["beef", "chicken", "pork", "seafood", "rice", "noodle", "cheese", "potato", "tomato", "mushroom"]
    const value = Info[0];
    const info = Info[1];

    if (value === 'age' || value === 'carbohydrate' || value === 'protein' || value === 'fat') {
      setForm({
        ...form,
        [value] : Number(info)
      })
    } 
    else if (value === true || value === false) {
      for (let index = 0; index < allergyInformation.length; index++) {
        const element = allergyInformation[index];
        if (element === info) {
          if (value === false) {
            setAllergyItem(allergyItem => [...allergyItem, info]);
          } else {
            setAllergyItem(allergyItem.filter(item => item !== info));
          }
        } else {
          continue;
        }
      }
      for (let index = 0; index < ingredientInformation.length; index++) {
        const element = ingredientInformation[index];
        if (element === info) {
          if (value === false) {
            setIngredient(ingredient => [...ingredient, info]);
          } else {
            setIngredient(ingredient.filter(item => item !== info));
          }
        } else {
          continue;
        }
      }
    }
    else if (value === 'interest') {
      form.sugar = false;
      form.sodium = false;
      form.cholesterol = false;
    }
    else if (value === 'noInterest') {
      form.beginner = false;
      form.recipe_challenger = false;
      form.timesaver = false;
      form.healthy_diet = false;
      form.lose_weight = false;
    }
    else if (value === 'relevant') {
      setAllergyItem([]);
      form.allergy = null;
      // form.allergy = allergyItem;
    }
    else {
      setForm({
          ...form,
          [value] : info
      })
    }
  }

  useEffect(() => { 
    setIngredient(ingredient) 
    setAllergyItem(allergyItem)
  }, [])

  form.liked_ingredient = ingredient
  form.allergy = allergyItem

  const getUserSurveyInfo = async (UserInfo) => {
    const response = await getUserInfo(UserInfo);
      if (response.isSurvey === true) {
        // navigate('/recommend')
      } 
  }
  useEffect(() => {
    if (UserInfo) {
      getUserSurveyInfo(UserInfo);
    }
  }, []);

  const nextSteps =()=>{
    if (step === 1) {
      if (form.age === null || form.gender === null) {
        Alert("✅ Select all options.");
      } else {
        setStep(step + 1);
      }
    }
    if (step === 5) {
      if (form.liked_ingredient.length === 0) {
        Alert("✅ Select one option or multiple options.")
      } else {
        setStep(step + 1);
      }
    }
    if (step === 2 || step === 3 || step === 4) {
      setStep(step+1);
    }
  } 
  const prevSteps =()=>{
    setStep(step - 1)
  }

  const clickSubmit = async () => {
    if (form.beginner === null && form.recipe_challenger === null && form.timesaver === null && form.healthy_diet === null && form.lose_weight === null) {
        Alert("✅ Select an ingredient.")
    } else {
      const response = await submitSurvey(UserInfo, form);
      if (response.status === 201) {
        navigate('/recommend')
      }
    }
  }

  return (
    <>
      <Container>
        <ImgContainer>
          <img src={logo} alt="logo" />
        </ImgContainer>
        <Title ff="Playfair Display" fs="2rem" fw="300">FOR:EAT</Title>
        <Title fs="1.5rem" fw="200" mt="1rem" mb="3rem">PERSONALIZE YOUR EXPERIENCE</Title>
        { step === 1 ? <InformationSurvey propFunction={getInformation} nextSteps={nextSteps} /> : null}
        { step === 2 ? <NutritionSurvey propFunction={getInformation} prevSteps={prevSteps} nextSteps={nextSteps} />: null}
        { step === 3 ? <DietaryRestriction propFunction={getInformation} prevSteps={prevSteps} nextSteps={nextSteps} /> : null}
        { step === 4 ? <AllergySurvey propFunction={getInformation} prevSteps={prevSteps} nextSteps={nextSteps} /> : null}
        { step === 5 ? <LikeIngredient propFunction={getInformation} prevSteps={prevSteps} nextSteps={nextSteps} /> : null}
        { step === 6 ? <GoalSurvey propFunction={getInformation} prevSteps={prevSteps} clickSubmit={clickSubmit} /> : null}
      </Container>
    </>
  )
}

export default Survey;