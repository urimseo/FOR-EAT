import {React} from 'react';
import styled from "styled-components";
import reading_glasses from 'assets/img/reading_glasses.png'

const Container = styled.div`
  display: inline-flex;
`

const Input = styled.input`
  width: 17rem;
  height: 1.5rem;
  outline: none;
  font-size: 0.7rem;
  margin-top: 0.2rem;
  border-radius: 10rem;
  border: 1px solid grey;
`


const SearchButton = styled.a`
  display: inline-block;
  cursor: pointer;
`

const SearchInput = () => {
  return (
    <>
      <Container>
        <Input
          placeholder=" search in result"
        >
        </Input>
        <SearchButton>
          <img src={reading_glasses} alt="reading_glasses" style={{margin: "0.3rem 0.2rem", width: "1.5rem", height: "1.5rem"}}/>
        </SearchButton>
      </Container>
    </>
  );
};

export default SearchInput;