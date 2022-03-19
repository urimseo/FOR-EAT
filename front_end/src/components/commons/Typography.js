import styled from "styled-components";

const StyledTypography = styled.p`
  display: ${(props) => (props.dp ? props.dp : "inline")};
  font-family: ${(props) => (props.ff ? props.ff : "Work Sans")};
  font-size: ${(props) => (props.fs ? props.fs : "1rem")};
  font-weight: ${(props) => (props.fw ? props.fw : "400")};
  color: ${(props) => (props.c ? props.c : "#000000")};
  margin: ${(props) => (props.m ? props.m : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
  padding-top: ${(props) => (props.pt ? props.pt : "")};
  padding-bottom: ${(props) => (props.pb ? props.pb : "")};
  padding-inline: ${(props) => (props.pi ? props.pi : "")};
  padding-left: ${(props) => (props.pl ? props.pl : "")};
  padding-right: ${(props) => (props.pr ? props.pr : "")};
  position: ${(props) => (props.p ? props.p : "relative")};
  left: ${(props) => (props.l ? props.l : "")};
  top: ${(props) => (props.t ? props.t : "")};
  right: ${(props) => (props.r ? props.r : "")};
  width: ${(props) => (props.w ? props.w : "")};
  height: ${(props) => (props.h ? props.h : "")};
  text-align: ${(props) => (props.ta ? props.ta : "center")};
  letter-spacing: -1%;
  line-height: ${(props) => (props.lh ? props.lh : "")}; 
  z-index: ${(props) => (props.zi ? props.zi : "")}; 
  cursor: ${(props) => (props.cursor ? props.cursor : "default")};
  &:hover {
    color: ${(props) =>
      props.hoverColor ? props.hoverColor : "#000"};
  }
  `;

const Typography = (props) => {
  return <StyledTypography {...props} ></StyledTypography>;
};

export default Typography;
