import React from 'react'

import Header from "../components/Header";
import CashRegister from "../components/CashRegister";
import Modal from "../components/Modal";
import PopupModal from "../components/PopupModal";
import Footer from "../components/Footer";



const Home = () => {
    return (
      <>
      <Header />
      <Modal />
      <CashRegister />
      <PopupModal  />
      <Footer/>
      </>
    )
}

export default Home
