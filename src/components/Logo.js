import React from 'react'
import logo from "../BYTEMOCK_LOGO.png";

class Logo extends React.Component {

    render() {
        return(
        <div className="Logo">
            <img src={logo} width="250px" alt="could not load"/>
        </div>
        )}
}

export default Logo