import React from 'react'
import {QuoteIcon} from "lucide-react";
import Image from "next/image";

type Props = {
    image: string;
    name: string;
    role: string;
}

const ReviewCard = ({image, name, role}: Props) => {
    return (
        <div className="flex items-center justify-center flex-col">
            <QuoteIcon className="w-10 h-10 text-yellow-300" />
            <p className="text-center mt-4 text-white text-base md:text-lg lg:text-xl font-semibold text-white/80">{name}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus in sapien non bibendum. Cras et aliquet mi. Ut vitae consectetur quam, quis placerat orci. Proin dui nibh, auctor vehicula lorem eget, suscipit tincidunt nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque porta odio in lectus mattis laoreet. Donec ac lacus tortor. Etiam quis enim metus. Suspendisse pretium lacus sit amet velit vestibulum, a sodales lorem auctor. Morbi sagittis dolor ut orci lobortis aliquam. Nunc placerat urna imperdiet, blandit dui at, consectetur leo.
            </p>
            <div className="mt-8">
                <h1 className="text-base md:text-2xl font-bold text-white text-center">{name}</h1>
                <p className="text-sm md:text-lg font-bold text-white text-center">{role}</p>
                <Image src={image} alt={name} height={80} width={80} className="rounded-full mt-6 mx-auto object-cover" />
            </div>
        </div>
    )
}
export default ReviewCard;
