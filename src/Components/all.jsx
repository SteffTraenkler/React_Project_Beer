import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function All() {

    const [api, setApi] = useState([])

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setApi(json)
            })
    }, [])

    return (
        <div>
            {api.map((el, k) => {  //article>div+img(api.image_url) div+api.name+api.tagline+created by:{api.name} + a-tag mit 'Details' -> link zu Detailsseite
                return (
                    <article key={k} className="divAll">
                        <div className="beerPicAll">
                            <img src={el.image_url} alt={`Beerpic of ${el.name}`} />
                        </div>
                        <div>
                            <h1 className="headlineAll">{el.name}</h1>
                            <h2>{el.tagline}</h2>
                            <p className="normalp">Created by: {el.name}</p>
                            <Link className="details" to={`/list/details/${el._id}`}>Details</Link>
                        </div>
                    </article>
                )
            })
            }
        </div>

    )
}