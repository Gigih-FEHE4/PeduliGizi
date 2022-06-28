/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import DataAnak from './Components/DataAnak';
import MenuDetailPage from './pages/MenuDetailPage';
import MenuByTypePage from './pages/MenuByTypePage';
import ChildDetailPage from './pages/ChildDetailPage';
import MenuPage from './pages/MenuPage';
import RecordAnak from './Components/RecordAnak';
import HomePage from './pages/HomePage';

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
                    <Route path="/home">
                        <HomePage />
                    </Route>
                    <Route path="/dataanak">
                        <DataAnak />
                    </Route>
                    <Route path="/recordanak">
                        <RecordAnak />
                    </Route>
                    <Route path="/article/:id">
                        <ArticleDetailPage />
                    </Route>
                    <Route path="/article">
                        <ArticleListPage />
                    </Route>
                    <Route path="/child/:id">
                        <ChildDetailPage />
                    </Route>
                    <Route path="/menu/type/:type">
                        <MenuByTypePage />
                    </Route>
                    <Route path="/menu/:id">
                        <MenuDetailPage />
                    </Route>
                    <Route path="/menu">
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