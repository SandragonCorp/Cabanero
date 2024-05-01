'use client'

import { useState, useEffect, useRef } from "react";
import { MdFilterList, MdSortByAlpha, MdSearch } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

const Panel = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("")
    const ref = useRef();

    useEffect(() => {
        // Function to handle click outside of component
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            setIsSortOpen(false); // Click occurred outside, so close the component
            setIsFilterOpen(false);
          }
        };
    
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
    
        // Clean up the event listener when the component is unmounted or state changes
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [ref]);
    
    return (
        <section>
            <div className='flex flex-row justify-between px-8 sm:px-14 md:px-32 lg:px-32 xl:px-56'>
                {/* Filter and Sort Panel */}
                <div className="flex flex-row justify-start" ref={ref}>
                    <div className="options mr-2">
                        <MdFilterList className="text-md mr-1" />
                        <input type="text" placeholder="Filter" value={filter} className="max-w-16 text-sm" disabled/>
                        {/* <Dropdown onClick{() => setIsFilterOpen((prev) => !prev)} /> */}
                        <FaChevronDown className="text-md bg-gray-200 rounded-sm cursor-pointer" onClick={() => setIsFilterOpen((prev) => !prev)} />
                    </div>
                    { /* Filter options */
                        isFilterOpen && (
                            <div className="absolute flex flex-col bg-white rounded-xl drop-shadow-md mt-9 ml-2 z-40 p-2 gap-2 items-end">
                                <p className="cursor-pointer hover:bg-gray-400 rounded-sm p-1" onClick={() => {
                                    setFilter("Category")
                                    setIsFilterOpen(false)
                                }}>Category</p>
                                <p className="cursor-pointer hover:bg-gray-400 rounded-sm p-1" onClick={() => {
                                    setFilter("Name")
                                    setIsFilterOpen(false)
                                }}>Name</p>
                                <p className="cursor-pointer hover:bg-gray-400 rounded-sm p-1" onClick={() => {
                                    setFilter("Price")
                                    setIsFilterOpen(false)
                                }}>Price</p>
                                <p className="cursor-pointer hover:bg-gray-400 rounded-sm p-1" onClick={() => {
                                    setFilter("")
                                    setIsFilterOpen(false)
                                }}>Clear</p>
                            </div>
                        )
                    }

                    <div className="options">
                        <MdSortByAlpha className="text-md mr-1" />
                        <input type="text" placeholder="Sort" value={sort} className="max-w-16 text-sm" disabled />
                        <FaChevronDown className="text-md bg-gray-200 rounded-sm cursor-pointer" onClick={() => setIsSortOpen((prev) => !prev)} />
                    </div>
                    { /* Sort options */
                        isSortOpen && (
                            <div className="absolute flex flex-col bg-white rounded-xl drop-shadow-md mt-9 ml-32 z-40 p-2 gap-2 items-end">
                                <p className="cursor-pointer hover:bg-gray-400 rounded-sm p-1" onClick={() => {
                                    setSort("Category")
                                    setIsSortOpen(false)
                                }}>Category</p>
                                <p className="cursor-pointer hover:bg-gray-400 rounded-sm p-1" onClick={() => {
                                    setSort("Name")
                                    setIsSortOpen(false)
                                }}>Name</p>
                                <p className="cursor-pointer hover:bg-gray-400 rounded-sm p-1" onClick={() => {
                                    setSort("Price")
                                    setIsSortOpen(false)
                                }}>Price</p>
                                <p className="cursor-pointer hover:bg-gray-400 rounded-sm p-1" onClick={() => {
                                    setSort("")
                                    setIsSortOpen(false)
                                }}>Clear</p>
                            </div>
                        )
                    }

                </div>
                {/* Search Panel */}
                <div className="flex bg-gray-200 rounded-lg outline outline-1 outline-gray-600">
                    <input className="p-1 outline outline-1 outline-gray-600 rounded-l-lg max-w-28" type="text" placeholder='Search' />
                    <MdSearch className="text-2xl self-center mx-2" />
                </div>
            </div>
        </section>
    )
}

export default Panel