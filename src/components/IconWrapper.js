import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg{
    margin: 36px 0;
  }
  padding: 8px;
`

export default ({children}) =>
  <IconWrapper>
    { children }
  </IconWrapper>
