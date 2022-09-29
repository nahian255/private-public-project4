import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Body = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart)
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);

    };


    const pp = cart.map(p => {
        <p>{p.time}</p>
    })
    console.log(pp)



    return (
        <div className='flex '>

            <div className='bg-gray-700 p-5 w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-8 border-solid border-2 '>

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }

            </div>
            <div className=' bg-white w-1/3 p-5 text-black'>
                <section>
                    <div className=' mx-2'>
                        <div>
                            <h1>Mutawchid Nahian</h1>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                        <div className='rounded-2xl p-4 flex justify-evenly mt-4 bg-slate-300 '>
                            <p>weight-70</p>
                            <p>height-6.2</p>
                            <p>age-24</p>
                        </div>
                    </div>
                    <div>
                        <h2>Add A Break</h2>
                        <div className='rounded-2xl p-4 flex justify-evenly mt-4 bg-slate-300 '>

                            <button className='bg-white rounded-full p-2'>10s</button>
                            <button className='bg-white rounded-full p-2'>20s</button>
                            <button className='bg-white rounded-full p-2'>30s</button>
                            <button className='bg-white rounded-full p-2'>40s</button>

                        </div>
                    </div>
                    <div>
                        <h2>Exercise Details</h2>
                        <div className='rounded-2xl p-4  mt-4 bg-slate-300 '>

                            <p>Exercise time - {pp.time}</p>
                        </div>
                        <div className='rounded-2xl p-4  mt-4 bg-slate-300 '>
                            <p >Break time -{ }</p>
                        </div>
                    </div>
                    <button className='bg-green-400 p-4 rounded-3xl mt-4 w-full'>Activity Completed</button>
                </section>
            </div >
        </div >
    );
};

export default Body;