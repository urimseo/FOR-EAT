import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import heart from "assets/img/icon_filled_heart.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  margin: 0 0 1rem 0;
`

const CardItem = styled.div`
  width: 18rem;
  height: 24.5rem;
  margin: 0 1rem;
  position: relative;
  opacity: 1;
  display: block;
  transition: .5s ease;
  backface-visibility: hidden;
  object-fit: cover;
  &:hover .image-wrapper{
    background-color: black;
  }
  &:hover .image {
    background-color: black;
    opacity: 0.3;
  }
  &:hover .middle {
    opacity: 1;
  }
`

const ImgWrapper = styled.div`
  overflow: hidden;
  height: 18rem;
  width: 18rem;

`

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const TextContainer = styled.div`
  .title {
    font-family: Work Sans;
    font-size: 1.2rem;
    font-weight: 500;
    max-width: 16rem;
    margin-top: 0.5rem;
    overflow: hidden;
    text-overflow:ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .keywords {
    font-size: 0.87rem;
    margin: 0;
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
  align-items: center;
`

const HoverText = styled.div`
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`
const TextContent = styled.div`
  color: white;
  font-size: 16px;
  font-style: italic;
  padding: 1rem auto;
  img {
    width: 2rem;
    height: auto;
    margin: 0 0 1rem 0;
  }
`

const Arrow = () => {
  return (
  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
  )
}


const Card2 = ({ name, images, keywords, recipe_seq, liked_count }) => {
  
  return (

    <Container >
      <Link to={`/recipes/${recipe_seq}`} style={{color: 'black', textDecoration : "none"}}>
        <CardItem >
          <ImgWrapper className='image-wrapper'>
            <Img src={images} className="image" />
          </ImgWrapper>
          <TextContainer>
            <div style={{minHeight: "3.5rem"}}>
              <div className='title'>{name}</div>
              <div className="line" />
            </div>
            <SpaceBetweenContainer>
            <div className="keywords">{ keywords.length === 0 ? "DELICIOUS" : keywords[0]["keyword_name"] }</div>
            <Arrow />
            </SpaceBetweenContainer>
          </TextContainer>
          <HoverText className="middle">
            <TextContent className="text">
              <img src={heart} alt=""/>
              <div>{liked_count} PEOPLE</div>
              <div>LIKED THIS RECIPE</div>
            </TextContent>
          </HoverText>
        </CardItem>
      </Link>
    </Container>

  );
};

export default Card2