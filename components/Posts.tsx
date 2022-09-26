import Link from 'next/link'
import React from 'react'
import { Post } from '../typings'
import {urlFor} from '../sanity'

interface Props{
  posts:[Post]
}
function Posts({ posts }: Props) {
    console.log(posts)
  return (
      <div className=' max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3
      md:gap-6 p-2 md:p-8'>
          {posts.map((post) => (
              <Link href={`/post/${post.slug.current}`}>
                    <div className='bg-gray-100 shadow-lg border rounded-xl group cursor-pointer overflow-hidden'>
                        <img
                            src={urlFor(post.mainImage).url()}
                          className="h-60 w-full object-cover p-3 group-hover:scale-105
                             transition-transform duration-150 ease-in-out"
                      />
                      <div>
                      <div className=' justify-between '>
                        <p className='text-2xl  font-bold p-2 ml-7'>{post.title}</p>
                        <p className='px-3 mx-5 text-center'>{post.description}</p>
                          </div>
                          <div className='flex items-center space-x-3 py-3 justify-center'>
                          <img
                              className='h-12 w-12 rounded-full'
                              src={urlFor(post.author.image).url()}
                          /> 
                              <div className='underline '> by {post.author.name}</div>
                              
                          </div>
                      </div>
                        <button className='px-3 py-3  bg-black text-white hover:text-gray-300 rounded-lg my-5 mx-5 w-56 '>Read this artice</button>
                    </div>
                  </Link>      
           
          ))}
    </div>
  )
}

export default Posts