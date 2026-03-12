import React, {useCallback} from "react";
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import { useGifs } from "hooks/useGif";
import {Helmet} from 'react-helmet'
import TrendingSearches from "components/TrendingSearches"
import SearchForm from "components/SearchForm";
import { useLocation } from "wouter";

export default function Home() {
  const {gifs} = useGifs()
  const [path, pushLocation] = useLocation()

  // Importante el uso de useCallBack para mejorar el rendimiento de nuestra App.
  // Es importante que para que funcione correctamente añadir el componente superior:
  // React.memo(${componenteARenderizar})
  const handleSubmit = useCallback(({keyword}) => {
    pushLocation(`/search/${keyword}`)
  }, [pushLocation])

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <header className="o-header">
        <SearchForm onSubmit={handleSubmit}/>
      </header>
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
          </div>
          <div className="App-category">
            <TrendingSearches/>
          </div>
        </div>
      </div>
    </>
  )
}