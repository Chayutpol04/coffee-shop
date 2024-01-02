import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import Whyus from '../components/Whyus'
import Review from '../components/Review'
import PromotionProduct from '../components/PromotionProduct'
function Home() {
  return (
    <>
        <Hero/>
        <PromotionProduct/>
        <Whyus/>
        <Review/>
    </>

  )
}

export default Home