import React from 'react'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <div className='h-60 text-center'>
      <hr className='border-t-2 shadow-md'/>
      <div className='flex flex-col '>
        
        <h2 className='text-2xl font-light mb-2 font-sans mt-10'>Subscribe Form</h2>
        <div className='text-center'>
<input typeof='email' placeholder='Email Address' className='mt-2 w-96 font-sans p-1 mb-2 border-b-2 border-gray-500 hover:border-2' type="text" />
        <button className='w-96 ml-2 font-semibold  bg-black text-white px-2 py-2'>Submit</button>
        </div>
        
        </div>
      <div className='text-gray-600'>
        <p className='mt-10 pt-5 '>MediumAt 2022 </p>
        <p className='pb-2'>TechAtikiN</p>
          </div>



    </div>
  )
}

export default Footer