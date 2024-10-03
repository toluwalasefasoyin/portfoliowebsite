import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home'; // Import your Home component
import About from './About'; // Import your About component
import Projects from './Projects'; // Import your Projects component
import Services from './Services'; // Import your Services component
import Contact from './Contact'; // Import your Contact component
import NotFound from './NotFound'; // Import your NotFound component

const MainRouter = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Me</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Me</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/services" component={Services} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} /> {/* Fallback for 404 page */}
            </Switch>
        </Router>
    );
};

export default MainRouter;
