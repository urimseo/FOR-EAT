import React, { useState, useRef } from "react";
import styled from "styled-components";
import Rating from '@mui/material/Rating';

import profileImg from "assets/img/Ingredient_rosemary.jpg";
import { createReview } from "api/RecipeDetailApi";

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Form = styled.form`
  display: flex;
  margin: 1rem 5rem 4rem 5rem;
  padding: 2rem;
  width: 58rem;
  height: 11rem;
  border: 1px solid #000;
`

const ImgWrapper = styled.div`
  width: 21%;
  overflow: hidden;
  background-position: center;
`

const Img = styled.img`
  border-radius: 4rem;
  height: 5rem;
  width: 5rem;
`

const InputContent = styled.textarea`
  width: 50rem;
  height: 5rem;
  margin-top: 0.5rem;
  font-family: Work Sans;
  font-size: 1rem;
  padding: 0.5rem 0 0 0.6rem;
  border: none;
  ::placeholder {
    font-family: Work Sans;
    font-size: 1rem;
    color: #969696;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 1px 0 #969696;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`

const InputButton = styled.input`
  width: 6.7rem;
  height: 2.3rem;
  border: 1px solid white;
  border-radius: 3rem;
  box-shadow: 0 0 1px 1px #969696;
  background-color: white;
  margin: 0.7rem 0 0 1rem;
  &:hover {
    border: 1px solid black;
    background-color: black;
    color: white;
    cursor: pointer;
  }
`

const Button = styled.div`
  width: 6.7rem;
  height: 2.3rem;
  border: 1px solid white;
  border-radius: 3rem;
  box-shadow: 0 0 1px 1px #969696;
  background-color: white;
  margin: 0.7rem 0 0 1rem;
  &:hover {
    border: 1px solid black;
    background-color: black;
    color: white;
    cursor: pointer;
  }
`



const ReviewForm = ({ recipeId }) => {
  const [ ratings, setRatings ] = useState();
  const [ content, setContent ] = useState();
  const [ image_url, setImageUrl] = useState();
  
  const onFileUpload = (event) => { 
    // 파일 이미지 크기 제한해야됨?!
    const file = event.target.files[0]
    // console.log(file)
    setImageUrl(file);
  };
  
  const onClickSave = async (event) => {
    event.preventDefault();
    console.log(content)
    const formData = new FormData();
    formData.append("image", image_url);
    formData.append("content", content);
    formData.append("ratings", ratings);

    for (let key of formData.keys()) { console.log(key, ":", formData.get(key)); }
    const response = await createReview(recipeId, formData)
    console.log(response)
    
  }

  return (
    <Container>
      <Form>
        <ImgWrapper>
          <Img src={profileImg} alt="" />
        </ImgWrapper>
        <div style={{padding: "0.5rem 1rem"}}>
          <Rating
            name="simple-controlled"
            value={ratings}
            onChange={(event, newRatings) => {
              setRatings(newRatings);
            }}
          />
          <InputContent placeholder="WRITE YOUR REVIEW HERE"
            value={content} 
            onChange={
              // (e)=> setContent(e.target.value)
              (e) => console.log(e.target.value)
            }/>
          <ButtonContainer>
            <input 
              type="file"
              id="file" 
              onChange={onFileUpload}
              multiple="multiple"
            />
            <button onClick={onClickSave}>저장</button>
          </ButtonContainer>
        </div>
      </Form>
    </Container>
  );
};

export default ReviewForm;
