import React from 'react';
import styled from "styled-components";


const Container = styled.div`
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  algin-items: center;
  padding: 0.5rem;
  .Warning {
    color: red;
  }
  .Line {
    border: 0;
    width: 5vw;
    height: 0.05rem;
    background: black;
    margin: auto;
  }
  .WarningLine {
    border: 0;
    width: 5vw;
    height: 0.05rem;
    background: red;
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
      <Container {...props} style={(ratio > 120) && (title !== "FIBER") ? { backgroundColor:"#ff000017", borderColor: "red" } : {}}>
        <div 
          className={((ratio > 120) && (title !== "FIBER") ? ("Warning" + " " + "Title"): "Title") + ' ' + (title === "CHOLESTEROL" ? "TitleSmall" : "Title")}
        >{title}
        </div>
        <div 
          className={((ratio > 120) && (title !== "FIBER") ? ("Warning" + " " + "Content") : "Content" )}
        >{grams}{(title === "SODIUM"? "mg" : title === "CHOLESTEROL" ? "mg" : "g")}
        </div>
        <div 
          className={((ratio > 120) && (title !== "FIBER") ? "WarningLine" : "Line" )} />
        <div 
          className={((ratio > 120) && (title !== "FIBER") ? ("Warning" + " " + "Content") : "Content" )}>
          {ratio}%
        </div>
      </Container>
  );
};


export default React.memo(NutritionCard);