'use client'

import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Heaader = () => {
    const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className='flex justify-between items-center px-10 py-4 md:px-20 border-b-2 border-gray-100'>
			<h1>Logo</h1>
            <div className='hidden relative sm:flex gap-5'>
                <Link href="#">About</Link>
                <Link href="#">Products</Link>
                <Link href="#">Contact</Link>
                <Link href="#">Log-In</Link>
                <Link href="#">Register</Link>
            </div>
            <div className='sm:hidden z-40'> 
                {
                    isOpen ? (
                        <>
                            <MdClose onClick={() => setIsOpen(false)} className='cursor-pointer' />
                            <div className='absolute right-0 flex flex-col justify-end items-end p-10 gap-5 bg-white rounded-xl drop-shadow-md'>
                                <Link href="#">About</Link>
                                <Link href="#">Products</Link>
                                <Link href="#">Contact</Link>
                                <Link href="#">Log-In</Link>
                                <Link href="#">Register</Link>
                            </div>
                        </>
                    ) : (
                        <GiHamburgerMenu onClick={() => setIsOpen(true)} className='cursor-pointer' />
                    )
                }
            </div>
		</nav>
	);
};

export default Heaader;
