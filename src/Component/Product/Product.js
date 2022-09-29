import React from 'react';

const Product = (props) => {
    const { name, img, seller, price } = props.product
    console.log(props.product)
    return (
        <div >
            <div className="card w-50 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;