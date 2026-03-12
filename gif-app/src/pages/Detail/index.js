// import StaticContext from "../../context/StaticContext";
// import GifsContext from "../../context/GifsContext";
import React from 'react';
import {Redirect} from 'wouter'
import {Helmet} from 'react-helmet'
import Gif from "components/Gif/Gif";
import useSingleGif from 'hooks/useSingleGif';

import "./styles.css"

export default function Detail({ params }) {
    // const staticConfig = useContext(StaticContext)
    // console.log(staticConfig)

    const {gif, isLoading, isError} = useSingleGif({id: params.id})

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
      </>
    )
  }

  if (isError) return <Redirect to='/404' />
  if (!gif) return null

  return <div className='gifExcluido'>
    <Gif {...gif}/>
    </div>
}