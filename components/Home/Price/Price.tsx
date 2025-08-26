import React from 'react'
import {Check} from "lucide-react";

const Price = () => {
    return (
        <div className="pt-16 pb-16 bg-gray-950">
            <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
                {/*Content*/}
                <div>
                    <h1 className="uppercase text-white mb-6 font-bold">Flexible & cheap</h1>
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-white">Our Pricing Plans</h1>
                    <p className="text-white font-medium text-opacity-70">
                        Nullam aliquam mi at commodo volutpat. Aliquam felis lectus, pulvinar id dictum vitae, scelerisque nec odio. Nunc consectetur, urna sit amet posuere hendrerit, risus leo luctus magna, sollicitudin cursus lacus sapien sit amet enim. Phasellus ultrices nisi quis nunc suscipit, at malesuada urna ultricies.
                    </p>
                    <div className="mt-8">
                        <div className="flex items-center space-x-3 mb-3">
                            <Check className="w-6 h-6 text-green-500"/>
                            <p className="text-lg text-white font-semibold text-opacity-60">High Quality Services</p>
                        </div>
                        <div className="flex items-center space-x-3 mb-3">
                            <Check className="w-6 h-6 text-green-500"/>
                            <p className="text-lg text-white font-semibold text-opacity-60">24/7 Support</p>
                        </div>
                        <div className="flex items-center space-x-3 mb-3">
                            <Check className="w-6 h-6 text-green-500"/>
                            <p className="text-lg text-white font-semibold text-opacity-60">Affordable rates</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Price
