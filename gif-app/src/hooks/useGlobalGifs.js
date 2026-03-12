import React, { useContext } from "react";
import GifsContext from "context/GifsContext";

export default function useGlobalGifs () {

    // --------------------------------------------------------------------------------------------------------------------------
    // Este tipo de forma de utilizar un contexto lo he sacado de esta página:
    // * https://kentcdodds.com/blog/how-to-use-react-context-effectively
    // La cual es una página de un desarrollador que te explica de una forma muy clara y sencilla las mejores formas de utilizar
    // los context. La original está en inglés pero hay versiones en español:
    // * https://dev.to/jereef/como-usar-react-context-de-manera-efectiva-1h6l
    // --------------------------------------------------------------------------------------------------------------------------
    
    // const context = React.useContext(GifsContext)

    // if(context === undefined) {
    //     throw new Error('useGlobalGifs se debe utilizar dentro de un GifsContextProvider.')
    // }

    // return context

    return useContext(GifsContext).gifs
}