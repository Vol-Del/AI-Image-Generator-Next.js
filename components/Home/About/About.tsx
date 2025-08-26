import React from 'react'
import Image from "next/image";
import {Button} from "@/components/ui/button";

const About = () => {
    return (
        <div className="pt-16 pb-16">
            <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
                {/* Image */}
                <div className="order-2 xl:order-1">
                    <Image src="/images/about.jpg" alt="about" width={400} height={400} className="w-full rounded-lg" />
                </div>
                {/* Content */}
                <div className="order-1 xl:order-2">
                    <h1 className="text-gray-300 mb-4 font-semibold text-lg capitalize">
                        What we do
                    </h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Create your own AI Image
                    </h1>
                    <p className="text-gray-200 mb-8 text-base">
                        Sed faucibus nibh at urna egestas, sit amet lobortis mauris posuere. Fusce consequat vel arcu ut sodales. Integer in egestas nibh. Nunc vestibulum velit non scelerisque efficitur. In sit amet justo interdum, iaculis eros at, sagittis dui. Sed facilisis ex id est ultricies commodo. Nullam sed turpis magna. Donec urna nibh, sollicitudin eu lobortis eget, rhoncus id turpis. Proin vel aliquam odio, lobortis aliquet orci. Donec sed pretium nibh, eget suscipit est.
                    </p>
                    <Button className="bg-rose-500 w-36 h-12 text-base uppercase" size={"lg"}>About us</Button>
                </div>
            </div>
        </div>
    )
}
export default About
