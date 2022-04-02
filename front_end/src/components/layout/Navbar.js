import {React, useState, useEffect} from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Typography from "components/commons/Typography";
import SearchInput from "components/search/SearchInput"
import NavItem from "components/layout/NavItem"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  padding: 1rem 0;
`;

const TabContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  position: relative;
  line-height: 28px;
`

const Navbar = () => {
  const location = useLocation();
  const [isSelected, setIsSelected] = useState("/home");
  const [profileShow, setProfileShow] = useState();
  const navigate = useNavigate();
  
  const onClick = (url) => {
    navigate(url);
    setIsSelected(url);
    setProfileShow(false);
  };

  const onProfile = () => {
    setProfileShow(true);
  }

  useEffect(() => {
    setIsSelected("/" + location.pathname.split("/")[1]);
  }, [location]);

  return (
    <Container>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1.5rem"}}>
        <Typography ff="Philosopher" fs="3rem" cursor="pointer" onClick={() => navigate("/recommend")} >FOR:EAT</Typography>
      </div>
      <Typography ff="Playfair Display" fs="0.8rem" fw="500" pb="1rem">ONLY FOR YOU</Typography>
      
      <div style={{display: "grid", gridTemplateColumns: "1fr 2fr 1fr", marginTop: "1.5rem"}}>
      <div></div>
      <TabContainer>
        <NavItem 
                url="/recommend"
                name="FEED"
                onClick={onClick}
                isSelected={isSelected}
        />
        <NavItem 
                url="/ingredient"
                name="INGREDIENTS"
                onClick={onClick}
                isSelected={isSelected}
        />
        <NavItem 
                url="/category"
                name="CATEGORIES"
                onClick={onClick}
                isSelected={isSelected}
        />
        <NavItem 
                url="/browse"
                name="BROWSE"
                onClick={onClick}
                isSelected={isSelected}
        />

      </TabContainer>
      <SearchInput onProfile={onProfile} profileShow={profileShow}/>
      </div>
    </Container>
  );
};

export default Navbar;
