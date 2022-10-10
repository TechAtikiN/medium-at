import Link from 'next/link'
import React, { useEffect } from 'react'
import { Post } from '../typings'
import { urlFor } from '../sanity'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { RootState } from '../pages/redux/store'
interface Props {
  posts: [Post]
}
function Posts({ posts }: Props) {

  const value = useSelector((state: RootState) => state.theme.value)
  // useEffect(() => {
  //   console.log(value)
  // }, [value])
  // console.log(posts)
  console.log(value)

  return (
    <div className='dark max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-8 dark:bg-gray-900'>

      {posts.map((post) => (
        <Link href={`/post/${post.slug.current}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className='bg-gray-100 text-center dark:bg-slate-800 dark:text-gray-200  shadow-lg  rounded-xl group cursor-pointer overflow-hidden'>
            <Image width={400} height={300} src={urlFor(post.mainImage).url()}
              className="h-60 hover:opacity-30 w-full object-cover p-3 group-hover:scale-105
                             transition-transform duration-150 ease-in-out"></Image>
            <div>
              <div className=' justify-between '>
                <p className='text-3xl  font-bold p-2 ml-7'>{post.title}</p>
                <p className='px-3 mx-5 text-center'>{post.description}</p>
              </div>
              <div className='flex items-center space-x-3 py-3 justify-center'>
                <img
                  className='h-12 w-12 rounded-full '
                  src={urlFor(post.author.image).url()}
                />
                <div className='underline '> by {post.author.name}</div>
              </div>
              {/* <button className='px-3 py-3 dark:hover:bg-gray-300   dark:hover:text-gray-700  bg-gray-900 text-xl font-semibold text-white hover:text-gray-300 rounded-lg my-5 mx-5 w-56 '>Read this artice</button> */}
            </div>

          </motion.div>
        </Link>

      ))}
    </div>
  )
}

export default Posts