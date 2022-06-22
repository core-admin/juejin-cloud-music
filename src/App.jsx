import { useRoutes } from 'react-router-dom';
import _routes from './routes';
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';

function App() {
  const routes = useRoutes(_routes);
  return (
    <>
      <IconStyle />
      <GlobalStyle />
      {routes}
    </>
  );
}

export default App;
