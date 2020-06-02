import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import CoutryGrid from './components/CountryGrid';

import axios from 'axios';
import Spiner from './components/Spiner';
import SearchInput from './components/SearchInput';

const Wrapper = styled.div`
  background: ${props => props.darkMode ? '#344350' : 'white'};
  color: ${props => !props.darkMode ? '#415465' : 'white'};
  min-height: 100vh;
`;

const Body = styled.div`
  min-height: calc(100vh - 71px);
  width: 80vw;
  margin: auto;
  padding: 0 2em;
`;

const SpinerWrapper = styled.div`
  height: calc(100vh - 71px);
  display: flex;
  justify-content: center;
  align-items:center;
`;

const FlitersWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em 0;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState('');
  const countries = useCountries();

  const filteredCountries = countries.filter((country) => country.name.toLowerCase().startsWith(search.toLowerCase()))

  return (
    <Wrapper className="App" darkMode={darkMode}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Body>
        {
          countries.length === 0 ?
            <SpinerWrapper>
              <Spiner />
            </SpinerWrapper>
          :
            <>
              <FlitersWrapper>
                <SearchInput
                  search={search}
                  setSearch={setSearch}
                  darkMode={darkMode}
                />
              </FlitersWrapper>
              <CoutryGrid
                countries={filteredCountries}
                darkMode={darkMode}
              />
            </>
        }
      </Body>
    </Wrapper>
  );
};

function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const result = await axios(
        'https://restcountries.eu/rest/v2/all'
      );

      setCountries(result.data);
    };

    try {
      fetchCountries();
    } catch(err) {
      console.error(err);
    }
  }, [])

  return countries;
}

export default App;
