import React from 'react'
import Hero from "@/components/Home/Hero/Hero";
import RecentImage from "@/components/Home/RecentImage/RecentImage";
import About from "@/components/Home/About/About";
import Price from "@/components/Home/Price/Price";

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero/>
            <RecentImage/>
            <About/>
            <Price/>
        </div>
    )
}
export default Home
