import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  background: ${ props => props.theme.secondary};
  // border: 1px solid rgba(227, 227, 227, .6);
  border: None;
  border-radius: 10px;
  height: 34px;
  padding: 0 1em;
  font-size: 16px;
  color: ${ props => props.theme.fontColor};

  &:focus {
    outline: none;
  }
`;

const SelectInput = ({filter, setFilter}) => (
  <Select
    name="region"
    value={filter}
    onChange={(e) => {
      setFilter(e.target.value);
    }}
  >
    <option value="">Select region...</option>
    <option value="Africa">Africa</option>
    <option value="Americas">Americas</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
    <option value="Polar">Polar</option>
  </Select>
);

export default SelectInput;
