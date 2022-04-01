import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => (props.w ? props.w : "8.5rem")};
  height: ${(props) => (props.h ? props.h : "8.5rem")};
  font-size: ${(props) => (props.fs ? props.fs : "0.9rem")};
  background-color: ${(props) => (props.bc ? props.bc : "white")};
  margin-top: ${(props) => (props.mt ? props.mt : "1rem")};
  margin-right: ${(props) => (props.mr ? props.mr : "3rem")};
  border: ${(props) => (props.border ? props.border : "5px solid #C4C4C4")};
  font-weight: 500;
  border-radius: ${(props) => (props.br ? props.br : "5rem")};
  font-family: "Work Sans";
  transition: 0.2s;
  cursor: ${(props) => (props.cursor ? props.cursor : "pointer")};

  &:hover {
    background-color: ${(props) => (props.hoverColor ? props.hoverColor : "")};
  }

  &:disabled {
    background-color: white;
    cursor: no-drop;
  }

  &:active {
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