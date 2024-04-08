import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import verifyImg from "../../assets/verified-Img.png"
import "../../styles/verifying.css"

const Verifying = () => {
  return (
    <>
     <Header />
        <div className='container-verifying'>
          <div className='verifyingsymbol'></div>
        </div>
        <div className='subcontainer-verifying'>
          <h3>Name: Arun Kumar</h3>
          <h3>Designation: Constable</h3>
          <h3>Area: Rajiv Chowk, Delhi</h3>
          <h3>id: DL5134241</h3>
        </div>
     <Footer />
    </>
  )
}

export default Verifying