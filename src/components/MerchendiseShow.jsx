import React from 'react'
import MerchendiseData from './MerchendiseData'
import CoffeeAll from './CoffeeAll'
function MerchendiseShow() {

    return (
        <>
            <div className="container mx-auto mt-10 grid gap-8 grid-cols-1 w-fit sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 justify-center">
            {MerchendiseData.map((card) => (
                <CoffeeAll key={card.id} card={card} />
            ))}
            </div>
        </>
    );
}

export default MerchendiseShow

