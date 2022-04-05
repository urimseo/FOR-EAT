import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => (props.width ? props.width : "150px")};
  height: ${(props) => (props.height ? props.height : "50px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "15px")};
  background-color: ${(props) => (props.bc ? props.bc : "#ed8141")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
  padding: ${(props) => (props.padding ? props.padding : "")};
  box-shadow: ${(props) => (props.bs ? props.bs : "")};
  border: ${(props) => (props.border ? props.border : "none")};
  font-weight: 600;
  border-radius: ${(props) => (props.br ? props.br : "35px")};
  font-family: "Noto Sans KR", sans-serif;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.hoverColor ? props.hoverColor : "#e76314"};
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
