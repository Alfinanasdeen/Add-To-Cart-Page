import { useContext } from "react";
import { context } from "../../context/context.jsx";

const Products = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItem } = useContext(context)
    
    const cartItemQuantity = cartItem[id]
    return (
        <div className="product">
            <div className="prod-img">
                <img src={productImage} />
            </div>
            <div className="discription">
                <div>
                    <p>
                        <b>{productName}</b>
                    </p>
                </div>
                <div>
                    <p>${price}</p>
                </div>
            </div>
            <button className="addToCart" onClick={()=> addToCart(id)}>
                Add To Cart {cartItemQuantity > 0 && <>({cartItemQuantity})</>}
            </button>
        </div>
    )
}
export default Products;