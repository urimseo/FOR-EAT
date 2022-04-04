import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Rating from '@mui/material/Rating';
import { useRecoilValue } from 'recoil';
import { userInfoState } from 'atoms/atoms';
import { getMember } from "api/MyPageApi";
import { getReviewList } from "api/RecipeDetailApi";
import { createReview } from "api/ReviewApi";
import ReviewCard from "components/recipeDetail/ReviewCard"
import { Alert } from "components/commons/Alert";


const Container = styled.div`
  display: flex;
  flex-direction: column;
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

  
  const onFileUpload = (event) => { 
    const file = event.target.files[0]
    if (file.size > 1048576) {
      event.preventDefault();
      Alert("❌ File Size Is Too Big. Max 1MB.")
      return;
    } else {
      setImageUrl(file);
      setFileName(file.name)
    }
  };
  
  const onClickSave = async (event) => {
    event.preventDefault();
    if (!ratings) {
      Alert("❌ Please Rate The Recipe.")
      return;
    }
    if (!content) {
      Alert("❌ Please Write A Comment.")
      return;
    }
    const formData = new FormData();
    formData.append("image", image_url);
    formData.append("content", content);
    formData.append("ratings", ratings);

    const response = await createReview(recipeId, formData)
    if (response) {
      const result = await getReviewList(recipeId)
      setReviews(result.data)
      // 리뷰 작성 후 입력 값 초기화
      setRatings(0)
      setContent("")
    }
  }
  
  useEffect(() => {
    getMember(UserInfo)
    .then((res) => {
      setProfileImage(res.profile_image_url)
     })
    .catch((err) => 
      console.log(err)
      )

    getReviewList(recipeId).then((res) => {
      setReviews(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[]);

  useEffect(()=> {
    getReviewList(recipeId).then((res) => {
      setReviews(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [reviews])
  
  return (
    <Container>
      <div style={{display: "flex", justifyContent: "center"}}>
        <Form enctype="multipart/form-data">
          <ImgWrapper>
            <Img src={profileImage} alt="" />
          </ImgWrapper>
          <div style={{padding: "0.5rem 0"}}>
            <Rating
              name="simple-controlled"
              value={ratings}
              onChange={(event, newRatings) => {
                setRatings(newRatings);
              }}
            />
            <InputContent placeholder="WRITE YOUR REVIEW HERE"
              value={content}
              maxLength="1000"
              onChange={
                (e)=> setContent(e.target.value)
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
      </div>
      <CardContainer>
        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap" }}>
            { reviews.length ? reviews.map((review) => ( 
              <ReviewCard
                key={review.id}
                reviewId={review.id}
                recipeId={review.recipe_seq}
                memberName={review.member_nickname}
                profileImgUrl={review.profile_image_url}
                imgUrl={review.image_url}
                content={review.content}
                ratings={review.ratings}
                lastModifiedDate={review.last_modified_date}
              />
            )): null}
          </div>
      </CardContainer>
    </Container>
  );
};

export default ReviewForm;
