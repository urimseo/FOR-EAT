import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => (props.w ? props.w : "12rem")};
  height: ${(props) => (props.h ? props.h : "5rem")};
  font-size: ${(props) => (props.fs ? props.fs : "1rem")};
  background-color: ${(props) => (props.bc ? props.bc : "white")};
  margin-top: ${(props) => (props.mt ? props.mt : "1rem")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
  padding: ${(props) => (props.padding ? props.padding : "")};
  box-shadow: ${(props) => (props.bs ? props.bs : "1px 1px 10px 3px #e2e2e2")};
  border: ${(props) => (props.border ? props.border : "1px solid grey")};
  font-weight: 600;
  border-radius: ${(props) => (props.br ? props.br : "35px")};
  font-family: "Noto Sans KR", sans-serif;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.hoverColor ? props.hoverColor : ""};
  }

  &:disabled {
    background-color: white;
    cursor: no-drop;
  }

  &:active{
    box-shadow: none;
  }
`;

const Button = (props) => {
  return (
    <StyledButton {...props} disabled={props.disabled}>
      {props.name}
    </StyledButton>
  );
};

export default Button;
