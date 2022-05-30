import React from 'react'
import Products from '../component/Products';

const Home = () => {
    return (
        <>
            <div className='lg:max-w-[90%] mx-auto px-4'>
                <div className='flex flex-col'>
                    {/* banner */}
                    <div className='home-banner'>
                        <div>
                            <h1 className='mb-4 text-3xl sm:text-5xl text-right font-bold sm:leading-[5rem]'>Shop Personalize <br />
                                Your Galaxy <br />
                                Watches
                            </h1>
                            <div className='text-right'>
                                <button className='btn-black py-[0.8rem] px-[1rem] bg-black rounded-sm text-white'>
                                    <a href="#products">Shop Now</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* products */}
                    <div>
                        <Products />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;