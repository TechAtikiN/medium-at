import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
function Template({ name, desc, img }) {

    const value = useSelector((state) => state.theme.value)

    return (
        <div className={`${value == 'dark' ? 'dark' : ''}grid grid-cols-2 dark:grid dark:grid-cols-2 dark:bg-gray-900`}>
            <div className='p-4 '>
                <h1
                    className='text-left  dark:text-gray-200 text-black  mb-5 text-6xl ml-10 mt-10 font-serif pt-10 pl-10 pr-10'>
                    {name}
                </h1>
                <p
                    className='p-6 dark:text-white dark:hover:text-gray-200 text-black '>
                    {desc}
                </p>
                <button
                    className='px-3 py-3 m-10 w-3/4 font-semibold text-xl bg-gray-200 hover:bg-black rounded-full hover:text-gray-100 dark:text-black dark:hover:bg-gray-700 dark:hover:text-gray-200 transition-transform ease-in-out '>
                    Explore More &#8594;
                </button>
            </div>
            <div className='m-10 p-10 '>
                <Image className='rounded-full' src={img} width={400} height={400} />
            </div>
        </div>
    )
}

export default Template