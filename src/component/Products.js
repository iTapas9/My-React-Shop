import React, { useState, useEffect } from 'react';
import Category from './Category';
import PriceRange from './PriceRange';
import ProductCard from './ProductCard';
import Rating from './Rating';
import Search from './Search';


const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);

    const [fromValue, setFromValue] = useState();
    const [toValue, setToValue] = useState();

    const [search, setSearch] = useState("");

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const responseData = await response.json();
            setData(responseData);
            setFilter(responseData);
        }
        getProducts();
    }, [])


    // All Filter Functionality-----------

    // search functionality

    const searchProduct = (e) => {
        console.log("from search component:", e.target.value);
        const searchData = e.target.value;
        setSearch(searchData);
        const updateSearchValue = data.filter((product) => {
            return product.title.toLowerCase().includes(searchData.toLowerCase())
        })
        setFilter(updateSearchValue);
    }


    // category functionality
    const filterProduct = (category) => {
        const updatedList = data.filter((product) => {
            return product.category === category
        });
        setFilter(updatedList);
    };

    // rating functionality
    const ratingFilterProduct = (rating) => {
        const updatedRating = data.filter((product) => {
            if(rating === 4){
                return product.rating.rate >= rating
            }else if(rating === 3){
                return product.rating.rate >= 3 && product.rating.rate < 4 
            }else if(rating === 2){
                return product.rating.rate >= 2 && product.rating.rate < 3 
            }else{
                return product.rating.rate >= 1 && product.rating.rate < 2 
            }
            // console.log(product.rating.rate >= rating);
        });
        setFilter(updatedRating);
    }

    // price filter functionality
    const priceFilterProduct = (e) => {
        e.preventDefault();
        console.log("form submitted");
        console.log(fromValue);
        console.log(toValue);

        const filteredPriceData = data.filter((product) => {
            if (product.price >= fromValue && product.price <= toValue) {
                return product.price;
            }
        })
        setFilter(filteredPriceData);
        setFromValue("");
        setToValue("");
    }

    const fromInputEvent = (e) => {
        // console.log(e.target.value);
        setFromValue(e.target.value)
    }

    const toInputEvent = (e) => {
        // console.log(e.target.value);
        setToValue(e.target.value);
    }
    // end price filter functionality


    return (
        <>
            <div id='products'>
                <div className='text-center flex items-center'>
                    <span className='inline-block w-full h-[.03rem] bg-gray-300'></span>
                    <h2 className='text-2xl uppercase font-medium px-4 w-full'>our products</h2>
                    <span className='inline-block w-full h-[.03rem] bg-gray-300'></span>
                </div>
                {/* all products components */}
                <div className='flex flex-col justify-between items-center sm:items-start sm:flex-row py-10'>

                    <div className='w-[20rem] sm:w-[22rem] max-w-[22rem] px-4 space-y-8'>
                        {/* search-bar */}
                        <Search search={search} searchProduct={searchProduct} />

                        {/* category filter buttons */}
                        <Category data={data} setFilter={setFilter} filterProduct={filterProduct} />

                        {/* rating filter buttons */}
                        <Rating ratingFilterProduct={ratingFilterProduct} />

                        {/* price range inputs */}
                        <PriceRange
                            priceFilterProduct={priceFilterProduct}
                            fromInputEvent={fromInputEvent}
                            fromValue={fromValue}
                            toValue={toValue}
                            toInputEvent={toInputEvent}
                        />
                    </div>

                    {/* product card */}
                    <div className="pl-4">
                        <ProductCard filterData={filter} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Products