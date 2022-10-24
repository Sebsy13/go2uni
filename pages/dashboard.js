import React from 'react'
import Head from 'next/head'
import Dashboard from '../components/Dashboard'

const dashboard = () => {
  return (
     <>
     <Head>
     <title>Dashboard | Go2Uni</title>
        <meta name="Dashboard Go2Uni" content="" />
        <link rel="icon" href="/Images/logo.png" />
      </Head>
    <Dashboard></Dashboard>
     
     </>
  )
}

export default dashboard