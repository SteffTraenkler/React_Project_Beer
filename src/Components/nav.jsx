import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <Link to="/"><img src="./images/logo.png" alt="logo" /></Link>
        </nav>
    )
}