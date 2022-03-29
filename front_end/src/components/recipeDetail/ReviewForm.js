import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Rating from '@mui/material/Rating';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userInfoState, reviewDataState } from 'atoms/atoms';
import { getMember } from "api/MyPageApi";
import { getReviewList } from "api/RecipeDetailApi";
import { createReview } from "api/ReviewApi";
import ReviewCard from "components/recipeDetail/ReviewCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Form = styled.form`
  display: flex;
  margin: 1rem 5rem 2rem 5rem;
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
  padding: 0.5rem 0 0.5rem 0.3rem;
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
  label {
    border: 1px solid black;
    border-radius: 3rem;
    background-color: white;
    padding: 0.5rem 0.9rem;
    margin: 0.7rem 0 0 1rem;
    font-size: 0.85rem;
    &:hover {
      border: 1px solid black;
      background-color: black;
      color: white;
      cursor: pointer;
    }
  }
`
const FileLabel = styled.div`
  align-self: center;
  margin: 0.5rem 0 0 0;
  font-size: 0.8rem;
`

const Button = styled.button`
  border: 1px solid black;
  border-radius: 3rem;
  background-color: white;
  padding: 0.5rem 0.9rem;
  margin: 0.7rem 0 0 1rem;
  font-size: 0.8rem;
  &:hover {
    border: 1px solid black;
    background-color: black;
    color: white;
    cursor: pointer;
  }
`

  
const CardContainer = styled.div`

`


const ReviewForm = ({ recipeId }) => {
  const UserInfo = useRecoilValue(userInfoState);
  const [ profileImage, setProfileImage] = useState();
  const [ ratings, setRatings ] = useState();
  const [ content, setContent ] = useState();
  const [ image_url, setImageUrl] = useState();
  const [ fileName, setFileName ] = useState();
  const [ reviews, setReviews] = useState([]); 
  const [ reviewData, setReviewData ] = useRecoilState(reviewDataState)
  
  console.log(555, reviewData.id)

  useEffect(() => {

    getMember(UserInfo)
    .then((res) => {
      console.log(res)
      setProfileImage(res.profile_image_url)
     })
    .catch((err) => 
      console.log(err)
      )

    getReviewList(recipeId).then((res) => {
      setReviews(res.data)
      console.log("ReviewList", res.data)
    })
    .catch((err) => {
      console.log(err)
    })

  },[]);

  const onFileUpload = (event) => { 
    // 파일 이미지 크기 제한해야됨?!
    const file = event.target.files[0]
    setImageUrl(file);
    setFileName(file.name)
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
    if (response) {
      const result = await getReviewList(recipeId)
      setReviews(result.data)
    }
  }

  return (
    <Container>
      <Form enctype="multipart/form-data">
        <ImgWrapper>
          <Img src={profileImage} alt="" />
        </ImgWrapper>
        <div style={{padding: "0.5rem 0"}}>
          <Rating
            name="simple-controlled"
            value={reviewData.ratings}
            onChange={(e, newRatings) => 
              setReviewData((oldData) => [
                ...oldData, {
                  ratings: newRatings
                }
              ])
            }
          />
          <InputContent placeholder="WRITE YOUR REVIEW HERE"
            value={reviewData.content}
            maxLength="1000"
            onChange={
              (e, newContent)=> setReviewData((oldData) => [
                ...oldData,{
                  content: newContent
                }
              ])
            }/>
          <ButtonContainer>
          <FileLabel>{ fileName }</FileLabel>
          <label htmlFor="input-file">
            UPLOAD
          </label>
            <input 
              type="file"
              id="input-file" 
              onChange={onFileUpload}
              multiple="multiple"
              accept="image/jpg, image/png, image/jpeg"
              style={{display: "none"}}
            />
            <Button onClick={onClickSave}>SAVE</Button>
          </ButtonContainer>
        </div>
      </Form>
      <CardContainer>
        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap" }}>
            { reviews.map((review) => ( 
              <ReviewCard
                key={review.id}
                {...review}
              />
            ))}
          </div>
      </CardContainer>
    </Container>
  );
};

export default ReviewForm;
