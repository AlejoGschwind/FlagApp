import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import Header from './components/Header';
import CoutryGrid from './components/CountryGrid';

import axios from 'axios';
import Spiner from './components/Spiner';
import SearchInput from './components/SearchInput';
import SelectInput from './components/SelectInput';

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
  align-items: center;
  justify-content: space-between;
  padding: 1em 0;
  height: 80px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: initial;
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState("");
  const countries = useCountries();

  const filteredCountries = countries
    .filter(country => country.region === filter || filter === "")
    .filter(country => country.name.toLowerCase().startsWith(search.toLowerCase()))

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
                <SelectInput
                  filter={filter}
                  setFilter={setFilter}
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
    ReactGA.initialize('UA-159941165-1');

    ReactGA.pageview(window.location.pathname + window.location.search);
  })

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
