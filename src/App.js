import './css/assets.css';
import './css/App.css';
import $ from 'jquery';
import './js/favorite.js';
import React from 'react';
import Main from './components/Main';

function App() {
  return (
    <React.Fragment>
      <section className="navbar">
        <div className="navbar">
          <h1 className="navbar">RecipeBooks</h1>
        </div>
      </section>

      <section className="main">
        <Main />
      </section>

      <footer className="footer">
        <p>Developed by Aynun Nissa</p>
      </footer>
    </React.Fragment>
  );
}

export default App;
