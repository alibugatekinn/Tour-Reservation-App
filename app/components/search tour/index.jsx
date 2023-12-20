"use client"
import React, { useState } from 'react'
import {SearchOutlined,UserOutlined } from '@ant-design/icons';
import { AutoComplete,DatePicker,Button } from 'antd';
import Link from 'next/link';
const { RangePicker } = DatePicker;
import useStore from '../../state management/store';

export default function SearchTour() {
  
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedDates, setSelectedDates] = useState(null);
    const [options, setOptions] = useState([]);
    const { location, setLocation, date , setDate} = useStore();
   



    const getPanelValue = (searchText) => {
      if (!searchText) return [];
    
      return cities
        .filter(city => city.toLowerCase().startsWith(searchText.toLowerCase()))
        .map(city => ({ value: city }));
    };
  
    const cities = [
      "Ankara",
      "İstanbul",
      "İzmir",
      "Bursa",
      "Antalya",
      "Berlin",
      "Paris",
      "Londra",
      "New York",
      "Tokyo",
      "Adana",
      "Barcelona",
      "Roma",
      "Prag",
      "Kudüs",
      "Kahire",
      "Bangkok",
      "Sidney",
      "Kuala Lumpur",
      "Saraybosna",
      "Budapeşte",
      "Atina",
      "Sofya",
      "Varşova",
      "Dublin",
      "Brüksel",
      "Amsterdam",
      "Oslo",
      "Stockholm",
      "Kopenhag"
    ];
    

  return (
    <div className='z-10 w-full flex flex-col items-center justify-center'>
    
    <div className='flex flex-row space-x-3 px-3 items-center w-full max-w-[80%] md:max-w-[70%] lg:max-w-[60%] min-w-[400px] h-[110px] rounded-2xl  bg-opacity-40'>
      <div className='w-[30%] shadow-2xl bg-white bg-opacity-82 h-[75%] rounded-2xl flex flex-col justify-center items-center'>
        <span className='w-[80%] text-left text-[19px]  '>Konum</span>
        <hr className=" border-t-1 w-[80%] border-black border-opacity-16" />
        <AutoComplete
      options={options}
      className='w-[80%] h-1/3'
      placeholder="Şehir Ara"
      onSearch={(text) => setOptions(getPanelValue(text))}
      onSelect={(city) => setLocation(city)}
      bordered={false}
    />
      </div>
      <div className='w-[40%] shadow-2xl bg-white bg-opacity-82 h-[75%] rounded-2xl flex flex-col justify-center items-center'>
        <span className='w-[85%] text-left text-[19px] '>Tarih Aralığı</span>
        <hr className=" border-t-1 w-[85%] border-black border-opacity-16" />
        <RangePicker onChange={(dates, dateStrings) => setDate(dateStrings)} className=' h-1/3 svg-fix w-[85%] no-padding text-[16px]' placeholder={["Başlangıç", "Bitiş"]}  bordered={false} />
      </div>
      <Link className='w-[30%] h-[75%]'  href={{ pathname: '/search',}}>
      <div className=" w-full h-full text-[18px] hover:border-none text-white border-none shadow-2xl bg-[#FF4343]  rounded-2xl flex justify-center items-center gap-1">
        <SearchOutlined />
        Tur Arama
      </div>
    </Link>
    </div>
</div>
  )
}
