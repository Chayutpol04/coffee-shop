import React from 'react'
import './Hero.css'
import herocoffee from '../imgs/etc/herocoffee.png'
function Hero() {
  return (
    <>
        <div className="w-full mx-auto">
            <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row ">
                <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2">
                        <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left uppercase">
                            Starbug Best Coffee
                        </h1>
                        <p className="text-2xl text-center text-gray-400 mt-10 lg:max-w-md lg:text-left">
                        "STARBUG Coffee was built in 2030 to compete with Starbuck. Our unique ingredients are sourced from bugs found all around the world."
                        </p>
                </div>
                <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
                        <img src={herocoffee} alt="" width={600} id='img-right'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero