import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
`

const CardItem = styled.div`
  width: 17rem;
  height: 23rem;
  margin: 2rem 0 5rem 0;
`

const Img = styled.img`
  width: 100%;
  height: 70%;
`

const TextContainer = styled.div`
  .title {
    font-family: Playfair Display;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 1rem;
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
    margin: 0.6rem 0;
  }
  .Calorie {
    font-size: 0.87rem;
    font-weight: bold;
  }
`

const BorderLine = styled.div`
  width: 100%;
  margin: 1rem 0;
  border-bottom: 1px solid black;
`

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Line = styled.div`
  height: 25.7rem;
  border-right: 1px solid black;
  margin: 2rem 1rem 0 1rem;
`

const Card = ({ index, recipeImg, recipeName, recipeCalorie, recipeSeq }) => {
  return (
    <>
      <div>
        <Container>
          <Link to={`/recipes/${recipeSeq}`}>
            <CardItem>
              <Img src={recipeImg} />
              <TextContainer>
                <div className='title'>{recipeName}</div>
                <div className='category'>CATEGORY</div>
                <BorderLine />
                <SpaceBetweenContainer>
                  <div className='Calorie'>{recipeCalorie} Kcal</div>
                  <div>★★★★★</div>
                </SpaceBetweenContainer>
                <BorderLine />
              </TextContainer>
            </CardItem>
            { (index+1)%4 === 0 ? null : <Line /> }
          </Link>
        </Container>
      </div>
    </>
  );
};


Card.propTypes = {
  index: PropTypes.number.isRequired,
  recipeImg: PropTypes.string.isRequired,
  recipeName: PropTypes.string.isRequired,
  recipeCalorie: PropTypes.number.isRequired,
};


export default Card