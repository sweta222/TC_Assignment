//import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Details';
const App = () => {
  
  return(
    <div>
      <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/details" component={Details}></Route>
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}
export default App;
