import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Chart from 'react-apexcharts'


const Container = styled.div`
  display: flex;
  margin: 0 1rem;
  width: 60.5%;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.4rem 2rem 1.4rem 2rem;
  margin: 1rem 0 0 0;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  .title { 
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0;
    margin: 0 0 1rem 0;
  }
  .content {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4rem;
  }
`

const FlexContainer = styled.div`
  display: flex;
  
`

const DoughnutChart = ({ category }) => {
  const [ categories, setCategories ] = useState([])
  const [ data, setData ] = useState([])
  
  const getCategories = () => {
    if (category) {
      setCategories(category.map((item, idx) => item[0]))
    }
  }
  const getData = () => {
    if (category) {
      setData(category.map((item, idx) => item[1]))
    }
  }

  useEffect(() => {
    getCategories()
  }, [category])
  useEffect(() => {
    getData()
  }, [category])

  return (
    <Container className="donut">
      <FlexContainer>
        <TextContainer>
          <div className="title">Top 3 :<br /> Most Eaten Categories</div>
          { categories ? categories.map((category, idx) => {
            if (idx < 3 ) {
              return (
                <li className='content'>{category}</li>
              )
            }
          })
          : null}
        </TextContainer>
        <FlexContainer>
          <Chart 
            series={data} 
            type="donut" 
            width="380" 
            options={{ 
              // labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'etc'],
              labels: categories,
              chart: {
                width: 380,
                type: 'donut',
              },
              plotOptions: {
                pie: {
                  startAngle: -90,
                  endAngle: 270
                }
              },
              dataLabels: {
                enabled: false
              },
              theme: {
                palette: 'palette2' // upto palette10
              },
              legend: {
                formatter: function(val, opts) {
                  return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
              },
            }} 
          />
        </FlexContainer>
      </FlexContainer>
    </Container>
  );

}

export default DoughnutChart;