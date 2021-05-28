import React from 'react'
import '../styles/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from'../pages/Home';
import Contact from'../pages/Contact';
import Folio from'../pages/Folio';
import ScrollToTop from './ScrollToTop';
import Mentions from '../pages/Mentions';
import Ui from '../pages/Ui';
import Dev from '../pages/Dev';
import Single from '../pages/Single';


function App(){
    return(
        <>
        <Router>
        <Header />
        <Switch>
          <Route path='/' exact />
        </Switch>
        <ScrollToTop />
        <Route path='/' exact component = {Home} />
        <Route path='/contact' exact component = {Contact} />
        <Route path='/folio' exact component = {Folio} />
        <Route path='/mentions-legales' exact component = {Mentions}/>
        <Route path='/uidesign' exact component = {Ui}/>
        <Route path='/dev' exact component = {Dev}/>
        <Route path="/post/:slug" exact component ={Single} />
        <Footer />
        </Router>
        </>
    )
}

export default App;


