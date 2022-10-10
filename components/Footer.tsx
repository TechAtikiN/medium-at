import React from 'react'

function Footer() {
  return (
    <div className='h-60 text-center dark:bg-gray-900'>
      <hr className='border-t-2 shadow-md' />
      <div className='flex flex-col '>

        <h2 className='text-3xl font-light mb-2 font-sans mt-10 dark:text-gray-300'>Subscribe Form</h2>
        <div className='text-center'>
          <input typeof='email' placeholder='Email Address' className='mt-2 w-96 font-sans p-1 mb-2 hover:border-2 hover:border-gray-600  border-y-2 border-gray-600' type="text" />
          <button className='w-96 ml-2 font-semibold dark:hover:bg-gray-700 bg-black text-white px-2 py-2'>Submit</button>
        </div>

      </div>
      <div className='text-gray-600'>
        <p className='mt-10 pt-5 dark:text-gray-200 '>MediumAt 2022 </p>
        <p className=' dark:text-gray-200'>TechAtikiN</p>
      </div>



    </div>
  )
}

export default Footer