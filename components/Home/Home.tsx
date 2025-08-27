import React from 'react'
import Hero from "@/components/Home/Hero/Hero";
import RecentImage from "@/components/Home/RecentImage/RecentImage";
import About from "@/components/Home/About/About";
import Price from "@/components/Home/Price/Price";
import Review from "@/components/Home/Review/Review";
import Faq from "@/components/Home/Faq/Faq";

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero/>
            <RecentImage/>
            <About/>
            <Price/>
            <Review/>
            <Faq/>
        </div>
    )
}
export default Home
