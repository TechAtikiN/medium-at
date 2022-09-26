import React from "react";
import { HeartIcon, ChatAltIcon } from '@heroicons/react/solid'
import Image from "next/image";
function Banner() {
  return (
      <div className="flex max-w-7xl mx-auto">
          <div className="bg-gradient-to-t from-gray-400 to-gray-700 ">
              <Image
                  className=""
                  height={745}
                  width={650}
                  alt="banner"
                  src="https://images.unsplash.com/photo-1657214058744-7ff3b448c205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"></Image>    
          </div>
          <div className="w-1/2 bg-black flex-1">
              <div className="text-white inset-0 font-serif align-middle mt-14 ml-10 font-semibold text-xl">Featured Blog</div>
              <div className="text-gray-300 font-serif align-middle  ml-10">Dec 23 - 5 min</div>
              <div className="text-gray-200 hover:text-gray-400 text-7xl ml-10 mt-10 font-serif pt-10 pl-10 pr-10">Fix yourself before you fix<br></br> the world.</div>
              <p className="text-gray-200 px-12 pt-7 hover:text-gray-400">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,</p>
              <p className="text-gray-300 ml-10 pl-3 font-bold text-xl pt-3 pb-7 underline">by Joe Goldberg</p>
              <div className="flex space-x-4 left-10  pl-10">
                  <div>
                      
                      <div className="text-white flex justify-around">
                      <HeartIcon className="h-6 w-6  "/> 45 likes    
                      </div>
                  </div >
                  <div className="text-white flex" ><ChatAltIcon className="h-6 w-6" /> 4 Comments</div>
              </div>
              <button className=" px-3 py-2 bg-gray-400 text-black rounded-lg cursor-pointer  align-middle mt-7 ml-10 hover:bg-white font-semibold">Read this blog</button>
          </div>
    </div>
  )
}

export default Banner