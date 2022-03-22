import React from "react";
import GoogleLogin from 'react-google-login';
import styled from "styled-components";
import { useSetRecoilState } from 'recoil';
import { isLoginState, userInfoState } from '../../../atoms/atoms';
import { useNavigate } from 'react-router-dom';
import { googleLogin } from '../../../api/AuthApi';

const Container = styled.div`
  margin: auto;
  margin-top: 2rem;
`


const LoginGoogle = () => {
  const navigate = useNavigate();
  const setIsLoginState = useSetRecoilState(isLoginState);
  const setUserInfoState = useSetRecoilState(userInfoState);
  const successGoogle = async (response) => {
    const data = {
      access_token: response.tokenId,
      googleId: response.profileObj.googleId,
      imageUrl: response.profileObj.imageUrl,
      name: response.profileObj.name
    };

    const result = await googleLogin(data, response.tokenId);
    if (result.status === 200) {
      try {
        setIsLoginState(true);
        setUserInfoState(result.user.member_seq);
        navigate("/recommend");
      }
      catch {
        window.location.reload();
      }
    } else {
      alert("로그인 정보를 확인해주세요.");
    }
  }
  
  const failGoogle = (response) => {
    console.log(response);
  }
  
  return (
    <>
      <Container>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Sign in with Google"
          onSuccess={successGoogle}
          onFailure={failGoogle}
        />
      </Container>
    </>
  );
};

export default LoginGoogle;