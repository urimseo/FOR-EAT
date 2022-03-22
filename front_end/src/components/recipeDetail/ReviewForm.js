import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Rating from '@mui/material/Rating';

import ReviewCard from "components/recipeDetail/ReviewCard"
import profileImg from "assets/img/Ingredient_rosemary.jpg";

const Container = styled.div`

`

const TextContainer = styled.div`
  display: block;
  justify-items: start;
  .text {
    display: flex;
    text-align: left;
    font-family: Playfair Display;
    font-size: 2.5rem;
    font-weight: 600;
  }
  .line {
    margin: 0.5rem 0 1rem 0;
    width: 6%;
    border-bottom: 1px solid black;
  }
`
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Form = styled.form`
  display: flex;
  margin: 1rem 0 4rem 0;
  padding: 1.5rem;
  width: 60rem;
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


const InputTitle = styled.input`
  width: 52rem;
  height: 1.5rem;
  margin-top: 0.5rem;
  border: 1px solid white;
  padding-left: 0.6rem;
  ::placeholder {
    color: #969696;
    font-size: 0.7rem;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 1px 0 #969696;
  }
`

const InputContent = styled.textarea`
  width: 52rem;
  height: 4rem;
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

const Button = styled.button`
  width: 6.7rem;
  height: 2.3rem;
  border: 1px solid white;
  border-radius: 3rem;
  box-shadow: 0 0 1px 1px #969696;
  background-color: white;
  margin-left: 1rem;
  &:hover {
    border: 1px solid black;
    background-color: black;
    color: white;
    cursor: pointer;
  }
`

const ReviewForm = () => {
  const { value, setValue } = useForm();
  
  return (
    <>
      <Container>
        <TextContainer>
          <div className="text">Reviews</div>
          <div className="line"/>
        </TextContainer>
        <FormContainer>
          <Form>
            <ImgWrapper>
              <Img src={profileImg} alt="" />
            </ImgWrapper>
            <div>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <InputTitle placeholder="REVIEW TITLE" />
              <InputContent placeholder="WRITE YOUR REVIEW HERE" />
              <ButtonContainer>
                <Button>UPLOAD</Button>
                <Button>SAVE</Button>
              </ButtonContainer>
            </div>
          </Form>
        </FormContainer>
        <ReviewCard />
        <ReviewCard />
      </Container>
    </>
  );
};

export default ReviewForm;