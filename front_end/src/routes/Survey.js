import React, { useEffect } from 'react';
import styled from "styled-components";
import InformationSurvey from 'components/accounts/survey/InformationSurvey';

const Container = styled.div`
  min-height: 100vh;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${(props) => (props.fs ? props.fs : "3rem")};
  font-weight: ${(props) => (props.fw ? props.fw : "300")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
`



const Survey = () => {
  return (
    <>
      <Container>
        <Title fs="2rem" fw="200" mt="3rem" mb="3rem">PERSONALIZE YOUR EXPERIENCE</Title>
        <InformationSurvey />
      </Container>
    </>
  )
}

export default Survey;