import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Body = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className='flex '>
            <div className='bg-slate-300 w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-8 border-solid border-2 '>
                <h1 className='text-2xl'>Select today’s exercise</h1>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }

            </div>
            <div className=' w-1/3'>
                <h2>Mutawchid Nahian</h2>
            </div>
        </div>
    );
};

export default Body;