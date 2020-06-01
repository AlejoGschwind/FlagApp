import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 350px;
  border: ${props => !props.darkMode && '1px solid #eaeced'};
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  background: ${props => props.darkMode ? '#415465' : 'white'};
`;

const Flag = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const DescriptionBox = styled.div`
  padding: 15px;
  h4 {
    font-size: 18px;
    text-align: center;
  }
  h6 {
    margin: 10px 0;
    font-size: 16px;
  
    span {
      font-weight: lighter;
    }
  }
`;

const ContryCard = ({flag, name, capital, population, region, code, darkMode}) => {

  return (
    <Wrapper darkMode={darkMode}>
      <Flag src={flag} alt={code}/>
      <DescriptionBox>
        <h4>{name}</h4>
        <h6>Capital: <span>{capital ? capital : 'None'}</span></h6>
        <h6>Population: <span>{population}</span></h6>
        <h6>Region: <span>{region}</span></h6>
      </DescriptionBox>
    </Wrapper>
  );
};

export default ContryCard;