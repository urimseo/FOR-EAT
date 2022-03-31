import React, { useState } from "react";
import styled from "styled-components";
import BarCharts from "react-apexcharts";

const Container = styled.div`
  display: block;
  margin: 0 1rem;
  width: 65%;
`

const BarChart = () => {
  const [ data, setData ] = useState([
    { x: 'Calories', y: 1000 },
    { x: 'Carbohydrate', y: 653, }, 
    { x: 'Protein', y: 813, fillColor: '#EB8C87', strokeColor: '#C23829' }, 
    { x: 'Fat', y: 713 },
    { x: 'Saturated Fat', y: 713 },
    { x: 'Sodium', y: 732 },
    { x: 'Fiber', y: 432 },
    { x: 'Fiber', y: 432 },
    { x: 'Sugar', y: 532 },
  ])

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
            'Cholesterol', 'Sodium', "Fiber", 'Cholesterol', 'Sugar'],
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