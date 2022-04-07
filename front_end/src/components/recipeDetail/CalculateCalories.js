import styled from "styled-components";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const ExerciseContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7rem auto;
  * {
    display: flex;
    margin-right: 1rem;
    text-align: center;
    font-size: 4rem;
    font-weight: 100;
    font-style: italic;
  }
`

const CenterContainer =styled.div`
  display: flex;
  justify-content: center;
`

const CalculateCalories = ({ calories }) => {
  const exercises =  [
    ["Running", 0.133],
    ["Swimming", 0.133],
    ["Walking", 0.126],
    ["Cycling", 0.153],
    ["Hiking", 0.1],
    ["Tennis", 0.126]
  ]
  const weight = 60
  const chooseRandom = (a) => {
    return a[Math.floor(Math.random()*a.length)];
  }
  const randomItem = chooseRandom(exercises)
    return (
      <ExerciseContainer>
        <CenterContainer>
          <div className="text">To Burn</div>
          <AnimationOnScroll animateIn="animate__tada">{Math.round(calories)}</AnimationOnScroll>
          <div className="text">Calories</div>
        </CenterContainer>
        <CenterContainer>
          <AnimationOnScroll animateIn="animate__tada">{randomItem[0]} </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__tada">{Math.round(calories/(randomItem[1]*weight))}</AnimationOnScroll>
          <div className="text">Minutes</div>
        </CenterContainer>
      </ExerciseContainer>
    )
}

export default CalculateCalories;