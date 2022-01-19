import React from "react";
import './Product.css'

function Product({product}) {
    return (
        <div className={'product'}>
            <div>
                <img className={'product__img-size'} src={product.image} alt={'image not found'}/>
            </div>

            <div className={'product__info'}>
                {product.name}
                {product.price}
                {product.compound}
            </div>
        </div>
    )
}

export default Product