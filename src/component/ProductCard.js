import React from 'react'

const ProductCard = ({filterData}) => {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    filterData.map((product) => {
                        return (
                            <div className='border inline-block p-4 hover:shadow-md' key={product.id}>
                                <div className='flex justify-center'>
                                    <img className='w-full h-[20rem] max-w-[20rem] mb-6' src={product.image} alt="product-picture" />
                                </div>
                                <div className='space-y-4'>
                                    <p className='text-lg'>{product.title.substring(0, 30)}</p>
                                    <div className='flex justify-between items-center'>
                                        <p className='font-medium'>${product.price}</p>
                                        <div className='flex items-center space-x-2'>
                                            <svg className="w-6 h-6 text-black" fill="#ffffff" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                            </svg>
                                            <span className='text-yellow-600'>{product.rating.rate}</span>
                                        </div>
                                    </div>
                                    <p>{product.de}</p>
                                    <p className=''>{product.category}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ProductCard