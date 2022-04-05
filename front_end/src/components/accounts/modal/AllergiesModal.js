import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "components/commons/Button";
import Button2 from "components/commons/Button2";
import { editSurvey } from "api/MyPageApi";
import { Alert } from "components/commons/Alert";

const Container = styled(motion.div)`
  box-sizing: border-box;
  width: 700px;
  box-shadow: 3px 5px 5px 5px #424141;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 3rem;
  letter-spacing: -1px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${(props) => (props.fs ? props.fs : "3rem")};
  font-weight: ${(props) => (props.fw ? props.fw : "300")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 3rem;
`;

const AllergiesModal = ({ setFlag, on, UserInfo, layoutId, setWidgetId, surveyList }) => {
  const [wheatShow, setWheatShow] = useState();
  const [peanutShow, setPeanutShow] = useState();
  const [walnutShow, setWalnutShow] = useState();
  const [appleShow, setAppleShow] = useState();
  const [sesameShow, setSesameShow] = useState();
  const [shellfishShow, setShellfishShow] = useState();
  const [eggShow, setEggShow] = useState();
  const [interestShow, setInterestShow] = useState();
  const [allergyList, setAllergyList] = useState([]);
  
  useEffect(() => {
    if (surveyList.allergy.length === 0) {setInterestShow(true)}
    else{
    surveyList.allergy.map(item => {
    if (item.allergy_seq === 1) {setWheatShow(true); setAllergyList(allergyList => [...allergyList, 1])}
    if (item.allergy_seq === 2) {setPeanutShow(true); setAllergyList(allergyList => [...allergyList, 2])}
    if (item.allergy_seq === 3) {setWalnutShow(true); setAllergyList(allergyList => [...allergyList, 3])}
    if (item.allergy_seq === 4) {setAppleShow(true); setAllergyList(allergyList => [...allergyList, 4])}
    if (item.allergy_seq === 5) {setSesameShow(true); setAllergyList(allergyList => [...allergyList, 5])}
    if (item.allergy_seq === 6) {setShellfishShow(true); setAllergyList(allergyList => [...allergyList, 6])}
    if (item.allergy_seq === 7) {setEggShow(true); setAllergyList(allergyList => [...allergyList, 7])}
    })
  }
  }, []);

  const onClick = (event) => {
    event.stopPropagation();
  };

  const onCheck = async () => {
    const formData = new FormData();
    let temp = []
    if(allergyList.length === 0) {
      if(interestShow === true)
      {
        setInterestShow(true)
        formData.append('allergy', temp);
        editSurvey(UserInfo, formData)
        setWidgetId(null)
        setFlag(true)
      }
      else Alert("🧡 Please Check your diet goal.")
    }
    else{
      for (let i=0; i< allergyList.length; i++){
        temp.push(Number(allergyList[i]))
      }
      formData.append('allergy', temp);
    // for (let key of formData.keys()) { console.log(key, ":", formData.get(key)); }
    editSurvey(UserInfo, formData)
    allergyList.map(item => {
      if (item === 1) setWheatShow(true)
      if (item === 2) setPeanutShow(true)
      if (item === 3) setWalnutShow(true)
      if (item === 4) setAppleShow(true)
      if (item === 5) setSesameShow(true)
      if (item === 6) setShellfishShow(true)
      if (item === 7) setEggShow(true)
      })
      
    setWidgetId(null);
    setFlag(true)
    }
  };

  const onClose = () => {
    setWidgetId(null);
  };

  const onWheat = () => {
    setWheatShow(!wheatShow);
    setInterestShow(false);
    if (allergyList.includes(1)) setAllergyList(allergyList.filter(item => item !== 1))
    else setAllergyList(allergy => [...allergy, 1])
  };

  const onPeanut = () => {
    setPeanutShow(!peanutShow);
    setInterestShow(false);
    if (allergyList.includes(2)) setAllergyList(allergyList.filter(item => item !== 2))
    else setAllergyList(allergy => [...allergy, 2])
  };

  const onWalnut = () => {
    setWalnutShow(!walnutShow);
    setInterestShow(false);
    if (allergyList.includes(3)) setAllergyList(allergyList.filter(item => item !== 3))
    else setAllergyList(allergy => [...allergy, 3])
  };

  const onApple = () => {
    setAppleShow(!appleShow);
    setInterestShow(false);
    if (allergyList.includes(4)) setAllergyList(allergyList.filter(item => item !== 4))
    else setAllergyList(allergy => [...allergy, 4])
  };

  const onSesame = () => {
    setSesameShow(!sesameShow);
    setInterestShow(false);
    if (allergyList.includes(5)) setAllergyList(allergyList.filter(item => item !== 5))
    else setAllergyList(allergy => [...allergy, 5])
  };

  const onShellfish = () => {
    setShellfishShow(!shellfishShow);
    setInterestShow(false);
    if (allergyList.includes(6)) setAllergyList(allergyList.filter(item => item !== 6))
    else setAllergyList(allergy => [...allergy, 6])
  };

  const onEgg = () => {
    setEggShow(!eggShow);
    setInterestShow(false);
    if (allergyList.includes(7)) setAllergyList(allergyList.filter(item => item !== 7))
    else setAllergyList(allergy => [...allergy, 7])
  };

  const onInterest = () => {
    setAllergyList([''])
    setInterestShow(true);
    setWheatShow(false);
    setPeanutShow(false);
    setWalnutShow(false);
    setAppleShow(false);
    setSesameShow(false);
    setShellfishShow(false);
    setEggShow(false);
  };

  return (
    <Container
      onClick={onClick}
      layout
      layoutId={layoutId}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Title fs="2.5rem" fw="300" mt="2rem" mb="1rem">
        Select your information
      </Title>
      <Title fs="1.2rem" fw="200" mb="1rem">
        Check your allergy information.
      </Title>
      <BoxContainer>
        <div style={{ width: "26rem" }}>
          <SpaceBetweenContainer>
            <Button2 bs={wheatShow ? on : ""} mr="0px" onClick={onWheat} name="Wheat" />
            <Button2
              bs={peanutShow ? on : ""}
              mr="0px" 
              onClick={onPeanut}
              name="Peanut"
            />
          </SpaceBetweenContainer>
          <SpaceBetweenContainer>
            <Button2
              bs={walnutShow ? on : ""}
              mr="0px" 
              onClick={onWalnut}
              name="walnut"
            />
            <Button2 bs={appleShow ? on : ""}mr="0px"  onClick={onApple} name="Apple" />
          </SpaceBetweenContainer>
          <SpaceBetweenContainer>
            <Button2
              bs={sesameShow ? on : ""}
              mr="0px" 
              onClick={onSesame}
              name="Sesame"
            />
            <Button2
              bs={shellfishShow ? on : ""}
              mr="0px" 
              onClick={onShellfish}
              name="Shellfish"
            />
          </SpaceBetweenContainer>
          <SpaceBetweenContainer>
            <Button2 bs={eggShow ? on : ""} mr="0px" onClick={onEgg} name="Egg" />
            <Button2
              bs={interestShow ? on : ""}
              mr="0px" 
              onClick={onInterest}
              name="No relevant"
            />
          </SpaceBetweenContainer>
        </div>
      </BoxContainer>

      <ButtonContainer>
      <Button
          name="Cancel"
          bc="#C4C4C4"
          hoverColor="#a2a2a2"
          onClick={onClose}
        />
        <Button name="Check"
          ml="3rem" onClick={onCheck} />
      </ButtonContainer>
    </Container>
  );
};

export default AllergiesModal;