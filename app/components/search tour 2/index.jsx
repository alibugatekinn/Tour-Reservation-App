"use client"
import React, { useEffect, useState } from 'react'
import {SearchOutlined,UserOutlined } from '@ant-design/icons';
import { AutoComplete,DatePicker,Button } from 'antd';
import useStore from '../../state management/store';
import dayjs from 'dayjs';
const { RangePicker } = DatePicker;


export default function SearchTour2() {
    
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedDates, setSelectedDates] = useState(null);
    const [options, setOptions] = useState([]);
    const { location, setLocation,date,setDate,setMatchedTours2,matchedTours2, filteredTours, setfilteredTours} = useStore();
    const [veri, setveri]=useState(null);
  

    async function fetchTours() {
      try {
        const response = await fetch('https://seashell-app-8ha6z.ondigitalocean.app/api/tours/list');
        const data = await response.json();
        if (data && data.tours) {
          setMatchedTours2(data.tours);
        }
      } catch (error) {
        console.error('Hata:', error);
      }
    }
    
 
  useEffect(() => {
    fetch('https://seashell-app-8ha6z.ondigitalocean.app/api/tours/list')
      .then(response => response.json())
      .then(data => {
        if (data && data.tours) {
          setMatchedTours2(data.tours);
        }
      })
      .catch(error => console.error('Hata:', error));
  }, []); // Boş bağımlılık listesi: Bileşen yüklendiğinde bir kez çalışır

  useEffect(() => {
    console.log(matchedTours2, "liste2");
    if (location === '') {
      setfilteredTours(matchedTours2);
      
      
    } else {
      // location değerine göre filtreleme işlemi yapabilirsiniz
      const filtered = matchedTours2.filter(tour => tour.name.includes(location));
      setfilteredTours(filtered);
      

      
    }
  }, [matchedTours2]); // matchedTours2 veya location değiştiğinde çalışır
  


  const getPanelValue = (searchText) => {
    if (!searchText) return [];
  
    return cities
      .filter(city => city.toLowerCase().startsWith(searchText.toLowerCase()))
      .map(city => ({ value: city }));
  };
  
    const cities = [
      "Ankara",
      "Roma",
      "İstanbul",
      "İzmir",
      "Bursa",
      "Antalya",
      "Eskişehir",
      "Mersin",
      "Trabzon",
      "Samsun",
      "Konya",
      "Adana",
      "Kayseri",
      "Diyarbakır",
      "Denizli",
      "Şanlıurfa",
      "Malatya",
      "Hatay",
      "Erzurum",
      "Manisa",
      "Balıkesir",
      "Mardin",
      "Muğla",
      "Kütahya",
      "Van",
      "Uşak",
      "Tekirdağ",
      "Batman",
      "Kırklareli",
      "Bilecik",
      "Osmaniye",
      
    ];

  return (
    <div className='z-10 w-full flex flex-col items-center justify-center'>
    
    <div className='flex flex-row space-x-3 px-3 items-center w-full max-w-[80%] md:max-w-[70%] lg:max-w-[60%] min-w-[400px] h-[110px] rounded-2xl  bg-opacity-40'>
      <div className='w-[30%] shadow-2xl bg-white bg-opacity-82 h-[75%] rounded-2xl flex flex-col justify-center items-center'>
        <span className='w-[80%] text-left text-[19px]  '>Konum</span>
        <hr className=" border-t-1 w-[80%] border-black border-opacity-16" />
        <AutoComplete
    value={location} 
    options={options}
    className='w-[80%] h-1/3'
    placeholder="Şehir Ara"
    onSearch={(text) => setOptions(getPanelValue(text))}
    onSelect={(city) => setLocation(city)}
    onChange={(text) => setLocation(text)}  // Bu satırı ekledik
    bordered={false}
/>
      </div>
      <div className='w-[40%] shadow-2xl bg-white bg-opacity-82 h-[75%] rounded-2xl flex flex-col justify-center items-center'>
        <span className='w-[85%] text-left text-[19px] '>Tarih Aralığı</span>
        <hr className=" border-t-1 w-[85%] border-black border-opacity-16" />
        <RangePicker value={date ? [dayjs(date[0], 'YYYY-MM-DD'), dayjs(date[1], 'YYYY-MM-DD')] : []} onChange={(dates, dateStrings) => setDate(dateStrings)} className=' h-1/3 svg-fix w-[85%] no-padding text-[16px]' placeholder={["Başlangıç", "Bitiş"]}  bordered={false} />
      </div>
      
      <Button 
 type='button' onClick={()=>{fetchTours()}} className='w-[30%] text-[18px]  hover:border-none text-white border-none shadow-2xl bg-[#FF4343] h-[75%]  rounded-2xl justify-center items-center gap-1'  icon={<SearchOutlined />}>
        Tur Arama
      </Button>
      
    </div>
</div>
  )
}