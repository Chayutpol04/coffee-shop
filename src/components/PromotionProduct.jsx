import React from 'react'
import CoffeeData from './MenuData'
import CoffeeDis from './CoffeeDis'
function PromotionProduct() {
  return (
    <>
      <div className='mx-auto w-full mt-10'>
        <div className='container mx-auto px-6'>
            <h2 className='mb-6 text-4xl text-center md:text-5xl'>
                Now Promotion
            </h2>
            <p className="max-w-lg mx-auto text-center text-xl">
                "Promotion is only January 1st to January 12th. 2030"
            </p>
        </div>
        <div className="container mx-auto mt-10 grid gap-8 grid-cols-1 w-fit sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 justify-center">
        {CoffeeData.map((card) => (
            <CoffeeDis key={card.id} card={card} />
        ))}
        </div>
      </div>
    </>
  )
}

export default PromotionProduct