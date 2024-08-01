"use client"
import React from 'react'
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const MainHead = () => {
  return (
    <main className="flexBetween min-h-screen flex-col overflow-clip">
      <div className="w-full relative">
        <Image src="/heroBg.svg" alt="" className="absolute left-0 top-0 right-0 h-full md:h-auto max-h-[800px] w-full object-cover -z-10" width={1320} height={720} />
        <Navbar/>
        <Header />
      </div>     
    </main>
  )
}

export default MainHead