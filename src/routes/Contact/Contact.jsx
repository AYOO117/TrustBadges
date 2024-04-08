import React from "react";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import "../../styles/contact.css"

const Contact = () => {
  	return (
			<>
				<Header />
					<h1 className="h-one-contact">CONTACT US</h1>
					<div className="container-contact">
						<h3>THEBOYSGMAIL@.COM</h3>
						<h3>+123-892324121</h3>
						<h3>NFT 86 , NEAR BITCOIN </h3>
						<h3>24/7 USER SUPPORT</h3>
					</div>
				<Footer />
			</>
  	)
}

export default Contact
