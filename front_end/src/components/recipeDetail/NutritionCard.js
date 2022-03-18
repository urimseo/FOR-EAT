import React from 'react';
import styled from "styled-components";


const Container = styled.div`
  height: ${(props) => (props.height ? props.height : "15vh")};
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  algin-items: center;
  padding: 0.5rem;
  .line {
    border: 0;
    width: 5vw;
    height: 0.05rem;
    background: black;
    margin: auto;
  }
  .caloryTitle {
    font-size: 2vh;
    margin: auto;
  }
  .caloryContent {
    font-weight: 500;
    margin: auto;
  }
`

const NutritionCard = (props) => {
  const title = props.title;
  const grams = props.grams;
  const ratio  = props.ratio;
  return (
      <Container {...props}>
        <div className='caloryTitle'>{title}</div>
        <div className='caloryContent'>{grams}{(title ==="CALORIES" ? "Kcal" : "g")}</div>
        <div className='line'></div>
        <div className='caloryContent'>{ratio}%</div>
      </Container>
  );
};


export default NutritionCard;