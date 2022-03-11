
import { Outlet } from "react-router-dom";
import Nav from "./nav";


export default function List() {


    return (
        <div>
            <Outlet />
            <Nav />
        </div>
    )
}