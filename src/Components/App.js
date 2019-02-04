import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { jsonData } from '../constant';
import './../App.css';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
import Button from './re-use/Button';
class App extends Component {
  gotoRoute = (routePath) => {
    this.props.history.push(routePath);
  }
  render() {
    const routes = (
      jsonData.map((data, index) => {
        return (<Route key={index} path={data.path} exact component={data.component} />
        );
      })
    );
    return (
      <div className="App">
        <Header />
        <div className="btn-routes">
          {
            jsonData.map((data, index) => {
              return (
                <Button handleButtonClick={() => this.gotoRoute(data.path)} val={data.name} key={index} />
              );
            })
          }
        </div>
        <Switch>
          {
            routes
          }
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
