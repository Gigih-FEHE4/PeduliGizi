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
import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';
import AddChildPage from './pages/AddChildPage';
import MenuDetailPage from './pages/MenuDetailPage';
import MenuByTypePage from './pages/MenuByTypePage';
import ChildDetailPage from './pages/ChildDetailPage';
import MenuPage from './pages/MenuPage';
import AddRecordPage from './pages/AddRecordPage';
import HomePage from './pages/HomePage';
import Forgotpassword from './Components/Forgotpassword';

function App() {
    return ( 
        <div className='App'>
            <Router>
                <Switch>
                    <Route path="/forgotpassword">
                        <Forgotpassword />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/home">
                        <HomePage />
                    </Route>
                    <Route path="/child/add-record">
                        <AddRecordPage />
                    </Route>
                    <Route path="/child/add">
                        <AddChildPage />
                    </Route>
                    <Route path="/child/:id">
                        <ChildDetailPage />
                    </Route>
                    <Route path="/article/:id">
                        <ArticleDetailPage />
                    </Route>
                    <Route path="/article">
                        <ArticleListPage />
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