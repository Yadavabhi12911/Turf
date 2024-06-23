import React from 'react';
import Image2 from "../../images/navlogo.png"; // Import the image file

function Header1(props) {
    let turferclick = () => {
        if (props.cred.tokenid !== "" && props.cred.type === "Admin") {
            props.setview("Homepage");
        } else if (props.cred.tokenid !== "" && props.cred.type === "User") {
            props.setview("Homepage");
        } else {
            window.location.href = "/";
        }
    };

    return (
        <>
            <nav className="navbar navbar-inverse ">
                <div className="container-fluid bg-gray-800">
                    <div className="navbar-header">
                        {/* Replace the text with the image */}
                        <a className="navbar-brand navheight" onClick={event => turferclick()}>
                            <img src={Image2} alt="GameOn Logo" /> {}
                        </a>
                        <div className='centerTag'><h2>Turf Booking Website</h2></div>
                    </div>
                    {(props.cred.tokenid !== "") &&
                        <ul className="nav navbar-nav navbar-right">
                            <li><a><span className="glyphicon hidden md:inline-block lg:hidden  glyphicon-user  text-white"></span> Welcome, {props.cred.userid}</a></li>
                            <li><a href="/"><span className="glyphicon glyphicon-log-in  "></span> Logout</a></li>
                        </ul>
                    }
                </div>
            </nav>
        </>
    );
}

export default Header1;
