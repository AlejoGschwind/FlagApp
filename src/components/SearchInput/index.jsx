import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background: ${ props => props.darkMode ? '#415465' : '#fefefe'};
  border: ${ props => props.darkMode ? '1px solid #415465' :'1px solid  #e0e0e0'};
  height: 32px;
  border-radius: 10px;
  padding: 0 2em;
  font-size: 16px;
  color: ${ props => !props.darkMode ? '#415465' : '#fefefe'};
  &::placeholder {
    color: ${ props => !props.darkMode ? 'gray' : '#fefefe'};
  }

  &:focus {
    outline: none;
  }
`;

const SearchInput = ({ search, setSearch, darkMode }) => (
  <Input
    placeholder="Search..."
    name="search"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    darkMode={darkMode}
  />
);

export default SearchInput;