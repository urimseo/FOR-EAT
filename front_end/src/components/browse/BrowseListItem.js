import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { getBrowseList } from "api/BrosweApi";
import Card4 from "components/commons/Card4";
import { CircularProgress } from "@mui/material";

const Title = styled.div`
  font-size: 2rem;
  font-weight: 00;
  margin: 2rem 0 0.3rem 0.7rem;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BrowseListItem = ({ keyword, title }) => {
  const [resultList, setResultList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getBrowseListItem = async () => {
    const response = await getBrowseList(1, keyword);
    setResultList(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getBrowseListItem();
  }, [isLoading]);

  return (
    <div>
      <Title>{title}</Title>
      <CardContainer>
        {isLoading ? <CircularProgress /> : null}
        {resultList.map((result, idx) => {
          // 5개만 잘라서 보여주기
          if (idx < 5) {
            return <Card4 key={idx} {...result} />;
          }
        })}
      </CardContainer>
    </div>
  );
};

export default BrowseListItem;