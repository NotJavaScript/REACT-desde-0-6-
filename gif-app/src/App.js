import { Link, Route } from "wouter";
import Detail from 'pages/Detail';
import React from 'react';
import SearchResults from 'pages/SearchResults';
import StaticContext from 'context/StaticContext';
import {GifsContextProvider} from 'context/GifsContext';
import './App.css';

const HomePage = React.lazy(() => import("pages/Home"));

function App() {
  return (
    <StaticContext.Provider value={
      {
        name: 'esto-es-con-provider',
        contextoRecibido: true
      }}>
    <div className="App">
      <section className='App-content'>
        <h1>Capítulo 6 - REACT desde 0</h1>
        <Link to='/' className={"PaginaPrincipal"}>Página principal</Link>
        <GifsContextProvider>
                <Route component={HomePage} path="/" />
                <Route
                  component={SearchResults}
                  path="/search/:keyword/:rating?"
                />
                <Route component={Detail} path="/gif/:id" />
        </GifsContextProvider>
      </section>
    </div>
    </StaticContext.Provider>
  );
}

export default App;
