import Head from 'next/head'
import React from 'react'
import NextImage from '../assets/nextImage.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>ReactSetup</title>
      </Head>

      <NextImage />
      <h1>ReactJS Structure</h1>
      <h2> A ReactJS+ Next.js structure made by Douglas</h2>
    </Container>
  )
}

export default Home
