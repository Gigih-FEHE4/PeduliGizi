import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import LandingPage from './pages/LandingPage';

function App() {
    return ( 
        <div className='App'>
            <Router>
                <Switch>
                    <Route path="/">
                        <LandingPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;