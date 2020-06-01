import React , { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as MoonLightIcon } from '../../icons/moon-light.svg';
import { ReactComponent as MoonDarkIcon } from '../../icons/moon-dark.svg';

const Wrapper = styled.header`
  background: ${props => props.darkMode ? '#415465' : 'white'};
  color: ${props => !props.darkMode ? '#415465' : 'white'};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 0.1px solid #e9e9e9;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const DarkMode = styled.a`
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const MoonDark = styled(MoonDarkIcon)`
  height: 14px;
  width: 14px;
  margin: 0 5px;
`;

const MoonLight = styled(MoonLightIcon)`
  height: 14px;
  width: 14px;
  margin: 0 5px;
`;

const Header = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Wrapper darkMode={darkMode}>
      <Logo>
        Flag App
      </Logo>
      <DarkMode onClick={() => setDarkMode(!darkMode)}>
        {
          darkMode ?
            <MoonLight />
          :
            <MoonDark />
        }
        Dark Mode
      </DarkMode>
    </Wrapper>
  )
};

export default Header;