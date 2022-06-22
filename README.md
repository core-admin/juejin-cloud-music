# [styled-components](https://styled-components.com/) 练习

```jsx
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';
import styled, { css, keyframes, withTheme, useTheme, ThemeProvider } from 'styled-components';
import React, { useState } from 'react';

console.dir(styled);

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

const Body = styled.div.attrs(props => {
  return {
    className: 'custom-body',
    'data-sid': 1,
    id: 'body',
    'data-flag': true,
  };
})`
  margin: 30px;
  color: blue;
  font-size: 30px;
`;

// 代码片段
const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Body2 = styled(Body).attrs({
  'data-sid': 2,
  title: 'body',
  ...flexCenter,
})`
  font-size: 40px;
  ${flexCenter}
`;

const MyImage = styled.img.attrs({
  src: 'https://pic3.zhimg.com/80/v2-1fab39dce91ca00eef00e9a9ce5bb5d6_720w.jpg',
})`
  width: 80%;
  margin: 30px;
  margin: 30px;
`;

let boxH = 100;

const Box = styled.div`
  width: 100px;
  height: ${({ h = 100 }) => h}px;
  background-color: pink;
  margin: 30px;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const FadeInButton = styled.button`
  animation: 1s ${fadeIn} ease-out;
`;

function App() {
  const [boxH, setBoxH] = useState(100);
  function changeHeight() {
    setBoxH(boxH + 5);
  }

  return (
    <div className='App'>
      <IconStyle />
      <GlobalStyle />
      <HeaderWrapper blue>
        111
        <span className='action'>action</span>
      </HeaderWrapper>
      {/* 
        作为组件的属性传递的优先级更高 但优先级不会高于组件定义时使用attrs方法设置的属性
        data-sid 并没有覆盖掉预定于的attrs中的 data-sid的值
      */}
      <Body data-sid='222' className='my-body' style={{ color: 'red' }}>
        BODY
      </Body>
      <Body2>Body2Body2</Body2>
      {/* <MyImage /> */}
      <Box h={boxH} className='box' />
      <button onClick={changeHeight}>修改box的高度</button>
      <hr />
      <FadeInButton>112233</FadeInButton>

      <hr />

      <ThemeProvider
        theme={{
          primaryColor: 'blue',
        }}
      >
        <ThemeComp />
      </ThemeProvider>
    </div>
  );
}

// 使用 withTheme 进行包装 在props.theme中获取
// 获取使用 useTheme hook 获取 theme
const ThemeComp = withTheme(props => {
  const theme = useTheme();
  console.log('theme', theme, props);
  return 'theme';
});

export default App;
```