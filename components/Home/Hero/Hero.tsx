import React from 'react'
import {Button} from "@/components/ui/button";

const Hero = () => {
    return (
        <div className="w-[95%] min-h-screen relative mx-auto mt-[20vh]">
            {/* Content */}
            <div className="relative z-10 text-white flex flex-col items-center justify-center">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-r from-orange-300 to-cyan-500 bg-clip-text text-transparent">
                    Generate Beautiful Image with <br/> AI{" "}
                </h1>
                <p className="mt-3 text-sm md:text-base font-semibold text-center text-gray-300">
                    Get started with our powerful AI image generation
                </p>
                {/* Prompt input box */}
                <div className="h-11 md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between">
                    <input type="text" placeholder="Generate Image" className="h-full rounded-lg outline-none w-full text-black block flex-1 placeholder:text-xs sm:placeholder:text-base"/>
                    <Button variant={"default"} size={"lg"}> Generate </Button>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap items-center mt-6 gap-x-4 gap-y-3">
                    <p className="mb-2">Popular Tag:</p>
                    <Button variant={"secondary"}>Creative</Button>
                    <Button variant={"secondary"}>Realistic</Button>
                    <Button variant={"secondary"}>Creative</Button>
                    <Button variant={"secondary"}>Animation</Button>
                    <Button variant={"secondary"}>Business</Button>
                </div>
            </div>
        </div>
    )
}
export default Hero
