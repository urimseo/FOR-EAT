import { React } from 'react';
import styled from "styled-components";
import profile from 'assets/img/profile.png'
import profile_hover from 'assets/img/profile_hover.png'

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
  return (
    <>
      <Container>
        <ProfileImgWrapper>
          <ProfileImg src={profile} alt="my page"/>
        </ProfileImgWrapper>
      </Container>
    </>
  );
};

export default Profile;