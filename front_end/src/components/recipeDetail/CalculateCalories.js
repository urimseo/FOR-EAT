import styled from "styled-components";

const ExerciseContainer = styled.div`
display: block;
margin: 7rem auto;
.text{
  text-align: center;
  font-size: 4rem;
  font-weight: 100;
  font-style: italic;
}
`
const CalculateCalories = ({ calories }) => {
  const exercise = "Swimming"
  const minutes = 32;
    return (
      <ExerciseContainer>
        <div className="text">
        To Burn {Math.round(calories)} Calories<br />{exercise} {minutes} Minutes
        </div>
      </ExerciseContainer>
    )
}

export default CalculateCalories;