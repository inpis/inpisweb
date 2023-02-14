import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './helper/ScrollToTop';
import { GlobalStyle } from "./components/common/styles/global.js";
import HomeOne from './HomeOne';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import PageNotFound from './pages/404/PageNotFound';
import Services from './pages/services/Services';
import Application from './pages/services/all-services/applications/app-services/Applications';
import Career from './pages/career/Career';
import Products from './pages/products/Products';

function App() {
    return (
        <Router>
            <GlobalStyle /> 
            <ScrollToTop />
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL + "/"}`} component={HomeOne} />
                <Route path={`${process.env.PUBLIC_URL + "/about"}`} component={About} />
                <Route path={`${process.env.PUBLIC_URL + "/projects"}`} component={Projects} />
                <Route path={`${process.env.PUBLIC_URL + "/contact"}`} component={Contact} />
                <Route path={`${process.env.PUBLIC_URL + "/404"}`} component={PageNotFound} />
                <Route path={`${process.env.PUBLIC_URL + "/services"}`} component={Services} />
                <Route path={`${process.env.PUBLIC_URL + "/career"}`} component={Career} />
                <Route path={`${process.env.PUBLIC_URL + "/products"}`} component={Products} />
                <Route path={`${process.env.PUBLIC_URL + "/application-development"}`} component={Application} />

            </Switch>
        </Router>
    ) 
}
 
export default App;