import React, { Component } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Navigation from './organisms/Navigation';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/ingredients">Ingredients</Link>
          <Link to="/signIn">SignIn</Link>
          <Link to="/signUp">SignUp</Link>
        </Navigation>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </>
    );
  }
}
