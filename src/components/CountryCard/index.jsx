import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  height: 350px;
  border: ${props => `1px solid ${props.theme.primary}`};
  -webkit-box-shadow: 17px 54px 161px -100px rgba(72,74,84,1);
  -moz-box-shadow: 17px 54px 161px -100px rgba(72,74,84,1);
  box-shadow: 17px 54px 161px -100px rgba(72,74,84,1);
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  background: ${props => props.theme.secondary};
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

const ContryCard = ({flag, name, capital, population, region}) => {

  return (
    <Wrapper>
      <Flag
        src={flag}
        alt={name}
      />
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