import React from "react";
import GoogleLogin from 'react-google-login';
import styled from "styled-components";
import { useSetRecoilState } from 'recoil';
import { isLoginState, userInfoState } from '../../../atoms/atoms';
import { useNavigate } from 'react-router-dom';
import { googleLogin } from '../../../api/AuthApi';
import { Alert } from "components/commons/Alert";
import { setApiHeaders } from "api/Axios";

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
      email: response.profileObj.email,
      googleId: response.profileObj.googleId,
      imageUrl: response.profileObj.imageUrl,
      name: response.profileObj.name
    };

    const result = await googleLogin(data, response.tokenId);
    if (result.status === 200) {
      try {
        setIsLoginState(true);
        setUserInfoState(result.user.member_seq);
        setApiHeaders();
        if (result.user.isSurvey === false) {
          navigate("/survey");
        } else {
          navigate("/recommend");
        }
      }
      catch {
        window.location.reload();
      }
    } else {
      Alert("Please check your information.");
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