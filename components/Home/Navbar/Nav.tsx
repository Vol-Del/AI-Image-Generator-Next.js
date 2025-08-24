"use client"
import React, {useEffect, useState} from 'react'
import Link from "next/link";
import { Navlinks } from "@/constant/constant";
import {MenuIcon, Search, ShoppingCart} from "lucide-react";

type Props = {
    openNav:()=>void;
}

const Nav = ({openNav}:Props) => {

    const [navBg, setNavBg] = useState(false);
    useEffect(() => {
        const handler = ()=> {
            if(window.scrollY >= 90) setNavBg(true);
            if(window.scrollY < 90) setNavBg(false);
        };

        window.addEventListener("scroll", handler);

        return () => window.removeEventListener("scroll", handler);

    }, []);

    const bg_style = navBg?"bg-gray-900 shadow-md": "";

    return (
        <div className={`flex ${bg_style} items-center justify-between h-[12vh] fixed z-[100] w-full mx-auto transition-all duration-200 bg-gray-900 px-8`}>
            {/*LOGO*/}
            <h1 className="text-3xl text-white font-bold">AVP Softworks</h1>

            <div className="md:flex items-center space-x-10 hidden">
                {/* Navlink */}
                {Navlinks.map((link) => {
                    return (
                        <Link
                            key={link.id}
                            href={link.url}
                            className="relative text-white text-base w-fit block group"
                        >
                            <p>{link.label}</p>
                            <span className="block absolute bottom-0 left-0 w-0 h-[3px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    );
                })}
            </div>
            {/* Buttons and icons */}
            <div className="flex items-center space-x-5 md:space-x-8 text-white mr-8 md:mr-16">
                <ShoppingCart className="cursor-pointer w-6 h-6"/>
                <Search className="cursor-pointer w-6 h-6"/>
                <MenuIcon onClick={openNav} className="cursor-pointer w-6 h-6 md:hidden"/>
            </div>
        </div>
    )
}

export default Nav