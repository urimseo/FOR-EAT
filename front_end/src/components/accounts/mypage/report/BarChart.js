import React, { useState } from "react";
import styled from "styled-components";
import BarCharts from "react-apexcharts";

const Container = styled.div`
  display: block;
  margin: 0 1rem;
  width: 65%;
`

const BarChart = ({ nutrient }) => {
  
  const data = [
    { x: 'Calories', y: Ratio(nutrient.calories, 667) },
    { x: 'Carbohydrate', y: Ratio(nutrient.carbohydrate, 81), }, 
    { x: 'Protein', y: Ratio(nutrient.protein, 35), fillColor: '#EB8C87', strokeColor: '#C23829' }, 
    { x: 'Fat', y: Ratio(nutrient.fat, 18.5) },
    { x: 'Saturated Fat', y: Ratio(nutrient.saturated_fat, 667) },
    { x: 'Sodium', y: Ratio(nutrient.sodium, 667) },
    { x: 'Cholesterol', y: Ratio(nutrient.cholesterol, 100) },
    { x: 'Sugar', y: Ratio(nutrient.sugar, 16.7) },
    { x: 'Fiber', y: Ratio(nutrient.fiber, 8.3) },
  ]

  function Ratio(ate, avg) {
    // % = 내가 먹은 값/평균값
    return ((ate/avg)*100).toFixed()
  }


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