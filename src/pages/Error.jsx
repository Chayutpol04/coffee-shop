import React from 'react'
import {Link} from 'react-router-dom'
import logobug from '../imgs/etc/logobug.png'
function Error() {
  return (
    <>
        <div class="container mx-auto mt-16 text-center text-coffeecolor1">
          <h1 class="text-6xl font-bold ">404</h1>
          <p class="text-2xl" >Oops! Page Not Found</p>
          <p class="mt-4 ">Sorry, it seems like the page you are looking for is hiding.</p>
          <img src={logobug} alt="Testing" className='mt-8 mx-auto max-w-full' />
          <p class="mt-4 ">But don't worry, let's guide you back home!</p>
          <Link to='/'><p class="mt-4 ">Click Back to HomePage</p></Link>
       </div>
    </>
  )
}

export default Error