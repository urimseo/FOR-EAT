import { React, useEffect } from 'react';
import { login } from '../../api/AuthApi';
import { useSetRecoilState } from 'recoil';
import { isLoginState } from '../../atoms/atoms';

// 카카오 로그인 성공하면, Feed 페이지로 이동. 실패하면 팝업으로 로그인 실패 메시지 출력하기.
const Auth = () => {
  // 인가코드 받기
  const loginCode = new URL(window.location.href).searchParams.get("code");
  // console.log(loginCode)
  
  //atom 혹은 selector가 업데이트되면 리렌더링. 구독하는 값을 변경하는 set 함수만 반환. 불필요한 리렌더링 방지.
  const setIsLoginState = useSetRecoilState(isLoginState);
  // console.log(setIsLoginState)
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const result = await login(loginCode);
      console.log(result)
      if (result) {
        try {
          setIsLoginState(true);
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
      로그인 성공
    </div>
  );
};


export default Auth;