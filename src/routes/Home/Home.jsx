import React from 'react'
import "../../styles/home.css"
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
    <div id='home-container'>
        <Header />
          <div className='container-one'>
            <h1>Empowering Identity,</h1>
            <h1>One NFT at a Time.</h1>
          </div>
        <Footer />
      </div>
    </>
  )
}

export default Home