import { useContext } from "react";
import { context } from "../../context/context.jsx";

export const CartDisplay = (props) => {
    const { cartItem, addToCart, removeToCart, manualUpdateCount, removeFromCart, } = useContext(context);
    const { id, productName, price, productImage } = props.data;

    return (
        <div className="CartDisplay">
            <img src={productImage} />
            <div className="description">
                <p><b>{productName}</b></p>
                <p>${price}</p>
                <div className="countHandler">
                    <button onClick={() => removeToCart(id)}>-</button>
                    <input value={cartItem[id]} onChange={(e) => manualUpdateCount(Number(e.target.value), id)} />
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
                <button
                    className="removeButton"
                    onClick={() => removeFromCart(id)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};
