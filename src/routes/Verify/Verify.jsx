import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import qrimg from "../../assets/qr-img-verifying.png"
import "../../styles/verify.css"

const Verify = () => {
    const [hashInput, setHashInput] = useState('');

    const handleChange = (e) => {
        setHashInput(e.target.value);
    };

    const handleVerifyClick = () => {
        console.log('Verifying user:', inputValue);
    };

    return (
        <>
          <Header />
          <div className='container-verify'>

                    <img src={qrimg} />
                    <h2>QR - CODE</h2>
            </div>
           
          <Footer />
        </>
    )
}

export default Verify
