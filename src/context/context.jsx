import { createContext, useState } from "react"
import { ProductList } from "../ProductList";
import Products from "../Pages/Shop/products";


export const context = createContext(null)

function trackAddToCart(){
    let cart = {};
    for(let i=1; i<ProductList.length+1; i++){
        cart[i]=0
    }
    return cart
}


export const ContextProvider = (props) =>{
const[cartItem, setCartItem] = useState(trackAddToCart())

const getTotalCartCount = () => {
    let totalCount = 0;
    for (const item in cartItem) {
        totalCount += cartItem[item];
    }
    return totalCount;
};

const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItem){
        if(cartItem[item] > 0){
            let itemInfo = ProductList.find((product) => product.id === Number(item))
            totalAmount += cartItem[item] * itemInfo.price;
        }
    }
    return totalAmount;
}

const addToCart = (itemid) =>{
    setCartItem((prev)=>({...prev, [itemid] : prev[itemid] + 1}))
}

const removeToCart = (itemid) =>{
    setCartItem((prev)=>({...prev, [itemid] : prev[itemid] - 1}))
}

const manualUpdateCount = (newQuantity, itemid) =>{
    setCartItem((prev)=>({...prev, [itemid]:newQuantity}))
}

const removeFromCart = (itemid) => {
    setCartItem((prev) => ({ ...prev, [itemid]: 0 }));
};

/* console.log(cartItem) */
const contextValue = {
    cartItem,
    addToCart,
    removeToCart,
    manualUpdateCount,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartCount,
}
    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    );

}