"use client"
import React, { useState } from 'react'
import {SearchOutlined,UserOutlined,CheckOutlined,PlusCircleOutlined,MinusCircleOutlined } from '@ant-design/icons';
import { AutoComplete,DatePicker,Button } from 'antd';
import Link from 'next/link';
const { RangePicker } = DatePicker;
import useStore from '../../state management/store';
import { DownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { notification } from 'antd';

export default function Reservation() {
  
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedDates, setSelectedDates] = useState(null);
    const [options, setOptions] = useState([]);
    const { location, setLocation, date , setDate, signIn} = useStore();
   
    const showNotification = () => {
      if (signIn===true) {
        notification.success({
          message: 'Rezervasyon Başarılı!',
          description: 'Yetkili personel sizinle iletişime geçecek.',
          placement: 'top', // Bildirimin görüneceği konum
        });
      }
      else{
        notification.error({
          message: 'Rezervasyon Başarısız!',
          description: 'Lütfen önce giriş yapın!',
          placement: 'top', // Bildirimin görüneceği konum
        });
      }
      
    };

    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      const onSearch = (value) => {
        console.log('search:', value);
      };

      const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    const items = [
        
      ];

      function getRandomStartDate(month, year) {
        const startDate = new Date(year, month, 1);
        const endDate = new Date(year, month + 1, 0);
        const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
        
        return randomDate;
    }
    
    function addDays(date, days) {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + days);
        return newDate;
    }

    const month = 9; // Ekim (Ocak = 0, Şubat = 1, ... , Ekim = 9)
const year = 2023;

for (let i = 0; i < 5; i++) {
    const startDate = getRandomStartDate(month, year);
    const endDate = addDays(startDate, 7);

    const label = `${startDate.getDate()} Ekim - ${endDate.getDate()} ${endDate.getMonth() === month ? 'Ekim' : 'Kasım'} ${year}`;
    items.push({
        value: label,
        label: label
    });
}



 
   

  return (
    <div className='z-10 w-full flex flex-col items-center justify-center m-[-55px]'>
    
    <div className='flex flex-row space-x-3 px-3 items-center w-full max-w-[80%] md:max-w-[70%] lg:max-w-[60%] min-w-[400px] h-[110px] rounded-2xl  bg-opacity-40'>
      <div className='w-[30%] shadow-2xl bg-white bg-opacity-82 h-[75%] rounded-2xl flex flex-col justify-center items-center'>
        <span className='w-[80%] text-left text-[19px]  '>Tur tarihleri</span>
        <hr className=" border-t-1 w-[80%] border-black border-opacity-16 m-1" />
        <Select className='w-[80%] text-[18px] h-1/3 border-none'
    showSearch
    placeholder="Tur Tarihi Seç"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
    options={items}
  />
      </div>
      <div className='w-[40%] shadow-2xl bg-white bg-opacity-82 h-[75%] rounded-2xl flex flex-col justify-center items-center'>
        <span className='w-[85%] text-left text-[19px] '>Misafir Sayısı</span>
        <hr className=" border-t-1 w-[85%] border-black border-opacity-16 m-1" />
        <div className='w-[80%] h-1/3 flex flex-row justify-center gap-2'>
            <div className='flex flex-row justify-between items-center gap-1'>
                <div className='flex flex-row gap-2 justify-center items-center'>
                <PlusCircleOutlined className='cursor-pointer text-[20px] bg-[#E2E2E2] rounded-full text-gray-400' />
                <span className='text-[18px]'>0</span>
                <MinusCircleOutlined className='cursor-pointer text-[20px] bg-[#E2E2E2] rounded-full text-gray-400'  />
                </div>
                <div>Yetişkin</div>
            </div>
            <div className='flex flex-row justify-between items-center gap-1'>
                <div className='flex flex-row gap-2 justify-center items-center'>
                <PlusCircleOutlined className='cursor-pointer text-[20px] bg-[#E2E2E2] rounded-full text-gray-400' />
                <span className='text-[18px]'>0</span>
                <MinusCircleOutlined className='cursor-pointer text-[20px] bg-[#E2E2E2] rounded-full text-gray-400' />
                </div>
                <div>Çocuk</div>
            </div>
        </div>
      </div>
      <div className='w-[30%] shadow-2xl bg-white bg-opacity-82 h-[75%] rounded-2xl flex flex-col justify-center items-center'>
        <span className='w-[80%] text-left text-[19px]  '>Toplam Tutar</span>
        <hr className=" border-t-1 w-[80%] border-black border-opacity-16 m-1" />
        <span className='text-[18px]'>1325€</span>
      </div>
      
      <div onClick={showNotification} className=" res-button w-[30%] h-[75%] text-[18px] hover:border-none text-white border-none shadow-2xl bg-[#FF4343] cursor-pointer  rounded-2xl flex justify-center items-center gap-1">
      <CheckOutlined />
        Rezervasyon Yap
      </div>
    
    </div>
</div>
  )
}
