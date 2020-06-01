import React from 'react';
import styled from 'styled-components';
import CountryCard from '../CountryCard';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  grid-column-gap: 80px;
  grid-row-gap: 2.3em;
  padding: 3em 0;
`;

const CoutryGrid = ({countries, darkMode}) => {

  return (
    <Wrapper>
      {
        countries.map((country) => (
          <CountryCard
            key={country.alpha2Code}
            flag={country.flag}
            name={country.name}
            capital={country.capital}
            population={country.population}
            region={country.region}
            code={country.alpha2Code}
            darkMode={darkMode}
          />
        ))
      }
    </Wrapper>
  );
}

export default CoutryGrid;