import React from 'react'
import logo from "../BYTEMOCK_LOGO.png"

class Header extends React.Component {


    render() {

        return (
            <div className="logo">
                <a href="https://www.bytemock.com/#/home">
                    <img src={logo} width={"250px"} alt={"Failed to load"}/>
                </a>
            </div>

        )
    }


}

export default Header