import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  margin: 0 0 1rem 0;
`

const CardItem = styled.div`
  width: 18rem;
  height: 24.5rem;
  padding: 0 1rem;
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
    font-family: Playfair Display;
    font-size: 1.3rem;
    font-weight: bold;
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

const Arrow = () => {
  return (
<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
  )
}


const Card2 = ({ name, images, keywords, recipeSeq }) => {
  return (
    <div>
      <Container>
        <Link to={`/recipes/${recipeSeq}`} style={{color: 'black', textDecoration : "none"}}>
          <CardItem>
            <ImgWrapper>
              <Img src={images} />
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
          </CardItem>
        </Link>
      </Container>
    </div>
  );
};

export default Card2