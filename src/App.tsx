import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Login from './Components/Login';


function App() {
    return ( 
        <div className='App'>
            <Router>
                <Switch>
                    <Route path="/">
                        <LandingPage />
                    </Route>
                    <Route path="/login" exact component={Login} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;