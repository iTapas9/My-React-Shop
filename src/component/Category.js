import React from 'react'

const Category = ({setFilter, data, filterProduct}) => {
    return (
        <>
            <div>
                <h3 className="font-medium mb-2">Category</h3>
                <div className='flex flex-col space-y-3'>
                    <button className='text-left  py-1 hover:font-medium '
                        onClick={() => setFilter(data)}>All</button>
                    <button className='text-left  py-1 hover:font-medium '
                        onClick={() => filterProduct("men's clothing")} >Men's Clothing</button>
                    <button className='text-left  py-1 hover:font-medium '
                        onClick={() => filterProduct("women's clothing")} >Women's Clothing</button>
                    <button className='text-left  py-1 hover:font-medium '
                        onClick={() => filterProduct("jewelery")} >Jewelery</button>
                    <button className='text-left  py-1 hover:font-medium '
                        onClick={() => filterProduct("electronics")} >Electronics</button>
                </div>
            </div>
        </>
    )
}

export default Category;