import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "./nav";

export default function Random() {
    let apiID = useParams('id')
    console.log(apiID);

    const [randombeer, setRandomBeer] = useState([])

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(resp => resp.json())
            .then(json => {
                console.log(json);
                setRandomBeer(json)
            })
    }, [])

    return (
        <div>
            <div className="detailPage">
                <article>
                    <div className="beerPic">
                        <img src={randombeer.image_url} alt='Beer name: {randombeer.name}' />
                    </div>
                    <div>
                        <h1>{randombeer.name}</h1>
                        <h2 className="yellowdetail">{randombeer.tagline}</h2>
                        <div className="greydetail">
                            <p>First brewed: </p>
                            <p>{randombeer.first_brewed}</p>
                        </div>
                        <div className="greydetail">
                            <p>Attenuation level:</p>
                            <p>
                                {randombeer.attenuation_level}
                            </p>
                        </div>
                        <p className="normalp">{randombeer.description}</p>
                        <Link to="/"><img className="arrow" src="/images/vector.png" alt="arrow back" /></Link>
                    </div>
                </article>
            </div>
            <Nav />
        </div>
    )
}