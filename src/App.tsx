import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ArticleListPage from './pages/ArticleListPage';

function App() {
    return ( 
        <div className='App'>
            <Router>
                <Switch>
                    <Route path="/article">
                        <ArticleListPage />
                    </Route>
                    <Route path="/">
                        <LandingPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;