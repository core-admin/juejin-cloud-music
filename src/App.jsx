import { useRoutes } from 'react-router-dom';
import _routes from './routes';
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';
import styled from 'styled-components';

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
  const routes = useRoutes(_routes);
  return (
    <>
      <IconStyle />
      <GlobalStyle />
      <HeaderWrapper blue>
        111
        <span className='action'>action</span>
      </HeaderWrapper>
      {routes}
    </>
  );
}

export default App;
