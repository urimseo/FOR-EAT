import React, { useEffect, useState } from "react";
import styled from "styled-components";
import icon_good from "assets/img/icon_good.png";
import icon_okay from "assets/img/icon_okay.png";
import icon_bad from "assets/img/icon_bad.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 14rem;
  height: 13rem;
  background-color: #FFFFFF;
  padding: 1.4rem;
  margin: 1rem 2rem 0 0;
  border-radius: 0.5rem;
`

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  .title { 
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0;
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

const Habit = ({ nutrient }) => {
  const [ habit, setHabit ] = useState();
  const average = 
    (parseInt(Ratio(nutrient.calories, 667)) +
    parseInt(Ratio(nutrient.carbohydrate, 81)) +
    parseInt(Ratio(nutrient.protein, 35)) +
    parseInt(Ratio(nutrient.fat, 18.5)) +
    parseInt(Ratio(nutrient.saturated_fat, 667)) +
    parseInt(Ratio(nutrient.sodium, 667)) +
    parseInt(Ratio(nutrient.cholesterol, 100)) +
    parseInt(Ratio(nutrient.sugar, 16.7)) +
    parseInt(Ratio(nutrient.fiber, 8.3)))/9

  function Ratio(ate, avg) {
    // % = 내가 먹은 값/평균값
    return ((ate/avg)*100).toFixed()
  }
  
  useEffect(()=> {
    if ( 110 > average >=  90) {
      setHabit("good")
    } else if ( 90 > average >= 80 || 120 > average > 100) {
      setHabit("okay")
    } else {
      setHabit("bad")
    }
  })

  return (
    <Container>
      <TextContainer>
        <div className="title">My Eating Habits?</div>
      </TextContainer>
      <ImgWrapper>
        <Img src={ habit === "good" ? icon_good : habit === "bad" ? icon_bad : habit === "okay" ? icon_okay : null} />
      </ImgWrapper>
    </Container>
  )
}

export default Habit;