import React from 'react'
import "../../styles/profile.css"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import profImg from "../../assets/user-pic.jpg"

const Profile = () => {
  return (
    <>
      <Header /> 
        <div className='profile-section'>
          <div className='subcontainer-one'>
            <img src={profImg} width="300px"/>
          </div>
          <div className='subcontainer-two'>
            <h1>DETAILS</h1>
            <h3>Name: Arun Kumar</h3>
            <h3>Designation: Constable</h3>
            <h3>ID-No: DL5134241</h3>
          </div>
        </div>
      <Footer />  
    </>
  )
}

export default Profile
