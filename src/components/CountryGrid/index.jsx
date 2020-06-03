import React from 'react';
import styled from 'styled-components';
import CountryCard from '../CountryCard';

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-column-gap: 4rem;
  grid-row-gap: 2rem;
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