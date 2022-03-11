import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Details() {
    let apiID = useParams('id')
    console.log(apiID);

    const [singlebeer, setSingleBeer] = useState([])

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${apiID._id}`)
            .then(resp => resp.json())
            .then(json => {
                console.log(json);
                setSingleBeer(json)
            })
    }, [apiID])

    return (
        <div className="detailPage">
            <article>
                <div className="beerPic">
                    <img src={singlebeer.image_url} alt='Beer name: {singlebeer.name}' />
                </div>
                <div>
                    <h1>{singlebeer.name}</h1>
                    <h2 className="yellowdetail">{singlebeer.tagline}</h2>
                    <div className="greydetail">
                        <p>First brewed: </p>
                        <p>{singlebeer.first_brewed}</p>
                    </div>
                    <div className="greydetail">
                        <p>Attenuation level:</p>
                        <p>
                            {singlebeer.attenuation_level}
                        </p>
                    </div>
                    <p className="normalp">{singlebeer.description}</p>
                    <Link to="/list"><img className="arrow" src="/images/vector.png" alt="arrow back" /></Link>
                </div>
            </article>
        </div>
    )
}