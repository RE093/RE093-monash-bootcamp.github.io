import React from 'react';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Nav from "./components/Nav/Index";
import Contact from "./components/Contact/Contact";
import ContactContext from "./utils/ContactContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import "./pages/response.css";

function App() {

  const [contactTimer, setContactTimer] = React.useState(false)

  React.useEffect(() => {

    setTimeout(() => {
      setContactTimer(true)
    }, 60000);
  })

  return (
    <div>
      <ContactContext.Provider value={[contactTimer, setContactTimer]}>
        <Router>
          <Nav />

          <Switch>
            <Route exact path="/home">
              <Redirect to="/" />
            </Route>
            <Route exact path="/">
              <Home />
              {contactTimer ? 
                <Contact />
                :
                null
              }
            </Route>

            <Route exact path="/projects">
              <Projects />
              <Skills />
              {contactTimer ? 
                <Contact />
                :
                null
              }
            </Route>

          </Switch>
        </Router>
      </ContactContext.Provider>
    </div>
  );
}

export default App;
