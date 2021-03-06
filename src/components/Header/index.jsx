import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MoonLightIcon } from '../../icons/moon-light.svg';
import { ReactComponent as MoonDarkIcon } from '../../icons/moon-dark.svg';


const Wrapper = styled.header`
  background: ${props => props.theme.secondary};
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  border-bottom: ${props => `1px solid ${props.theme.secondary}`};
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

const Header = ({darkMode, setDarkMode}) => {
  return (
    <Wrapper>
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
        {darkMode ? 'Light' : 'Dark'} Mode
      </DarkMode>
    </Wrapper>
  )
};

export default Header;