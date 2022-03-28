import { React } from 'react';
import styled from "styled-components";
import profile from 'assets/img/profile.png'
import profile_hover from 'assets/img/profile_hover.png'
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoginState, userInfoState } from '../../atoms/atoms';

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

const Profile = () => {
  const navigate = useNavigate();

  const UserInfo = useRecoilValue(userInfoState);

  const onClick = () => {
    navigate(`/${UserInfo}/mypage`);
  }

  return (
    <>
      <Container>
        <ProfileImgWrapper>
          <ProfileImg src={profile} alt="my page" onClick={onClick}/>
        </ProfileImgWrapper>
      </Container>
    </>
  );
};

export default Profile;