import React from "react";
import GoogleLogin from 'react-google-login';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { googleLogin } from '../../../api/AuthApi';

const Container = styled.div`
  margin: 0 10vw;

  button {
    background: none;
    border: none;
    cursor: pointer;
`;


const Google = () => {
  const navigate = useNavigate();

  const successGoogle = async (response) => {
    const data = {
      googleId: response.profileObj.googleId,
      imageUrl: response.profileObj.imageUrl,
      name: response.profileObj.name
    };
    const result = await googleLogin(data, response.tokenId);
    console.log(result);
    navigate("/recommend");
  }
  
  const failGoogle = (response) => {
    console.log(response);
    alert("로그인 정보를 확인해주세요.")
  }
  
  return (
    <>
      <Container>
      <GoogleLogin
        clientId="99460548731-f1jna9uv0thv2eo84q5m8h83078a585c.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={successGoogle}
        onFailure={failGoogle}
      />
      </Container>
    </>
  );
};

export default Google;