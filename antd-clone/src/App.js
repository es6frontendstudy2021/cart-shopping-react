// import { Button } from './styles/Button'
import { Route } from 'react-router-dom'
import ButtonGroup from './containers/Button'
import GlobalStyles from './components/GlobalStyles'
import Buttons from './pages/ButtonPage'
import ModalPage from './pages/ModalPage'


function App() {
  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <Route exact path="/" component={Buttons} />
      <Route exact path="/button" component={Buttons} />
      <Route exact path="/modal" component={ModalPage} />
      {/* <ButtonGroup></ButtonGroup> */}
    </div>
  );
}

export default App;
