import React from 'react';
import styled from "styled-components";
import profile from 'assets/img/profile.png'
import profile_hover from 'assets/img/profile_hover.png'
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../../atoms/atoms';

const Container = styled.div`
  display: flex;
`


const ProfileImgWrapper = styled.a`
  display: inline-block;
  cursor: pointer;
  margin-left: 0.5rem;
  margin-right: 4rem;
`
const ProfileImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`

const Profile = ({onProfile, profileShow}) => {
  const navigate = useNavigate();

  const UserInfo = useRecoilValue(userInfoState);

  const onClick = () => {
    navigate(`/${UserInfo}/mypage`);
    onProfile()
  }

  return (
    <>
      <Container>
        <ProfileImgWrapper>
          <ProfileImg src={profileShow?profile_hover:profile} alt="my page" onClick={onClick}/>
        </ProfileImgWrapper>
      </Container>
    </>
  );
};

export default Profile;