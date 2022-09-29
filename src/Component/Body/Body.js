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
                <section>
                    <div className='bg-pink-100 mx-2'>
                        <div>
                            <h1>Mutawchid Nahian</h1>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                        <div className='flex justify-evenly mt-4 bg-slate-300 '>
                            <p>weight-70</p>
                            <p>height-6.2</p>
                            <p>age-24</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Body;