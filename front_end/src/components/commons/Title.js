import styled from "styled-components";

const StyledTitle = styled.p`
  display: ${(props) => (props.dp ? props.dp : "inline")};
  font-family: ${(props) => (props.ff ? props.ff : "Playfair Display")};
  font-size: ${(props) => (props.fs ? props.fs : "2.2rem")};
  font-weight: ${(props) => (props.fw ? props.fw : "")};
  color: ${(props) => (props.color ? props.color : "#000000")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
  position: ${(props) => (props.p ? props.p : "relative")};
  left: ${(props) => (props.left ? props.left : "")};
  right: ${(props) => (props.right ? props.right : "")};
  width: ${(props) => (props.w ? props.w : "")};
  height: ${(props) => (props.h ? props.h : "")};
  text-align: ${(props) => (props.ta ? props.ta : "center")};
  letter-spacing: -1%;
`;

const Title = (props) => {
  return <StyledTitle {...props} ></StyledTitle>;
};

export default Title;
