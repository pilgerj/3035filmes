import Header from './components/Header';
import Routes from '../src/routes/'
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <Header />
      
      <BrowserRouter>
        <Routes />
      </BrowserRouter>

      <GlobalStyle/>
    </>
  );
}

export default App;
