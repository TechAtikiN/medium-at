import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Posts from '../components/Posts'
import {  urlFor , config} from '../sanity'
import { Post } from '../typings'

interface Props{
  posts:[Post]
}

export default function Home({ posts }: Props) {
  // console.log(urlFor(posts[0].mainImage.asset.url))
  return (
    <div className="">
      <Head>
        <title>MediumAt </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner />
      <Posts posts={posts} />

    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type=='post']{
  _id,
  title,
  description,
  mainImage,
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