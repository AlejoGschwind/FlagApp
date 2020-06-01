import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 4px solid white;
  border-color: #415465 #415465 #415465 white;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg);
  }
}
`;

const Spiner = () => (
  <Wrapper />
);

export default Spiner;