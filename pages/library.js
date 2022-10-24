import React from 'react'
import Head from 'next/head'
import Librarypage from '../components/Librarypage'

const library = () => {
  return (
     <>
     <Head>
     <title>Library | Go2Uni</title>
        <meta name="Library Go2Uni" content="" />
        <link rel="icon" href="/Images/logo.png" />
      </Head>
    <Librarypage></Librarypage>
     
     </>
  )
}

export default library