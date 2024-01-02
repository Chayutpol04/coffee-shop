import React from 'react'
import iconig from '../imgs/etc/iconig.png'
import iconfacebook from '../imgs/etc/iconfacebook.png'
import iconline from '../imgs/etc/iconline.png'
import icontiktok from '../imgs/etc/icontiktok.png'
function Footer() {
  return (
    <>
        <footer class="mt-20 bg-coffeecolor1 p-8 text-white">
                <div class="container mx-auto">
                    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <h2 class="mb-4 text-2xl font-semibold">About Us</h2>
                                <p>We serve the best coffee in 2030 – a blend of affordability and health benefits that surpasses even Starbucks! 😉.</p>
                            </div>
                            <div>
                                <h2 class="mb-4 text-2xl font-semibold">Contact Us</h2>
                                <p>River 123 Amazon </p>
                                <p>Email: starbug@gmail.com</p>
                                <p>Phone: 0-123-456-789</p>
                            </div>
                            <div className='flex items-center'>
                                <img src={iconig} alt=""  width={50} className='mr-5'/>
                                <img src={iconfacebook} alt="" width={50} className='mr-5' />
                                <img src={iconline} alt="" width={50} className='mr-5'/>
                                <img src={icontiktok} alt="" width={50}/>
                            </div>
                    </div>
                    <div class="mt-8 border-t border-gray-600 pt-4 text-center">
                        <p>&copy; 2030 STARBUG. All rights reserved.</p>
                    </div>
                </div>
        </footer>
    </>
  )
}

export default Footer