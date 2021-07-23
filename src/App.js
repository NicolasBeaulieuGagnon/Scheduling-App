import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./Components/GlobalStyles";
import NavBar from "./Components/NavBar";
import Homepage from "./Pages/Homepage";
import Analytics from "./Pages/Analytics";
import UserAccount from "./Pages/UserAccount";
import FAQBoard from "./Pages/FAQBoard";

const App = () => {
  // Adding comments to test out branch
  // and things that could go wrong.
  const myFunction = () => {};
  return (
    <Wrapper>
      <GlobalStyle />
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/analytics">
            <Analytics />
          </Route>
          <Route exact path="/profile">
            <UserAccount />
          </Route>
          <Route exact path="/faq">
            <FAQBoard />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default App;
