import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getSearchList } from "api/SearchApi";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 1rem 0;
`

const CardItem = styled.div`
  width: 4rem;
  height: 4rem;
  padding: 0 0.5rem;
  margin: 1rem;
`

const ImgWrapper = styled.div`
  width: 4rem;
  overflow: hidden;
  background-position: center;
  &:hover {
    transform:scale(1.1);
    -webkit-transform:scale(1.1);
    -moz-transform:scale(1.1);
  }
`

const Img = styled.img`
  border-radius: 5rem;
  height: 4rem;
  width: 4rem;
  cursor: pointer;
`

const TextContainer = styled.div`
  text-align: center;
  .title {
    font-size: 1rem;
    font-weight: 400;
    margin-top: 0.3rem;
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


const CircleCard = ({ name, img }) => {

  const navigate = useNavigate();

  const onClickSearch = async (e) => {
    const response = await getSearchList(1, name)
    if (response) {
      // 검색 결과 페이지로 이동. 데이터랑 같이 보내줌.
      navigate('/recipes/search', { state: [name, response] })
    }
  }

  return (
      <Container>
        <CardItem onClick={onClickSearch}>
          <ImgWrapper>
            <Img src={img} />
            {/* <Img src={Ingredient_cucumber} /> */}
          </ImgWrapper>
          <TextContainer>
            <div className='title'>{name}</div>
          </TextContainer>
        </CardItem>
      </Container>
  );
};

export default CircleCard;