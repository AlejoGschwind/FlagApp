import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  background: ${ props => props.darkMode ? '#415465' : '#fefefe'};
  border: ${ props => props.darkMode ? '1px solid #415465' :'1px solid  #e0e0e0'};
  border-radius: 10px;
  height: 34px;
  padding: 0 2em;
  font-size: 16px;
  color: ${ props => !props.darkMode ? 'gray' : '#fefefe'};

  &:focus {
    outline: none;
  }
`;

const SelectInput = ({filter, setFilter, darkMode}) => (
  <Select
    name="region"
    value={filter}
    onChange={(e) => {
      setFilter(e.target.value);
    }}
    darkMode={darkMode}
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
