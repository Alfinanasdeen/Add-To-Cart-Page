import { useContext } from "react";
import { ProductList } from "../../ProductList";
import { CartDisplay } from "./CartDisplay.jsx";
import { context } from "../../context/context.jsx";
import './cart.css'
import { useNavigate } from "react-router-dom";

function Cart() {
    const { cartItem, getTotalCartAmount } = useContext(context);
    const totalAmount = getTotalCartAmount()

    const navigate = useNavigate();
    return (
        <div className="cart">
            <div className="title">
                Your Cart Item
            </div>
            <div className="cart">
                {ProductList.map((product) => {
                    if (cartItem[product.id] !== 0) {
                        return <CartDisplay data={product} key={product.id} />;
                    }
                })}
            </div>

            {totalAmount > 0 ? (
                <div className="totalAmount">
                    <p> SubTotal: ${totalAmount}</p>
                    <button onClick={() => navigate("/")}>Continue Shopping</button>
                </div>
            ) : (
                <h1>Your Shopping Cart is Empty</h1>
            )}

        </div>
    );
}

export default Cart;
