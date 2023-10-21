"use client"
import {Button} from "antd"
  import React, { useState } from "react";
  import { StarFilled,LeftOutlined,RightOutlined } from '@ant-design/icons';


function Carousel() {
    
  const [start, setStart] = useState(0);
  const images = [
    "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/17636489/pexels-photo-17636489/free-photo-of-peyzaj-adam-orman-doga-yuruyusu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/17366637/pexels-photo-17366637/free-photo-of-peyzaj-daglar-kadin-bulutlar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/15031960/pexels-photo-15031960/free-photo-of-deniz-safak-plaj-tatil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // ... diğer resimler
  ];


  
  const nextSlide = () => {
    if (start < images.length - 3) {
      setStart(start + 1);
    }
  };

  const prevSlide = () => {
    if (start > 0) {
      setStart(start - 1);
    }
  };

  const displayImages = images.slice(start, start + 3).map((image, index) => (
   <div style={{backgroundImage:`url(${image})`,backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} key={index} className="w-1/3 h-full transition-all ease-in-out duration-300 rounded-[20px]">
    <div className="h-full w-full bg-black bg-opacity-40 flex flex-col justify-center items-center  rounded-[20px]">
    <div className="w-full h-1/2 flex flex-row justify-center items-center">
        <div className="w-[100%] h-1/3 flex flex-col justify-end items-end">
            <div className=" text-white w-[150px] h-[80px] mr-[-40px] bg-red-500 rounded-3xl flex flex-col justify-center items-center gap-0">
                <span className="text-[24px]">3500€</span>
                <span className="text-[12px]">Başlangıç Fiyatı</span>
            </div>
        </div>
    </div>
    <div className="w-full h-1/2 flex flex-col justify-center items-center">
    <div className="w-[80%] text-[32px] text-white font-semibold">
            Venedik
        </div>
        <div className="w-[80%] flex flex-row justify-start items-center gap-2">
            <StarFilled style={{color:'yellow' , fontSize:'25px'}}/>
            <span className="text-[23px] text-white">6.2</span>
        </div>
    </div>
    </div>
    
    
   </div>
    
  ));

  return (
    <div className="w-full h-[800px] bg-gray-200 flex justify-center">
      <div className="relative shadow-md w-[80%] h-[700px] bg-slate-100 bg-opacity-50 backdrop-blur-md flex flex-row justify-center items-center overflow-hidden px-[100px] rounded-[40px] mt-[-50px] z-10">
      <Button
        icon={<LeftOutlined style={{color:'black', fontSize:'25px'}} />}
        className={` ring-yok focus:shadow-none  absolute shadow-none left-[10px]  flex justify-center items-center bg-transparent border-none top-1/2 z-10  text-white p-2 ${start === 0 ? 'hidden cursor-not-allowed' : ''}`}
        onClick={prevSlide}
        disabled={start === 0}
        type='text'
      >
        
      </Button>
      <div className="  flex flex-row gap-[7%] w-full h-[70%]" >{displayImages}</div>
      <Button
      icon={<RightOutlined style={{color:'black', fontSize:'25px'}} />}
        className={` ring-yok focus:border-none absolute right-[10px] flex justify-center items-center top-1/2 z-10 bg-transparent shadow-none border-none text-white p-2 ${start >= images.length - 3 ? 'hidden cursor-not-allowed' : ''}`}
        onClick={nextSlide}
        disabled={start >= images.length - 3}
        type='text'
        >
      </Button>
    </div>
    </div>
    
  );
}

export default Carousel;
