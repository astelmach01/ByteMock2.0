import React from 'react'
import logo from "../BYTEMOCK_LOGO.png"

class Header extends React.Component{
    constructor(props) {
        super (props)
        this.state = {
            isLoading: false
        }

    }

    render(){

        return (
            <div className="logo">
                <a href="https://www.bytemock.com/#/home">
                    <img src= {logo} alt={"Failed to load"}/>
                </a>
            </div>

        )}


}

export default Header