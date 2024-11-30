import Products from './products.jsx'
import {ProductList} from '../../ProductList.js'
import './shop.css'

function Shop(){
    return(
        <div className="shop">
            <div className="title">
                <h1>Value Added</h1>
            </div>

            <div className="products">
                {ProductList.map((product) => (
                    <Products data={product} key={product.id} />
                ))}
            </div>
        </div>
    )
}
export default Shop;