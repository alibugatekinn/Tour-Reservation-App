"use client"
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import {Button} from "antd"

  import { StarFilled,LeftOutlined,RightOutlined } from '@ant-design/icons';
export default function InterestedTours (){

    const tourTypes = [
        "Kültürel Turlar",
        "Doğa ve Macera Turları",
        "Yemek ve Şarap Turları",
        "Şehir Turları",
        "Kırsal Turlar",
        "Deniz ve Plaj Turları",
        "Vahşi Yaşam Turları",
        "Eğlence Parkı ve Tema Park Turları"
      ];
      
      const colors = [
        'bg-red-500',
        'bg-yellow-400',
        'bg-green-500',
        'bg-blue-500',
        'bg-indigo-600',
        'bg-purple-500',
        'bg-pink-500',
        'bg-gray-400'
      ];

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div className='w-full flex justify-center items-center items-center'>
      <div  className='w-[80%] flex flex-row justify-between items-center  gap-10'>
      <div className='w-[47%] flex flex-col gap-5 pr-10'>
        <div className='font-bold text-[52px]'>İlginizi çekebilecek turlar <br></br> <span className='text-red-500'>burada</span></div>
        <div><a href='/' className='text-black underline font-semibold text-[18px]'>Tüm Turları Gör</a></div>
        </div>
      <div className='w-[60%] absolute right-[-100px] '>
      <ItemsCarousel 
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={<Button className=' absolute left-[-20px] flex justify-center items-center bg-white backdrop-blur-xl bg-opacity-30 h-[400px] '
            icon={<LeftOutlined style={{color:'black', fontSize:'50px'}} />}
              type='text'
              >
            </Button>}
        rightChevron={<Button style={{width:'100px'}} className='absolute flex justify-center items-center bg-white backdrop-blur-sm bg-opacity-20 h-[400px] w-[300px] right-[140px] z-[100]'
            icon={<RightOutlined style={{color:'black', fontSize:'50px'}} />}
              type='text'
              >
            </Button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {tourTypes.map((card, index) => (
        <div 
          key={index} 
          className={`cursor-pointer text-white text-center h-[400px] rounded-3xl flex justify-center items-center ${colors[index]}`}
        >
          {card}
        </div>
      ))}
      </ItemsCarousel>
      </div>
      
    </div>
    </div>
    
  );
};