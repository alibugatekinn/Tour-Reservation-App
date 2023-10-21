"use client"
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Button } from "antd"

import { StarFilled, LeftOutlined, RightOutlined } from '@ant-design/icons';
export default function Categories() {



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
    <div className='w-[80%] flex flex-col gap-10'>
      <div className='font-bold text-[52px] text-left w-full flex flex-col'>
        <div className=' text-black'>Tatiliniz için kategorilerimiz</div>
        <div className='text-red-500'>Burada</div>
      </div>

      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={5}
        gutter={20}
        leftChevron={<Button
          icon={<LeftOutlined style={{ color: 'black', fontSize: '25px' }} />}
          type='text'
        >
        </Button>}
        rightChevron={<Button
          icon={<RightOutlined style={{ color: 'black', fontSize: '25px' }} />}
          type='text'
        >
        </Button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {tourTypes.map((card, index) => (
          <div
            key={index}
            className={`cursor-pointer text-white text-center h-[200px] rounded-3xl flex justify-center items-center ${colors[index]}`}
          >
            {card}
          </div>
        ))}
      </ItemsCarousel>
    </div>
  );
};