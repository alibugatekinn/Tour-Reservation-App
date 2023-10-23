"use client"
import BlogCarousel from "./components/blog carousel"
import Categories from "./components/categories"
import InterestedTours from "./components/interested tours"
import Carousel from "./components/popular tours carrousel"
import SearchTour from "./components/search tour"
import React, { useEffect } from "react";


export default function Home() {

  
  useEffect(() => {
    async function fetchData() {
      // Rastgele bir e-posta ve şifre oluşturalım
      const randomEmail = `${Math.random().toString(36).substring(7)}@example.com`;
      const randomPassword = Math.random().toString(36).substring(7);

      const response = await fetch('https://squid-app-68893.ondigitalocean.app/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: randomEmail,
          password: randomPassword,
        }),
      });

      const data = await response.json();
      console.log(data);
    }

    fetchData();
  }, []);
  


  return (

    <div className='w-full h-fit  font-inter flex flex-col items-center '>
      <div className='w-full h-full  flex flex-col items-center justify-center' style={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url('/images/kapak.jpeg')`,
        backgroundSize: 'cover',      // Resmin div'i tamamen kaplamasını sağlar
        backgroundPosition: 'center', // Resmin merkezde olmasını sağlar
        backgroundRepeat: 'no-repeat' // Resmin tekrarlanmamasını sağlar
      }}>
<div className='text-[60px] text-center text-white z-10'>Bugasoft Tour’da<br></br>tatil fırsatları bitmiyor!</div>
        <div className='bg-black bg-opacity-30 w-full h-full absolute z-[9]'></div>
        <SearchTour />
      </div>

      <Carousel/>
      <div className="h-[100px]"></div>
      <Categories/>
      <div className="h-[300px]"></div>
      <InterestedTours/>
      <div className="h-[300px]"></div>
      <BlogCarousel/>
      
      <div className="h-[300px]"></div>
      
    </div>
  )
}
