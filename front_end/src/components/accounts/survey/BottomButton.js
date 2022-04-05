import styled from "styled-components";

const Button = styled.a`
  font-size: 1.2rem;
  font-weight: 350;
  cursor: pointer;
  border: none;
  float: ${(props) => (props.f ? props.f : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
`;

const BottomButton = (props) => {
  return (
    <Button {...props} disabled={props.disabled}>
      {props.name}
    </Button>
  );
};

export default BottomButton;