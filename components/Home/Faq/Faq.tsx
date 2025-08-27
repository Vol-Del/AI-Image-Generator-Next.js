import React from 'react'
import Image from 'next/image'
import FaqCard from "@/components/Home/Faq/FaqCard";

const Faq = () => {
    return (
        <div className="pt-16 pb-16 bg-gray-950">
            <div className="w-[80%] mx-auto mt-16 grid-cols-1 grid md:grid-cols-2 gap-10 items-center">
                {/* Image */}
                <div>
                    <Image src="/images/faq.png" alt="faq" width={500} height={500}/>
                </div>
                {/* Faq Card */}
                <FaqCard/>
            </div>
        </div>
    )
}
export default Faq
