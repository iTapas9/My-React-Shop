import React from 'react'

const PriceRange = ({priceFilterProduct, fromInputEvent,toInputEvent, fromValue, toValue}) => {
    return (
        <>
            <div>
                <h3 className="font-medium mb-2">Price</h3>
                <div className='flex'>
                    <form className='flex justify-between w-full' onSubmit={priceFilterProduct} >
                        <input
                            className='p-1 border-black border w-[5rem] focus:outline-none'
                            type="number"
                            placeholder='from'
                            onChange={fromInputEvent}
                            value={fromValue} />
                        <input
                            className='p-1 border-black border w-[5rem] focus:outline-none'
                            type="number"
                            placeholder='to'
                            onChange={toInputEvent}
                            value={toValue} />

                        <button type="submit" className='py-1 px-2 border border-black hover:bg-black hover:text-white'>OK</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PriceRange;