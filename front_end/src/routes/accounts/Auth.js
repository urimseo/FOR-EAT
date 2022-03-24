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
      await kakaoLogin(loginCode)
      .then((res) => 
        {
          if (res) {
          console.log(res)
          setIsLoginState(true)
          navigate("/category")
          }
          else {
            alert("로그인에 실패했습니다.")
            navigate("/")
          }
        }
      ).catch((err) => {
        alert("로그인에 실패했습니다.")
        navigate("/")
      }
      );
    }
    fetchData();
  }, []); 

  return (
    <>
    </>
  );
};


export default Auth;