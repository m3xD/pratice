import './App.css';

import React from "react";
import {Grid, Typography, Paper, Switch} from "@mui/material";
import {BrowserRouter as Router, HashRouter, Route, Routes} from "react-router-dom";
import ReactDOM from "react-dom";

import TopBar from "./components/TopBar";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import UserPhotos from "./components/UserPhotos";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
    };
  }

  handleUserNameChange = userName => {
    this.setState({userName: userName});
  };

  render() {
    return (
        <HashRouter>
          <div>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <Switch>
                  <Route path="/users/:userId" render={props => <TopBar {...props} userName={this.state.userName}/>}/>
                  <Route path="/photos/:userId" render={props => <TopBar {...props} userName={this.state.userName}/>}/>
                  <Route render={props => <TopBar {...props} userName={this.state.userName}/>}/>
                </Switch>
              </Grid>
              <div className="topbar-buffer"/>
              <Grid item sm={3}>
                <Paper className="cs142-main-grid-item" elevation={3}>
                  <UserList/>
                </Paper>
              </Grid>
              <Grid item sm={9}>
                <Paper className="grid-item" elevation={3}>
                  <Switch>
                    <Route exact path="/" render={() => (
                        <Typography variant="h3">Welcome to my photosharing app!</Typography>
                    )}/>
                    <Route path="/users/:userId"
                           render={props => <UserDetail {...props} handler={this.handleUserNameChange}/>}/>
                    <Route path="/photos/:userId"
                           render={props => <UserPhotos {...props} handler={this.handleUserNameChange}/>}/>
                    <Route path="/users" component={UserList}/>
                    {/* Route's path uses ":userId" so that component can access that parameter */}
                  </Switch>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </HashRouter>
    );
  }
}



ReactDOM.render(<App />, document.getElementById("root"));

export default App;
