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
import MenuByTypePage from './pages/MenuByTypePage';
import DaftarMenu from './pages/DaftarMenu';
import ChildDetailPage from './pages/ChildDetailPage';

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
                    <Route path="/child/:id">
                        <ChildDetailPage />
                    </Route>
                    <Route path="/menu/type/:type">
                        <MenuByTypePage />
                    </Route>
                    <Route path="/menu/:id">
                        <MenuDetailPage />
                    </Route>
                    <Route path="/daftar-menu">
                        <DaftarMenu />
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