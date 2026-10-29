import {LOGO_URL} from "../utils/constants.js";
import {useState} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {

    const [btnName,setBtnName] = useState("Login");
    const status = useOnlineStatus();
    return (
        <div className="header">
            <div className="log-container">
           <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Online Status: {status ? "online": "offline"}</li>
                    <button className="login" onClick={()=> btnName === "Login"?setBtnName("LogOut"):setBtnName("Login")}>{btnName}</button>
                </ul>
            </div>
         </div>
    );
};

export default Header;