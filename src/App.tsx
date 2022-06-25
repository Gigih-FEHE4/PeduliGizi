import './App.css';
import {
    HashRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import MenuDetailPage from './pages/MenuDetailPage';
import MenuByType from './pages/MenuByType';
import MenuPage from './pages/MenuPage';

function App() {
    return ( 
        <div className='App'>
            <Router>
                <Switch>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/article/:id">
                        <ArticleDetailPage />
                    </Route>
                    <Route path="/article">
                        <ArticleListPage />
                    </Route>
                    <Route path="/menu/type/:type">
                        <MenuByType />
                    </Route>
                    <Route path="/menu/:id">
                        <MenuDetailPage />
                    </Route>
                    <Route path="/menupage">
                        <MenuPage />
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