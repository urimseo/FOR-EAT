import React, { useState } from 'react';
import styled from "styled-components";
import Logo from "assets/img/logo.png";
import Typography from "components/commons/Typography";
import LoginGoogle from "components/accounts/login/LoginGoogle";
import LoginKakao from "components/accounts/login/LoginKakao";
import Terms from "components/accounts/login/Terms";
import UnderLine from 'components/commons/Line';

const Container = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .modal button {
    outline: none;
    cursor: pointer;
    border: 0;
  }
  .modal > section {
    width: 90%;
    max-width: 33%;
    margin: 0 auto;
    background-color: #fff;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-show 0.3s;
    overflow: hidden;
  }
  .modal > section > div {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 3rem;
    padding-bottom: 1rem;
  }
  .modal > section > div > img {
    width: 6rem;
    margin: auto;
    margin-top: 1.3rem;
  }
  .modal > section > div > button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    text-align: center;
    color: #999;
    background-color: transparent;
  }
  .modal > section > footer {
    padding: 1rem 1.5rem;
    text-align: right;
  }
  .modal > section > footer button {
    padding: 0.5rem;
    background-color: #FFFFFF;
    font-size: 0.6rem;
  }
  .modal.openModal {
    display: flex;
    align-items: center;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-bg-show 0.3s;
  }
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const CustomLink = styled.div`
  display: flex;
  text-decoration: underline;
  margin-left: 0.3rem;
  cursor: pointer;
`


const LoginModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close } = props;

  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <Container>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <div>
              <img className='img' src={Logo} alt=""/>
              <Typography ff="Philosopher" mr="auto" ml="auto" mt="1rem" fs="2rem" fw="200">
                FOR:EAT
              </Typography>
              <Typography mr="auto" ml="auto" mt="2rem" fs="1.5rem" fw="300">
                Your recipes are waiting
              </Typography>
              <Typography mr="auto" ml="auto" mt="0.2rem" fs="0.75rem" fw="300">
                Connect to customize your recipe discorvery.
              </Typography>
              <LoginGoogle />
              <LoginKakao />
              <div style={{ display: "flex", justifyContent:"center"}}>
                <Typography fs="0.5rem" mt="3rem" dp="flex">
                  By connecting, you agree to our <CustomLink onClick={openModal}> Terms of Use and Privacy Notice.</CustomLink>
                  <Terms open={modalOpen} close={closeModal}>
                  </Terms>
                </Typography>
              </div>
              <button className="close" onClick={close}>
                &times;
              </button>

            </div>
            <footer>
              <button className="close" onClick={close}>
                CLOSE
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Container>
  );
};

export default LoginModal