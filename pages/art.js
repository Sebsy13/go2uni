import React from 'react'
import Head from 'next/head'
import Artpage from '../components/Artpage'
import Search from '../components/Search'

const art = () => {
  return (
     <>
     <Head>
     <title>Art | Go2Uni</title>
        <meta name="Commercial Go2Uni" content="" />
        <link rel="icon" href="/Images/logo.png" />
      </Head>
    <Artpage></Artpage>
     
     
     
     </>
  )
}

export default art