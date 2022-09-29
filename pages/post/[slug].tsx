import {  GetStaticProps } from 'next';
import React, { useState } from 'react'
import Header from '../../components/Header';
import { config, urlFor } from '../../sanity';
import { Post } from '../../typings';
import PortableText from 'react-portable-text'
import {useForm, SubmitHandler} from 'react-hook-form'
import Comments from '../../components/Comments';
import Footer from '../../components/Footer';
import {motion, useScroll} from 'framer-motion'
interface IFormInput{
    _id: string,
    name: string;
    email: string;
    comment: string;
}
interface Props{
    post: Post;
}
function Post({ post }: Props) {
    const { scrollYProgress } = useScroll()
    
    const [submitted, setSubmitted] = useState(false)
    console.log(post)
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
    
    const onSubmit: SubmitHandler<IFormInput> =  (data) => {
         fetch('/api/createComment',{
            method: 'POST',
            body:JSON.stringify(data),
        }).then(() => {
            console.log(data)
            setSubmitted(true)
        }).catch((error) => {
            console.log(error)
            setSubmitted(false)
        })
    }
    
    const tags=['travel', 'adventure','scenic', 'wildlife', 'explore' ]

  return (
      <div>
        <motion.div
        className="top-0 left-0 right-0 h-2 fixed bg-blue-800 origin-[0%]"
        style={{ scaleX: scrollYProgress }}
      />
          <Header />
          {/* {Banner} */}
          <img
              className='w-full h-80 object-cover'
              src={urlFor(post.mainImage).url()} />
          
          {/* {Blog} */}
          <article className='max-w-3xl mx-auto p-5 border-2 mt-2 shadow-md '>
              <div className='text-center '>
              <span className='font-extralight'>Published at {new Date(post._createdAt).toLocaleDateString()} {new Date(post._createdAt).toLocaleTimeString()}</span>
              <h1 className='text-4xl font-bold mb-3'>{post.title}</h1> 
              <h2 className='text-xl font-light text-gray-500 mb-2 border-l-2 border-cyan-400 italic mr-2 ml-2'>{post.description}</h2>
              <div className='flex items-center space-x-2 text-center pb-3'>
                  <img
                      className='h-10 w-10 rounded-full'
                      src={urlFor(post.author.image).url()}
                  />
                  <p className='font-extralight text-sm '>Blog post by
                      <span className='font-semibold px-1 text-gray-600'>{post.author.name}
                          </span></p>   
                      {/* {add icons} */}
                      <div className='flex'>
                          </div>
                  </div>

                  {tags.map((tag) => (
                      <button key={tag} className='px-3 py-2 shadow-cyan-700  text-gray-800 bg-gray-200 rounded-md mx-3'>{tag}</button>
                  ))}

              </div>
              <div className='mt-10'>
                  <PortableText
                      className=''
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                      content={post.body}
                      serializers={
                          {
                              h1: (props: any )=>{
                                  <h1 className='text-2xl font-bold my-5'{...props} />
                              },
                              h2: (props: any )=>{
                                  <h1 className='text-xl font-bold my-5'{...props} />
                              },
                              li: ({children}:any )=>{
                                  <li className='ml-4 list-disc'>{children}</li>
                              },
                              link: ({href, children}:any)=>{
                                  <a className='text-blue-500 hover:underline'>{children}</a>
                              },
                      
                          }
                      }
                  />
              </div>
          </article>

          <hr className='max-w-lg my-5 mx-auto border border-cyan-500' />

          {/* {Add Comments} */}
          {submitted ? (
              <div className='flex flex-col my-10 py-10 p-5 bg-cyan-500 text-white max-w-2xl mx-auto'>
                  <h1 className='text-3xl font-bold '>Thank you for submitting your comment</h1>    
                  <p>Once it has been approved, it will appear here</p>
              </div>
              
          ) : (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-5 max-w-2xl mx-auto mb-10 '>
              <h3 className='text-sm text-cyan-600'>Enjoyed this article?</h3>
              <h4 className='text-4xl font-semibold'>Leave a comment below</h4>
              <hr className='py-3 mt-2' />
              
              <input
                  {...register("_id")}
                  type="hidden"
                  name='_id'
                  value={post._id}
              />

              <label className='block mb-5 '>
                    <span className='text-gray-600'>Name</span>
                  <input
                      {...register("name", {required:true})}
                      className="shadow border border-cyan-500 rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-500 outline:none focus:ring focus:outline-none" placeholder='John Doe' type="text" />
              </label>
              
              <label className='block mb-5 '>
                    <span className='text-gray-600'>Email</span>
                  <input
                      {...register("email", {required:true})}
                      className="shadow border border-cyan-500 rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-500 outline:none focus:ring focus:outline-none" placeholder='John Doe' type="email" />
              </label>

              <label className='block mb-5 '>
                    <span className='text-gray-600' >Comment</span>
                  <textarea
                      {...register("comment", {required:true})}
                      className="shadow border border-cyan-500 rounded py-2 px-3 mt-1 block w-full form-textarea ring-cyan-500 outline:none focus:ring focus:outline-none"
                      placeholder='John Doe'
                      typeof='text'
                      rows={8}/>
                      </label>
                      
              <div className='flex flex-col p-5'>
              {errors.name && (<span className='text-red-500'>- The name field is required</span>)}
              {errors.email && (<span className='text-red-500'>- The email field is required</span>)}
              {errors.comment && (<span className='text-red-500'>- The comment field is required</span>)}    
                      </div>
                      
              <button className='bg-cyan-500 rounded-lg py-2 px-4 text-white hover:bg-cyan-600 font-semibold'>Submit</button>
                </form>        
          )}

          {/* {Comments} */}
          <Comments post={post} />
                <Footer/>
        </div>
        )
    }

export const getStaticPaths = async () => {
    const query = `*[_type =='post']{
  _id,
  slug{
  current
}
}`;
    const posts = await config.fetch(query);

    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current
        }
    }));
    return {
        paths,
        fallback: "blocking"
    }
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type=="post" && slug.current == $slug][0]{
  _id,
  _createdAt,
  title,
  author->{
  name, 
  image
},
'comments':*[
  _type=="comment" &&
  post._ref==^.id &&
  approved==true],
description,
mainImage,
slug,
body
}`;
    
    const post = await config.fetch(query, {
        slug:params?.slug
    })
    if (!post) {
        return {
            notFound:true
        }
    }
    return {
        props: {
            post,
        },
        revalidate: 60
    }
}

export default Post