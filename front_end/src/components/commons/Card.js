import React from 'react';
import styled from "styled-components";
import Landing_1 from "assets/img/Landing_1.jpg";


const Container = styled.div`
  display: flex;
  flex-flow: wrap;
`

const CardItem = styled.div`
  width: 22rem;
  height: 31rem;
  margin: 2rem;
`

const Img = styled.img`
  width: 100%;
  height: 70%;
`

const TextContainer = styled.div`
  .title {
    font-family: Playfair Display;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
  }
  .category {
    font-family: Playfair Display;
    font-size: 1.14rem;
    margin: 0.3rem 0;
  }
  .Calorie {
    font-size: 1.14rem;
    font-weight: bold;
  }
`

const BorderLine = styled.div`
  width: 100%;
  margin: 1rem 0;
  border-bottom: 1px solid black;
`

const Line = styled.div`
  height: 30rem;
  border-right: 1px solid black;
  margin: 2rem 0 0 0;
`

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
`


const Card = () => {
  return (
    <>
      <div>
        <Container>
          <CardItem>
            <Img src={Landing_1} />
            <TextContainer>
              <div className='title'>Recipe Name</div>
              <div className='category'>category</div>
              <BorderLine />
              <SpaceBetweenContainer>
                <div className='Calorie'>Calorie</div>
                <div>★★★★★</div>
              </SpaceBetweenContainer>
              <BorderLine />
            </TextContainer>
          </CardItem>
          <Line />
        </Container>
      </div>
    </>
  );
};

export default Card