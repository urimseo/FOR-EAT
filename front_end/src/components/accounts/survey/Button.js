import styled from "styled-components";


const SurveyButton = styled.button`
  font-size: ${(props) => (props.fs ? props.fs : "1rem")};
  cursor: pointer;
  border-radius: 1rem;
  font-family: work sans;
  box-shadow: 1px 1px 10px 3px ${(props) => (props.boxColor ? props.boxColor : "#e2e2e2")};
  width: ${(props) => (props.w ? props.w : "")};
  height: ${(props) => (props.h ? props.h : "")};
  background-color: ${(props) => (props.bc ? props.bc : "white")};
  color: ${(props) => (props.color ? props.color : "black")};
  border: none;
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
  &:hover {
    color: ${(props) =>
      props.hoverColor ? props.hoverColor : "#a2a2a2"};
  }
`

const Button = (props) => {
  return (
    <SurveyButton {...props} disabled={props.disabled}>
      {props.name}
    </SurveyButton>
  );
};

export default Button;