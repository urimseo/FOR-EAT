import { React, useEffect } from 'react';
import { kakaoLogin } from '../../api/AuthApi';
import { useSetRecoilState } from 'recoil';
import { isLoginState } from '../../atoms/atoms';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
`

const Message = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
`

const Auth = () => {
  // 인가코드 받기
  const loginCode = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  //atom 혹은 selector가 업데이트되면 리렌더링. 구독하는 값을 변경하는 set 함수만 반환. 불필요한 리렌더링 방지.
  const setIsLoginState = useSetRecoilState(isLoginState);

  useEffect(() => {
    async function fetchData() {
      const result = await kakaoLogin(loginCode);
      console.log(result)
      if (result.status === 200) {
        try {
          setIsLoginState(true);
          navigate("/category");
        }
        catch {
          window.location.reload();
        }
      } else {
        alert("로그인 정보를 확인해주세요.");
      }
    }
    fetchData();
  }, []); 

  return (
    <Container>
      <Message>
        에러! ERR_CONNECTION_REFUSED
      </Message>
    </Container>
  );
};


export default Auth;