import React from "react"
import {Link} from "wouter"
import './Gif.css'

function Gif({ title, id, url }) {
    return (
        <div className="Gif">
            <Link to={`/gif/${id}`} className='Gif-link'>
                <img loading='lazy' alt={title} src={url}/>
                <h4>{title}</h4>
            </Link>
        </div>
    )
}

export default React.memo(Gif, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id
}) // En este caso, este memo funciona porque el id de un GIF siempre será el mismo para ese mismo GIF.