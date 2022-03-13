import React from "react";
import styled from "styled-components";
import kakao_img from 'assets/kakao_login.png';

const Container = styled.div`
  margin: 0 10vw;

  button {
    background: none;
    border: none;
    cursor: pointer;
`;

const Login = () => {
  // const REST_API_KEY = `${process.env.REACT_APP_URL_KAKAO_CLIENT_ID}`
  // const REDIRECT_URI = `${process.env.REACT_APP_URL_KAKAO_REDIRECT_URI}`
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=fccb60a1e9392facb541d62f69d3c629&redirect_uri=http://localhost:3000/members/kakao/login&response_type=code`

  return (
    <>
      <Container>
        <a href={KAKAO_AUTH_URL}><img src={kakao_img} alt="kakao_login" /></a>
      </Container>
    </>
  );
};

export default Login;