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
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`

  return (
    <>
      <Container>
        <a href={KAKAO_AUTH_URL}><img src={kakao_img} alt="kakao_login" /></a>
      </Container>
    </>
  );
};

export default Login;