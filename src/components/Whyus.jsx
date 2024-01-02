import React from 'react'
import coffeewhyus from '../imgs/etc/coffeewhyus.jpg'
import bannerdelivery from '../imgs/etc/bannerdelivery.jpg'
function Whyus() {
  return (
    <>
        <div className='w-full mx-auto '>
            <div className="container flex flex-col-reverse mx-auto mt-10 p-6 lg:flex-row">
                <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
                    <img src={coffeewhyus} alt="" width={600} className='rounded-md'/>
                </div>
                <div className="flex flex-col space-y-10 mb-20 md:ml-20  lg:mt-16 lg:w-1/2">
                    <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left uppercase">
                        Why us ?
                    </h1>
                    <p className="text-2xl text-center text-gray-400 mt-10 lg:max-w-lg lg:text-left">
                        "Our coffee is crafted from insects sourced globally, and when consumed, they offer beneficial effects on the body. It is affordably priced,
                        and we prepare it fresh every day."
                    </p>
                    
                </div>
            </div>
            <img src={bannerdelivery} alt="" className='mx-auto rounded-md container' />
        </div>
    </>
  )
}

export default Whyus