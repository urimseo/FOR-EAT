import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue } from 'recoil';
import { userInfoState } from 'atoms/atoms';

import Preferences from "components/accounts/mypage/Preferences"
import SavedRecipeList from "components/accounts/mypage/SavedRecipeList"
import Userinfo from "components/accounts/mypage/Userinfo"


import { getMember } from "api/MyPageApi";
import { getMypage } from "api/MyPageApi";

const Container = styled.div`
  margin: 0 10vw;
`

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`

const BoxContainer = styled.div`
  display: inline-flex;
`

const RowContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 0;
`

const CategoryButton = styled.a`
  display: inline-block;
  color: black;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 2rem 1rem 0 0;
`

const UnderLine = styled.div`
  display: inline-block;
  width: ${(props) => (props.width ? props.width : "")};
  border-bottom: 1px solid black;
  margin-top: 1rem;
  padding-right: 1rem;
`


const MyPage = () => {
  const [savedRecipes, setSavedRecipes] = useState(true);
  const [preferences, setPreferences] = useState(false);
  const [image, setImage] = useState();
  const [email, setEmail] = useState();
  const [nickname, setNickname] = useState();
  const [RecipeList, setRecipeList] = useState([]);
  const [ReviewList, setReviewList] = useState([]);
  const [SurveyList, setSurveyList] = useState([]);
  const UserInfo = useRecoilValue(userInfoState);

  const showSavedRecipes = async() => {
    setSavedRecipes(true);
    setPreferences(false);
  };
  const showPreferences = async() => {
    setSavedRecipes(false);
    setPreferences(true);
  };

  useEffect(() => {
    showSavedRecipes();
    
    getMypage(UserInfo)
    .then((res) => {
      console.log(res)
      setRecipeList(res.liked_recipe)
      setReviewList(res.review)
      setSurveyList(res.member_survey)
     })
    .catch((err) => 
      console.log(err)
      )

      getMember(UserInfo)
      .then((res) => 
        {
        setEmail(res.email.split('_')[1])
        setNickname(res.nickname)
        setImage(res.profile_image_url)
      })
      .catch((err) => 
        console.log(err)
        )
  
  },[]);

  return (
    <>
      <Container>
          <Userinfo image={image} nickname={nickname} email={email} UserInfo={UserInfo} />
        <SpaceBetweenContainer>
          <BoxContainer>
            <RowContainer>
              <CategoryButton onClick={showSavedRecipes}>SAVED RECIPES</CategoryButton>
              {savedRecipes ? <UnderLine width="8.2rem" /> : null}
            </RowContainer>
            <RowContainer>
              <CategoryButton onClick={showPreferences}>PREFERENCES</CategoryButton>
              {preferences ? <UnderLine width="7.7rem" /> : null}
            </RowContainer>
          </BoxContainer>
        </SpaceBetweenContainer>
        
        <SpaceBetweenContainer>
          <div>
            {savedRecipes ? <SavedRecipeList RecipeList={RecipeList} ReviewList={ReviewList} UserInfo={UserInfo} /> : null}
            {preferences ? <Preferences SurveyList={SurveyList} /> : null}
          </div>
        </SpaceBetweenContainer>
      </Container>
    </>
  );
};

export default MyPage;