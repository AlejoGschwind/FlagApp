import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background: ${ props => props.theme.secondary};
  // border: 1px solid rgba(227, 227, 227, .6);
  border: None;
  height: 32px;
  border-radius: 10px;
  padding: 0 1em;
  font-size: 16px;
  color: ${ props => props.theme.frontColor};
  
  &::placeholder {
    color: ${ props => props.theme.fontColor};
  }

  &:focus {
    outline: none;
  }
`;

const SearchInput = ({ search, setSearch }) => (
  <Input
    placeholder="Search..."
    name="search"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
);

export default SearchInput;