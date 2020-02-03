import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  SecretPage,
  LoginPage
} from "../pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StarshipDetailes } from "../sw-components";
import "./app.css";

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new service()
      };
    });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="app">
              <div className="container">
                <Header onServiceChange={this.onServiceChange} />
                <RandomPlanet />
                <Switch>
                  <Route
                    path="/"
                    render={() => <h2>Welcome to StarDB</h2>}
                    exact
                  />
                  <Route path="/people/:id?" component={PeoplePage} />
                  <Route path="/planets" component={PlanetsPage} />
                  <Route path="/starships" exact component={StarshipsPage} />
                  <Route
                    path="/starships/:id"
                    render={({ match }) => {
                      const { id } = match.params;
                      return <StarshipDetailes itemId={id} />;
                    }}
                  />
                  <Route
                    path="/login"
                    render={() => (
                      <LoginPage
                        isLoggedIn={isLoggedIn}
                        onLogin={this.onLogin}
                      />
                    )}
                  />
                  <Route
                    path="/secret"
                    render={() => <SecretPage isLoggedIn={isLoggedIn} />}
                  />
                  <Route
                    render={() => {
                      return (
                        <div>
                          <h2>404 error</h2>
                          <p>We can't find that page in our galaxy</p>
                        </div>
                      );
                    }}
                  />
                </Switch>
              </div>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
