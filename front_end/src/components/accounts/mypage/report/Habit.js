import React, { useEffect, useState } from "react";
import styled from "styled-components";
import icon_good from "assets/img/icon_good.png";
import icon_okay from "assets/img/icon_okay.png";
import icon_bad from "assets/img/icon_bad.png";
import nutrientInfo from "assets/nutrient";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 14rem;
  height: 14rem;
  background-color: #FFFFFF;
  padding: 1.4rem;
  margin: 1rem 2rem 0 0;
  border-radius: 0.5rem;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title { 
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0;
  }
  .content {
    font-size: 1rem;
    font-weight: 300;
    padding: 0.3rem 0;
  }
`

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Img = styled.img`
  width: 44%;
  margin: 1rem 0 2rem 0;
`



const Habit = ({ nutrient, user }) => {
  
  const age = user.age
  const gender = user.gender
  const [ standard, setStandard ] = useState({
    "calories": 900,
    "fat": 33,
    "saturated_fat": 6,
    "cholesterol": 100,
    "sodium": 500,
    "carbohydrate": 77,
    "fiber": 10,
    "sugar": 36,
    "protein": 48
  }) // 초기값 

  const [ habit, setHabit ] = useState("good");
  const [ average, setAverage ] = useState(
    ( parseInt(Ratio(nutrient.calories, standard.calories)) +
      parseInt(Ratio(nutrient.carbohydrate, standard.carbohydrate)) +
      parseInt(Ratio(nutrient.protein, standard.protein)) +
      parseInt(Ratio(nutrient.fat, standard.fat)))/4
  );

  function Ratio(ate, avg) {
    // % = 내가 먹은 값/평균값
    return ((ate/avg)*100).toFixed()
  }
  
  // 연령, 성별 별 standard 설정
  const getNutrientInfo = () => {
    if ( age ) {
      if ( gender ) {
        setStandard(nutrientInfo[age.toString()][1]) // true : 여성
        
      } else {
        setStandard(nutrientInfo[age.toString()][0])  // false : 남성
      }
    }
  }

  const getAverage = () => {
    setAverage(
      (parseInt(Ratio(nutrient.calories, standard.calories)) +
      parseInt(Ratio(nutrient.carbohydrate, standard.carbohydrate)) +
      parseInt(Ratio(nutrient.protein, standard.protein)) +
      parseInt(Ratio(nutrient.fat, standard.fat)))/4  
    )
  }

  const getEmoji = () => {
    if ( 110 > average >=  90) {
      setHabit("good")
    } else if ( 90 > average >= 80 || 120 > average >= 110) {
      setHabit("okay")
    } else if ( average >= 120 || 80 > average ) {
      setHabit("bad")
    } else {
      setHabit("none")
    }
  }
  
  useEffect(() => {
    getNutrientInfo()
  }, [age, gender])

  useEffect(() => {
    getAverage()
  }, [standard])

  useEffect(()=> {
    getEmoji()
  }, [average])

  return (
    <Container>
      <TextContainer>
        <div className="title">My Eating Habits?</div>
        <div className="content" style={ habit==="none" ? null : {display: "none"} } >Not enough data..</div>
      </TextContainer>
      <ImgWrapper>
        <Img src={ habit === "good" ? icon_good : habit === "bad" ? icon_bad : habit === "okay" ? icon_okay : icon_okay} />
      </ImgWrapper>
    </Container>
  )
}

export default Habit;