import React from 'react';

const Product = (props) => {
    const { name, img, details, price } = props.product
    // console.log(props.product)
    return (
        <div >
            <div className="card w-50 bg-base-100 shadow-xl">
                <figure className='h-1/5'><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-xs'>{details}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => props.handleAddToCart(props.product)} className="btn btn-info w-full">Add to Card</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;