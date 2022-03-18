import React from 'react';
import styled from "styled-components";
import Ingredient_cucumber from "assets/img/Ingredient_cucumber.jpg";

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  margin: 1px 0 1rem 0;
`

const CardItem = styled.div`
  width: 20rem;
  height: 24.5rem;
  padding: 0 2rem;
`

const ImgWrapper = styled.div`
  overflow: hidden;
  height: 20rem;
  width: 20rem;
`

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const TextContainer = styled.div`
  .title {
    font-family: Playfair Display;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 0.5rem;
  }
  .category {
    font-size: 0.87rem;
    margin: 1rem 0 0 0;
  }
  .line {
    margin: 0.5rem 0;
    width: 15%;
    border-bottom: 1px solid black;
  }
`

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`

const Arrow = () => {
  return (
<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
  )
}


const Card2 = () => {
  return (
    <>
      <div>
        <Container>
          <CardItem>
            <ImgWrapper>
              <Img src={Ingredient_cucumber} />
            </ImgWrapper>
            <TextContainer>
              <SpaceBetweenContainer>
                <div className='title'>Recipe Name</div>
                <Arrow />
              </SpaceBetweenContainer>
              <div className="line" />
              <div className='category'>CATEGORY</div>
            </TextContainer>
          </CardItem>
        </Container>
      </div>
    </>
  );
};

export default Card2