// import { Button } from './styles/Button'
import { Route, NavLink } from 'react-router-dom'
import ButtonGroup from './containers/Button'
import GlobalStyles from './components/GlobalStyles'
import Buttons from './pages/ButtonPage'
import ModalPage from './pages/ModalPage'
import styled from 'styled-components'
import './App.css'

const CustomNav = styled.ul`
  overflow: hidden;
  > li {
    float:left;
    a {
      display:block;
      padding: 6px 10px;
      font-size:18px;
    }
  }
  .active-item{
    background-color: #ff6000;
    color: #fff;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <CustomNav className="left-nav">
        <li>
        <NavLink to="/button" activeClassName="active-item">
          Button
        </NavLink>
        </li>
        <li>
        <NavLink to="/modal"activeClassName="active-item">
          Modal
        </NavLink>
        </li>
      </CustomNav>
      
      <div className="app-container">
        <Route exact path="/" component={Buttons} />
        <Route exact path="/button" component={Buttons} />
        <Route exact path="/modal" component={ModalPage} />
        {/* <ButtonGroup></ButtonGroup> */}
      </div>
    </div>
  );
}

export default App;
