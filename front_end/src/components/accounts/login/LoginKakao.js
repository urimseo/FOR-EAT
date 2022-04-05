import React from "react";
import styled from "styled-components";
import KakaoImg from "assets/img/kakao_login.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const KakaoLogin = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;

  return (
    <>
      <Container>
        <a href={KAKAO_AUTH_URL}>
          <img src={KakaoImg} alt="kakao_login" />
        </a>
      </Container>
    </>
  );
};

export default KakaoLogin;