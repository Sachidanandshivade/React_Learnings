import {LOGO_URL} from "../utils/constants.js";
import {useState,useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UseContext from "../utils/UseContext.js";

const Header = () => {

    const [btnName,setBtnName] = useState("Login");
    const status = useOnlineStatus();
    const data = useContext(UseContext);

    return (
        <div className="flex justify-between bg-pink-200">
            <div className="log-container">
           <img className=" w-30 p-3 m-2 rounded-full bg-yellow-100 shadow-2xl shadow-white-200" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Online Status: {status ? "online": "offline"}</li>
                    <button className="" onClick={()=> btnName === "Login"?setBtnName("LogOut"):setBtnName("Login")}>{btnName}</button>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
         </div>
    );
};

export default Header;