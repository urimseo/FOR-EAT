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
  .Title {
    font-size: 2vh;
    margin: auto;
  }
  .TitleSmall {
    font-size: 1.5vh;
    margin: auto;
  }
  .Content {
    font-weight: 500;
    margin: auto;
  }
`  

const NutritionCard = ( props ) => {
  const title = props.title;
  const grams = props.grams;
  const ratio = props.ratio;
  return (
      <Container {...props}>
        <div className={( title === "CHOLESTEROL" ? "TitleSmall" : "Title")}>{title}</div>
        <div className='Content'>{grams}{(title ==="CALORIES" ? "Kcal" : title === "SODIUM"? "mg" : title === "CHOLE STEROL" ? "mg" : "g")}</div>
        <div className='line'></div>
        <div className='Content'>{ratio}%</div>
      </Container>
  );
};


export default NutritionCard;