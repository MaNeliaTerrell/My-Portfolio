import React from "react"
import { NavLink } from "react-router-dom"
import Button from 'react-bootstrap/Button';

const Navbar = () => {
    return (

        <div>


            <Button>HOME</Button>
            <Button>About Me</Button>
            <Button>My Github</Button>
            <Button>My Projects</Button>
            <Button>Contact Me</Button>
            
        </div>

    )
}

export default Navbar