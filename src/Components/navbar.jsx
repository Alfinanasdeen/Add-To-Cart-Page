import { Link } from "react-router-dom"
import {ShoppingCart} from "phosphor-react"
import { useContext } from "react";
import { context } from "../context/context.jsx";
import './navbar.css'

function Navbar() {
    const { getTotalCartCount } = useContext(context); 
    return (
        <div className="navbar">
            <div className="link">
                <Link to="/">Shop</Link>
                <Link to="/cart">
                <div className="cart-container">
                    <ShoppingCart size={35}/>
                    {getTotalCartCount() > 0 && (
                        <span className="cart-count">{getTotalCartCount()}</span>
                    )}
                </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Navbar