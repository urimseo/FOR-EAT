import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  color: ${(props) => (props.co ? "#ED8141" : "black")};
  font-size: 1rem;
  font-weight: 600;
  text-align: center;

  &:hover {
    color: #ED8141;
  }
`;

const NavItem = ({ onClick, url, name, isSelected }) => {
  return (
    <Container
      onClick={() => onClick(url)}
      co={isSelected === url ? true : false}
    >
          {name}
    </Container>
  );
};

export default NavItem;
