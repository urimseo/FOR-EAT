import React, { useState, useEffect } from "react";
import styled from "styled-components";
import nutrientInfo from "assets/nutrient";

const Container = styled.div`
  display: flex;
  background-color: #FFFFFF;
  padding: 1.4rem;
  margin: 0 1rem 1rem 1rem;
  border-radius: 2%;
`

const TextContainer = styled.div`
  h1 { 
    font-size: 1.7rem;
    font-weight: 500;
    padding: 0;
  }
  h5 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3rem;
    padding: 2rem 0;
  }
`

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.align ? props.align : "center")};
  width: ${(props) => (props.width ? props.width : "11.5rem")};
  height: ${(props) => (props.height ? props.height : "1.3rem")};
  margin: ${(props) => (props.m ? props.m : "0.8rem 0 0 0")};
  text-align: start;
  color: ${(props) => (props.color ? props.color : "#FFFFFF")};
  font-size: ${(props) => (props.fs ? props.fs : "1.2rem")};
  line-height: ${(props) => (props.lh ? props.lh : "1.4rem")};
  font-weight: ${(props) => (props.fw ? props.fw : "500")};
  vertical-align: center;
  padding: ${(props) => (props.p ? props.p : "1rem 1.5rem 1rem 1.5rem")};
  background-color: ${(props) => (props.bc ? props.bc : "#ED8141")};
  border-radius: 0.5rem;
  word-break:break-all;
  .item {
    display: contents;
    font-weight: 600;
    font-style: italic;
  }
`



const Restriction = ({ nutrient, user }) => {
  // 부모컴포넌트에서 props 보낼 때 || {}로 보내주면 자식에서 신경 안 써도 됨.
  const age = user.age
  const gender = user.gender
  const [ standard, setStandard ] = useState({
    "calories": 900,
    "fat": 33,
    "saturated_fat": 6,
    "cholesterol": 100,
    "sodium": 500,
    "carbohydrate": 77,
    "fiber": 10,
    "sugar": 36,
    "protein": 48
  }) // 초기값 

  const [ data, setData ] = useState([ 
    [ "Sodium", checkRestriction(nutrient.sodium, 667)],
    [ "Cholesterol", checkRestriction(nutrient.cholesterol, 100)],
    [ "Sugar", checkRestriction(nutrient.sugar, 16.7)],
  ]) // 초기데이터
  

  //내가 먹은 값/평균값*100 > 110 : 초과
  function checkRestriction(ate, avg) {
    const result = ((ate/avg)*100).toFixed()
    if ( result > 110 ) {
      return [ "#ED8141", "Over" ]
    }
    else if ( 110 > result > 90 ) {
      return ["#FFE78F", "Sufficient"]
    }
    else {
      return ["#97BB97", "Low"]
    }
  }

  // 나이와 성별에 따라 standard 세팅
  const getNutrientInfo = () => {
    if ( age ) {
      if ( gender ) {
        setStandard(nutrientInfo[age.toString()][1]) // true : 여성
        
      } else {
        setStandard(nutrientInfo[age.toString()][0])  // false : 남성
      }
    }
  }

  const getData = () => {
    setData([
      [ "Sodium", checkRestriction(nutrient.sodium, standard.sodium)],
      [ "Cholesterol", checkRestriction(nutrient.cholesterol, standard.cholesterol)],
      [ "Sugar", checkRestriction(nutrient.sugar, standard.sugar)],
    ])
  }

  useEffect(() => {
    getNutrientInfo()
  }, [age, gender])
  
  useEffect(() => {
    getData()
  }, standard)

  return (
    <Container>
      <TextContainer>
        <h1>Restriction</h1>
          { data.map((item, idx) => ( 
              <Card key={idx} bc={ item[1][0] }>
                <div>
                  { item[0] } 
                </div>
                <div>
                  { item[1][1] }
                </div>
              </Card>
            ))
          }
        {/* 1. 3개 중 하나라도  over이면 2. 다 low라면 else: 섞여있다면 */}
        { data[0][1][1] === "Over" || data[1][1][1] === "Over" || data[2][1][1] === "Over" ? 
          <Card bc="#FFFFFF" p="0.8rem 0.2rem 0 0.2rem" m="0" width="14.5rem" height="8rem" align="start" color="#000" fw="400" fs="1rem">
            You've taken more
            <div className="item">{data[0][1][1] ==="Over" ? ` ${data[0][0]} ` : ""}</div>
            <div className="item">{data[1][1][1] ==="Over" ? ` ${data[1][0]} ` : ""}</div>
            <div className="item">{data[2][1][1] ==="Over" ? ` ${data[2][0]} ` : ""}</div>
            than you should have taken. We recommends you to reduce it for your healthy diet.<br />
            Challenge eating fresh meals of FOR:EAT that could help keep you energetic.
          </Card> :
          data[0][1][1] === "Low" || data[1][1][1] === "Low" || data[2][1][1] === "Low" ? 
          <Card bc="#FFFFFF" p="0.8rem 0.2rem 0 0.2rem" m="0" width="14.5rem" height="8rem" align="start" color="#000" fw="400" fs="1rem">
            You are the best owner for your own body. You've been eating in moderation with all three of the factors you should limit your intake.<br />
            Keep Going and make your body healthier.
          </Card> :
          <Card bc="#FFFFFF" p="0.8rem 0.2rem 0 0.2rem" m="0" width="14.5rem" height="8rem" align="start" color="#000" fw="400" fs="1rem">
            You are trying to do your best to reduce intake of these factors. Cheer up! you can do better next time. We provide information of each nutrient that you can easily check on the Recipe. 
          </Card>
        }
      </TextContainer>
    </Container>
  )
}

export default Restriction;