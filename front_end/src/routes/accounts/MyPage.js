import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../../atoms/atoms';

import Preferences from "components/accounts/mypage/Preferences"
import SavedRecipeList from "components/accounts/mypage/SavedRecipeList"
import Userinfo from "components/accounts/mypage/Userinfo"


import { getMember } from "api/MyPageApi";
import { editMember } from "api/MyPageApi";
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
  
  const UserInfo = useRecoilValue(userInfoState);

  getMember(UserInfo)
  .then((res) => 
    {
    const data = {
      email: res.email,
      nickname: res.nickname,
      profileUrl: res.profile_image_url,
    };
    setImage(res.profile_image_url)
  })
  .catch((err) => 
    console.log(err)
    )

  editMember(UserInfo)
  .then((res) => 
    console.log(res)
    )
  .catch((err) => 
    console.log(err)
    )

  getMypage(UserInfo)
  .then((res) => 
    console.log(res)
    )
  .catch((err) => 
    console.log(err)
    )


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
  },[]);


  return (
    <>
      <Container>
          <Userinfo image={image} setImage={setImage} />
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
            {savedRecipes ? <SavedRecipeList /> : null}
            {preferences ? <Preferences /> : null}
          </div>
        </SpaceBetweenContainer>
      </Container>
    </>
  );
};

export default MyPage;