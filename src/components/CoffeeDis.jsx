import React from 'react'

function CoffeeDis({card}) {
    const { imageUrl, title, description, price,isPromotion } = card;
    if (!isPromotion) {
      return null;
    }
    return (

      <div className="max-w-sm shadow-md  rounded-md overflow-hidden transition-transform hover:scale-105">
        <img className="w-full h-50 object-cover" src={imageUrl} alt="Card " />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700">"{description}"</p>
        </div>
        <div className="bg-coffeecolor1 text-2xl space-x-5 p-4">
          <span className='font-bold text-white'>Price :</span>
          <s className='text-red-500 font-bold'><span className="text-white">{price}$</span></s>
          <span className="text-white font-bold ">{price-10}$</span>
        </div>
      </div>
    );
}

export default CoffeeDis