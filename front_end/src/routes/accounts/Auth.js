import { React, useEffect } from 'react';
import { kakaoLogin } from '../../api/AuthApi';
import { useSetRecoilState } from 'recoil';
import { isLoginState } from '../../atoms/atoms';
import { useNavigate } from 'react-router-dom';


const Auth = () => {
  // 인가코드 받기
  const loginCode = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  //atom 혹은 selector가 업데이트되면 리렌더링. 구독하는 값을 변경하는 set 함수만 반환. 불필요한 리렌더링 방지.
  const setIsLoginState = useSetRecoilState(isLoginState);

  useEffect(() => {
    async function fetchData() {
      const result = await kakaoLogin(loginCode);
      if (result.status === 200) {
        try {
          setIsLoginState(true);
          navigate("/recommend");
        }
        catch {
          window.location.reload();
        }
      } else {
        alert("로그인 정보를 확인해주세요.");
      }
    }
    fetchData();
  }, [setIsLoginState, loginCode]); 

  return (
    <div>
    </div>
  );
};


export default Auth;