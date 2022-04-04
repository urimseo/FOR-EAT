import { React } from 'react';
import styled from "styled-components";
import profile from 'assets/img/profile.png'
import profile_hover from 'assets/img/profile_hover.png'

import { useResetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import {logout} from 'api/AuthApi'
import {isLoginState} from 'atoms/atoms'

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

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  min-width: 5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  z-index: 99;
  top: 22px;
  right: 15px;

`;

const DropDown = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const DropDownItem = styled.div`
  cursor: pointer;
  text-align: center;
  margin: 2rem;
`;

const Profile = ({ onClick, url, isSelected }) => {
  const selected = "/" + url.split("/")[1]
  const navigate = useNavigate();
  const resetIsLoggedState = useResetRecoilState(isLoginState)

  const logoutUser = () => {
    resetIsLoggedState();
    logout();
    navigate('/');
  };

  return (
      <Container>
        <DropDown>
        <ProfileImgWrapper>
          <ProfileImg src={isSelected === selected ? profile_hover:profile} alt="my page" 
      onClick={() => onClick(url)}/>
        </ProfileImgWrapper>

        <DropDownContent>
            <DropDownItem
              onClick={() => {
                navigate(url);
              }}
            >
              MyPage
            </DropDownItem>
            <DropDownItem  onClick={logoutUser}>
              Logout
            </DropDownItem>
            </DropDownContent>
        </DropDown>
      </Container>
  );
};

export default Profile;