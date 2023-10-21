"use client"
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import {Button} from "antd"
import Link from 'next/link';
  import { StarFilled,LeftOutlined,RightOutlined } from '@ant-design/icons';
export default function BlogCarousel (){

    const tourTypes = [
        "Şubatta Venedik Karnavalı",
        "Bu Yaz Phuketteydik",
        "Likya Yolu Maceramız",
        "Gökçeada'da Dalış günlüğüm",
        
      ];
      
      const colors = [
        'bg-red-100',
        'bg-green-100',
        'bg-blue-100',
        'bg-indigo-100',
        'bg-purple-100',
        'bg-pink-100',
        'bg-gray-100'
      ];

      const colors_dark = [
        'text-red-500',
        'text-green-500',
        'text-blue-500',
        'text-indigo-500',
        'text-purple-500',
        'text-pink-500',
        'text-gray-500'
      ];

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div className='w-full flex justify-center items-center items-center'>
      <div  className='w-[80%] '>
     
      
      <ItemsCarousel 
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={20}
        leftChevron={<Button className='w-[150px] h-[150px] mr-10 flex justify-center items-center'
            icon={<LeftOutlined className='text-gray-400 ' style={{ fontSize:'40px'}} />}
              type='text'
              >
            </Button>}
        rightChevron={<Button className='w-[150px] h-[150px] ml-10 flex justify-center items-center'
            icon={<RightOutlined className='text-gray-400 '  style={{fontSize:'40px'}} />}
              type='text'
              >
            </Button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {tourTypes.map((card, index) => (
        <div 
          key={index} 
          className={` text-white text-center h-[500px] rounded-3xl flex justify-center items-center ${colors[index]}`}
        >
          <div style={{
       
        backgroundImage: `url('/images/kapak.jpeg')`,
        backgroundSize: 'cover',      // Resmin div'i tamamen kaplamasını sağlar
        backgroundPosition: 'center', // Resmin merkezde olmasını sağlar
        backgroundRepeat: 'no-repeat' // Resmin tekrarlanmamasını sağlar
      }} className='w-[40%] h-[70%] rounded-xl bg-green-500 shadow-xl ml-20 mr-10 '></div>
          <div className='w-1/3 h-[60%] flex flex-col justify-between items-start mr-20 ml-10 gap-1'>
            <div className='flex flex-col justify-between items-start'>
            <div className='text-black font-bold text-[50px] text-left'>{card}</div>
            <span className={`text-red-500 text-left text-[45px] ${colors_dark[index]}` }>Blog yazısı</span>
            </div>
            <Link href='/' className={`  ${colors_dark[index]}  underline font-bold text-[25px]`}>Oku</Link>
            
          </div>
        </div>
      ))}
      </ItemsCarousel>
      
      
    </div>
    </div>
    
  );
};