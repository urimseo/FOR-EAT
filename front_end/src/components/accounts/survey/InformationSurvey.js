import React from 'react';
import styled from "styled-components";
import woman from "assets/img/woman.png";
import man from "assets/img/man.png";


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

const Question = styled.div`
  display: flex;
  justify-content: center;
  .box {
    width: 50rem;
    height: 30rem;
    border: 1px solid #d3d3d3;
    box-shadow: 3px 5px 5px 5px #d3d3d3;
  }
  .number {
    display: flex;
    justify-content: flex-end;
    margin: 1.5rem 1.5rem 0 0;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  font-size: 1.2rem;
  font-weight: 100;
  cursor: pointer;
  background-color: white;
  border: none;
  height: 6rem;
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
`

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`

const SelectContent = styled.select`
  width: 20rem;
  height: 2rem;
  font-size: 1rem;
  font-family: Work Sans;
`

const NextButton =styled.button`
  display: flex;
  float: right;
  margin: 4rem 3rem 0 0;
  font-size: 1.2rem;
  font-weight: 100;
  cursor: pointer;
  background-color: white;
  border: none;
`

const InformationSurvey = () => {
  return (
    <>
      <Container>
        <Question>
          <div className='box'>
            <div className='number'>1/7</div>
            <Title fs="2.5rem" fw="300" mt="2rem" mb="1rem">Select your information</Title>
            <Title fs="1.2rem" fw="200" mb="2rem">Check your gender and age.</Title>
            <ButtonContainer>
              <Button mr="0.5rem">Man</Button>
              <img src={man} alt="man" style={{width: "6rem", height: "6rem", marginRight: "1rem"}} />
              <img src={woman} alt="woman" style={{width: "6rem", height: "6rem", marginLeft: "1rem"}} />
              <Button ml="0.5rem">Woman</Button>
            </ButtonContainer>
            <SelectContainer>
              <Title mt="0.5rem" fs="1rem" mr="0.5rem">AGE</Title>
              <SelectContent>
                <option value="1">15-19세</option>
                <option value="2" selected>20-29세</option>
                <option value="3">30-49세</option>
                <option value="4">50-64세</option>
                <option value="5">65-74세</option>
                <option value="6">75세 이상</option>
              </SelectContent>
            </SelectContainer>
            <NextButton>Continue</NextButton>
          </div>
        </Question>
      </Container>
    </>
  )
}

export default InformationSurvey;