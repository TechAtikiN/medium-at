import React from 'react'
import Image from 'next/image'
function Collage() {
    return (
        <div className=' bg-gray-900 max-w-7xl mx-auto '
        >
            <div className='text-white text-center '>
                <h1 className='text-gray-200 hover:text-gray-400 text-7xl ml-10 mt-10 font-serif pt-10 pl-10 pr-10'>YOUR DAILY DOSE OF MOTIVATION</h1>
                <p className='text-gray-200 text-xl p-10 hover:text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit placeat dolorum excepturi est nisi, possimus corrupti nostrum nobis veritatis dolorem. Illum ab laboriosam dicta soluta dolorum dolor maiores in! Fugit!</p>
                <button className='px-3 py-2 text-gray-900 hover:underline bg-gray-100 font-bold w-1/4 rounded-md text-lg hover:bg-gray-400'>Get Started</button>
            </div>
            <div className='grid grid-cols-4 '>
                <div className='flex flex-col space-y-4 px-5'>
                    <Image
                        className='relative '
                        height={200}
                        width={100}
                        alt="collageimage"
                        src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJsb2dzJTIwd2Vic2l0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"></Image>
                    <Image
                        className='relative'
                        height={200}
                        width={150}
                        alt="collageimage"
                        src="https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"></Image>
                    <Image
                        className='relative'
                        height={200}
                        width={150}
                        alt="collageimage"
                        src="https://images.unsplash.com/photo-1659560893493-9b565e1a26a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDkyfGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"></Image>
                    <Image
                        className='relative'
                        height={200}
                        width={150}
                        alt="collageimage"
                        src="https://images.unsplash.com/photo-1610886420404-7f72bc3d57d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"></Image>

                </div>
                <div className='flex flex-col py-16 pr-5 '>
                    <Image
                        className='relative'
                        height={200}
                        width={150}
                        alt="collageimage"
                        src="https://images.unsplash.com/photo-1558174685-430919a96c8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"></Image>
                    <Image
                        className='relative'
                        height={200}
                        width={150}
                        alt="collageimage"
                        src="https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"></Image>
                    <Image
                        className='relative'
                        height={200}
                        width={150}
                        alt="collageimage"
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwYXQlMjB3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"></Image>
                    <Image
                        className='relative'
                        height={200}
                        width={150}
                        alt="collageimage"
                        src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRlbXBsYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"></Image>

                </div>
                <div className='flex flex-col py-7 pr-5'>
                    <Image
                        className='relative'
                        height={200}
                        width={150}
                        alt="collageimage"
                        src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3MlMjB3ZWJzaXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"></Image>
                    <Image
                        className='relative'
                        height={200}
                        width={150}
                        alt="collageimage"
                        src="https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlbXBsYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"></Image>
                    <Image
                        className='relative'
                        height={200}
                        width={150}
                        alt="collageimage"
                        src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzE5fHx3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"></Image>
                    <Image
                        className='relative'
                        height={200}
                        width={150}
                        alt="collageimage"
                        src="https://images.unsplash.com/photo-1543269665-7821011040ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzEyfHx3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"></Image>

                </div>
                <div className='flex flex-col py-20 pr-5'>
                    <Image
                        className='relative'
                        height={200}
                        width={150}
                        alt="collageimage"
                        src="https://images.unsplash.com/photo-1502810190503-8303352d0dd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ2fHx3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"></Image>
                    <Image
                        className='relative'
                        height={200}
                        width={150}
                        alt="collageimage"
                        src="https://images.unsplash.com/photo-1587612049655-c1030366a74a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE3fHx3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"></Image>
                    <Image
                        className='relative'
                        height={200}
                        width={150}
                        alt="collageimage"
                        src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"></Image>
                    <Image
                        className='relative'
                        height={200}
                        width={150}
                        alt="collageimage"
                        src=" https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"></Image>
                    s
                </div>

            </div>

        </div>
    )
}

export default Collage;