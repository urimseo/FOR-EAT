import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  min-width: 32vh;
`

const CardItem = styled.div`
  width: 17rem;
  height: 23rem;
  margin: 2rem 0 3rem 0;
  border: 1px solid #C4C4C4;
  padding: 0.3rem;
`

const Img = styled.img`
  width: 100%;
  height: 70%;
`

const TextContainer = styled.div`
  padding: 0.1rem 0.3rem;
  .title {
    font-family: Playfair Display;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 0.5rem;
    width: 100%;
    height: 2.8rem;
    line-height: 1.3rem;
    overflow: hidden;
    text-overflow:ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .category {
    font-size: 0.87rem;
    margin: 0.7rem 0 0.5rem 0;
  }
  .Calorie {
    font-size: 0.87rem;
    font-weight: 300;
  }
`

// const BorderLine = styled.div`
//   width: 100%;
//   margin: 1rem 0;
//   border-bottom: 1px solid black;
// `

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

// const Line = styled.div`
//   height: 25.7rem;
//   border-right: 1px solid black;
//   margin: 2rem 1rem 0 1rem;
// `


const Card = ({ recipeImg, recipeName, recipeCalorie, recipeSeq, recipeKeywords }) => {
  return (
    <>
      <Container>
        <Link to={`/recipes/${recipeSeq}`} style={{color: 'black', textDecoration : "none"}}>
          <CardItem>
            <Img src={recipeImg} />
            <TextContainer>
              <div className='title'>{recipeName}</div>
              <div className='category'>
                {recipeKeywords.map((recipeKeyword, index) =>(index === 1 ? ', ' : '') + recipeKeyword)}
              </div>
              <SpaceBetweenContainer>
                <div className='Calorie'>{Math.round(recipeCalorie)} Kcal</div>
                <div>★★★★★</div>
              </SpaceBetweenContainer>
            </TextContainer>
          </CardItem>
        </Link>
        {/* { (index+1)%4 === 0 ? null : <Line /> } */}
      </Container>
    </>
  );
};


Card.propTypes = {
  recipeImg: PropTypes.string.isRequired,
  recipeName: PropTypes.string.isRequired,
  recipeCalorie: PropTypes.number.isRequired,
  recipeSeq: PropTypes.number.isRequired,
  recipeKeywords: PropTypes.array.isRequired,
};


export default Card