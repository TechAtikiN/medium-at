import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Posts from '../components/Posts'
import { urlFor, config } from '../sanity'
import { Post } from '../typings'
import Footer from '../components/Footer'
import Collage from '../components/Collage'
import Display from '../components/sections/Display'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../pages/redux/store'

interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {

  const value = useSelector((state: RootState) => state.theme.value)


  console.log(posts)
  return (

    <div className={`${value == 'dark' ? 'dark' : ''} `} >
      <Head>
        <title>MediumAt </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <Posts posts={posts} />
      <Collage />
      <Display />
      <Footer />

    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type=='post']{
  _id,
  title,
  description,
  mainImage,
  comments,
  slug,
  author->{
  name, 
  image
}
}`;
  const posts = await config.fetch(query)
  return {
    props: {
      posts,
    }
  }
}