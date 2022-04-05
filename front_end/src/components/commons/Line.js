import styled from "styled-components";

const UnderLine = styled.div`
  display: inline-block;
  width: ${(props) => (props.width ? props.width : "")};
  border-bottom: 0.5rem solid #ed8141;
  border-radius: 4%;
  margin-top: 1rem;
  padding-right: 1rem;
`;

export default UnderLine;