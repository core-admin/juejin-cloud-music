import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';
import styled from 'styled-components';
import React, { useState } from 'react';

const HeaderWrapper = styled.div`
  z-index: 1;
  position: relative;
  height: 56px;
  border-bottom: 1px solid red;
  .action {
    font-size: 20px;
    & {
      color: yellow;
    }
    color: ${props => {
      // console.log(props);

      return props.blue ? 'blue' : 'red';
    }};
    &:hover {
      color: green;
    }
  }
`;

function App() {
  return (
    <div className='App'>
      <IconStyle />
      <GlobalStyle />
      <HeaderWrapper blue>
        111
        <span className='action'>action</span>
      </HeaderWrapper>
    </div>
  );
}

export default App;
