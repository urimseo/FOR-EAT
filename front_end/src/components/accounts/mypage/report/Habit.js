import React, { useState } from "react";
import styled from "styled-components";
import icon_high from "assets/img/icon_high.png";
import icon_average from "assets/img/icon_average.png";
import icon_low from "assets/img/icon_low.png";

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

const Habit = () => {
  const [ habit, setHabit ] = useState("1");

  return (
    <Container>
      <TextContainer>
        <div className="title">My Eating Habits?</div>
      </TextContainer>
      <ImgWrapper>
        <Img src={ habit === "1" ? icon_high : habit === "2" ? icon_average : icon_low } />
      </ImgWrapper>
    </Container>
  )
}

export default Habit;