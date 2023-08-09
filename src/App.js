import './App.css';

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route   
} from "react-router-dom";


export default class App extends Component {
  // c = "John";
  pageSize = 15;
  render() {
    return (<>
      <Router>
        {/* Hello my first class based component {this.c} */}
        <NavBar />
        <Routes>
          <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} apiKey="d99346252ddb405a9dff2be6126ea186" country="in" category="general" />}>
          </Route>
          <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} apiKey="d99346252ddb405a9dff2be6126ea186" country="in" category="business" />}>
          </Route>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} apiKey="d99346252ddb405a9dff2be6126ea186" country="in" category="entertainment" />}>
          </Route>
          <Route exact path="/health" element={<News pageSize={this.pageSize} key="health"apiKey="d99346252ddb405a9dff2be6126ea186" country="in" category="health" />}>
          </Route>
          <Route exact path="/science" element={<News pageSize={this.pageSize} key="science" apiKey="d99346252ddb405a9dff2be6126ea186" country="in" category="science" />}>
          </Route>
          <Route exact path="/sports" element={<News pageSize={this.pageSize} key="sports" apiKey="d99346252ddb405a9dff2be6126ea186" country="in" category="sports" />}>
          </Route>
          <Route exact path="/technology" element={<News pageSize={this.pageSize} key="technology" apiKey="d99346252ddb405a9dff2be6126ea186" country="in" category="technology" />}>
          </Route>
        </Routes>
      </Router>
      </>
    );
  }
};
