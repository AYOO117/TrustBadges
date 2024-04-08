import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { change } from '../../state/user/authState'
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import img from "../../assets/trustbadge-colored.png"
import img2 from "../../assets/trustbadge-white.png"
import "../../styles/login.css"


const Login = () => {

    const auth = useSelector((state) => state.authState)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [walletAddress, setWalletAddress] = useState("");

    const requestWallet = async() => {
        let flag = false;

        if (!window.ethereum) {
            alert('MetaMask is not installed. Please install it first.');
            return;
        }
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log(accounts)
            setWalletAddress(accounts[0]);
            flag = true
        } catch (err) {
            console.error('Error connecting to MetaMask:', err);
        }
        dispatch(change());
        return walletAddress
    }

    const connectWallet = async () => {
        
        if (typeof window.ethereum !== 'undefined'){
            let address = await requestWallet();
            try {
                const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:5173/'));
                if (address){
                    navigate("/home");
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    const handleNavigate = async () => {
        navigate('/home')
    }

    return (
        <>
            <div className='container-login'>
                    <img src={img} alt='img-one' className='img-one'/>
                    <img src={img2} alt='img-two' className='img-two'/>
                </div>
            <div className='login-btn'>
                <span>{auth}</span>
                <button onClick={() => {
                    connectWallet()
                    handleNavigate()
                }} className='input-btn-login'>
                Connect to wallet
                </button>
            </div>
        </>
    )
}

export default Login
