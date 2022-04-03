import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BarCharts from "react-apexcharts";
import nutrientInfo from "assets/nutrient";


const Container = styled.div`
  display: block;
  margin: 0 1rem;
  width: 65%;
`

const BarChart = ({ nutrient, user }) => {
  // const [ age, setAge ] = useState("")
  // const [ gender, setGender ] = useState("")
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

  const [ data, setData ] = useState(
    [
      { x: 'Calories', y: Ratio(nutrient.calories, 667) },
      { x: 'Carbohydrate', y: Ratio(nutrient.carbohydrate,  57), }, 
      { x: 'Protein', y: Ratio(nutrient.protein, 35), fillColor: '#EB8C87', strokeColor: '#C23829' }, 
      { x: 'Fat', y: Ratio(nutrient.fat, 25) },
      { x: 'Saturated Fat', y: Ratio(nutrient.saturated_fat, 4) },
      { x: 'Sodium', y: Ratio(nutrient.sodium, 500) },
      { x: 'Cholesterol', y: Ratio(nutrient.cholesterol, 100) },
      { x: 'Sugar', y: Ratio(nutrient.sugar, 27) },
      { x: 'Fiber', y: Ratio(nutrient.fiber, 8) },
    ]
  )


  function Ratio(ate, avg) {
    // % = 내가 먹은 값/평균값
    return ((ate/avg)*100).toFixed()
  }

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
      { x: 'Calories', 
        y: Ratio(nutrient.calories, standard.calories), 
        fillColor: (Ratio(nutrient.protein, standard.protein) >= 110 ? '#EB8C87' : 
        110 > Ratio(nutrient.protein, standard.protein) >= 90 ? '#008FFB': 
        90 > Ratio(nutrient.protein, standard.protein) ? "#FEC25C" : null)
      },
      { x: 'Carbohydrate', 
        y: Ratio(nutrient.carbohydrate, standard.carbohydrate), 
        fillColor: (Ratio(nutrient.carbohydrate, standard.carbohydrate) >= 110 ? '#EB8C87': 
        110 > Ratio(nutrient.carbohydrate, standard.carbohydrate) >= 90 ? '#008FFB' : 
        90 > Ratio(nutrient.carbohydrate, standard.carbohydrate) ? "#FEC25C": null)
      }, 
      { x: 'Protein', 
        y: Ratio(nutrient.protein, standard.protein), 
        fillColor: (Ratio(nutrient.protein, standard.protein) >= 110 ? '#EB8C87': 
        110 > Ratio(nutrient.protein, standard.protein) >= 90 ? '#008FFB' :
        90 > Ratio(nutrient.protein, standard.protein) ? "#FEC25C": null)
      }, 
      { x: 'Fat', 
        y: Ratio(nutrient.fat, standard.fat), 
        fillColor: (Ratio(nutrient.fat, standard.fat) >= 110 ? '#EB8C87':
        110 > Ratio(nutrient.fat, standard.fat) >= 90 ? '#008FFB' : 
        90 > Ratio(nutrient.fat, standard.fat) ? "#FEC25C": null)
      },
      { x: 'Saturated Fat', 
        y: Ratio(nutrient.saturated_fat, standard.saturated_fat),
        fillColor: (Ratio(nutrient.saturated_fat, standard.saturated_fat) >= 110 ?'#EB8C87':
        110 > Ratio(nutrient.saturated_fat, standard.saturated_fat) >= 90 ? '#008FFB' : 
        90 > Ratio(nutrient.saturated_fat, standard.saturated_fat) ? "#FEC25C": null)
      },
      { x: 'Sodium', 
        y: Ratio(nutrient.sodium, standard.sodium),
        fillColor: (Ratio(nutrient.sodium, standard.sodium) > 110 ? '#EB8C87': 
        110 > Ratio(nutrient.sodium, standard.sodium) >= 90 ? '#008FFB' : 
        90 > Ratio(nutrient.sodium, standard.sodium) ? "#FEC25C": null)
      },
      { x: 'Cholesterol', 
        y: Ratio(nutrient.cholesterol, standard.cholesterol), 
        fillColor: (Ratio(nutrient.cholesterol, standard.cholesterol) >= 110 ?'#EB8C87':
        110 > Ratio(nutrient.cholesterol, standard.cholesterol) >= 90 ? '#008FFB' : 
        90 > Ratio(nutrient.cholesterol, standard.cholesterol) ? "#FEC25C": null)
      },
      { x: 'Sugar', 
        y: Ratio(nutrient.sugar, standard.sugar), 
        fillColor: (Ratio(nutrient.sugar, standard.sugar) >= 110 ?'#EB8C87' :
        110 > Ratio(nutrient.sugar, standard.sugar) >= 90 ? '#008FFB' : 
        90 > Ratio(nutrient.sugar, standard.sugar) ? "#FEC25C": null)
      },
      { x: 'Fiber', 
        y: Ratio(nutrient.fiber, standard.fiber), 
        fillColor: (Ratio(nutrient.fiber, standard.fiber) < 100 ?'#fec25c': '#008FFB')  //  FIBER(+) : 100이상이면 적정, 미만이면 부족
      },
    ])
  }
  
  useEffect(() => {
  }, [age, gender])

  useEffect(() => {
    getNutrientInfo()
  }, [age, gender])

  useEffect(() => {
    getData()
  }, [standard])

  return (
    <Container>
        <BarCharts
          type="bar"
          series={[
            { data: data, },
          ]}
          options={{
            chart: {
              type: 'bar',
              height: "auto",
              width: "100%",
              toolbar: { show: false, },
              /* background: "transparent", */
              background: "#ffffff",
              borderRadius: 10
            },
            plotOptions: { 
              bar: { borderRadius: 4, columnWidth: '40%',},
            },
            dataLabels: { 
              enabled: false,
              colors: "#fec25c",
              fontSize: "12px",
            },
            xaxis: {
              categories: [ "Calories", "Carbohydrate", "Protein", "Fat", "Saturated Fat", 
              'Sodium', 'Cholesterol', 'Sugar', "Fiber"],
            },
            // fill: {
            //   colors: "#fec25c",
            // },
            title: {
              text: "Intake Proportion of Nutriton",
              align: 'left',
              margin: 20,
              offsetX: 0,
              offsetY: 0,
              floating: false,
              style: {
                fontSize:  '24px',
                fontWeight:  'bold',
                fontFamily:  undefined,
                color:  '#263238'
              },
            }
          }}
      />
    </Container>
  );
}

export default BarChart;