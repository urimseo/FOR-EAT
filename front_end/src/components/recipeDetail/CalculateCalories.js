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
        <div className="text">
        To Burn {Math.round(calories)} Calories<br />{randomItem[0]} {Math.round(calories/(randomItem[1]*weight))} Minutes
        </div>
      </ExerciseContainer>
    )
}

export default CalculateCalories;