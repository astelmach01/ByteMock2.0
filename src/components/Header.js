import React from 'react'

class Header extends React.Component{
    constructor(props) {
        super (props)
        this.state = {
            isLoading: false
        }

    }

    render(){

        return (
            <div className="Header">

                <div id="navmenu">

                    <ul>
                        <li><a href="https://www.google.com/">home</a></li>
<<<<<<< HEAD
                        <li><a href={"services.html"}>services</a></li>
=======
                        <li><a href="https://www.google.com/">services</a></li>
>>>>>>> ff667e77c7d38264e598820da1d9c2211f8407c6
                        <li><a href="https://www.google.com/">posts</a></li>
                        <li><a href="https://www.google.com/">categories</a></li>
                        <li><a href="https://www.google.com/">about</a></li>
                    </ul>
                </div>
               
            </div>

        )}


}

export default Header