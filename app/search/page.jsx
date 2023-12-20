"use client"

import {  useSearchParams } from 'next/navigation'
import SearchTour2 from '../components/search tour 2'
import TourCard from '../components/tourCard'
import InterestedTours from '../components/interested tours';
import BlogCarousel from '../components/blog carousel';
import { turlarimiz} from '../utils/turlardan';
import Link from 'next/link';
import useStore from '../state management/store';

export default function TurAra() {
  const { location, setLocation, date , setDate} = useStore();
 

  const numberOfTourCards = 3; // 5 tane TourCard bileşeni oluşturmak için sayıyı ayarlayın

  const tourCards = [];
  for (let i = 0; i < turlarimiz.length; i++) {
    if(turlarimiz[i].name==location+" Turu"){
      tourCards.push(<TourCard key={i} name={turlarimiz[i].name} slug={turlarimiz[i].slug} />);
    }
    
}


  return (
    <div className='w-full h-fit flex flex-col justify-center items-center'>
      <div className=' flex flex-col items-center justify-center' style={{
        width: '100%',
        height: '400px',
        backgroundImage: `url('/images/kapak.jpeg')`,
        backgroundSize: 'cover',      // Resmin div'i tamamen kaplamasını sağlar
        backgroundPosition: 'center', // Resmin merkezde olmasını sağlar
        backgroundRepeat: 'no-repeat' // Resmin tekrarlanmamasını sağlar
      }}>

        <div className='bg-black bg-opacity-30 w-full h-fit absolute z-9'></div>
        <div className=' w-full h-[100px]  z-9'></div>
        <SearchTour2 />
        
      </div>
      <div className='h-[150px]  w-[90%] font-bold text-[32px] flex flex-col justify-center '>Arama Sonuçları</div>
      
      {tourCards} {/* Oluşturulan TourCard bileşenlerini burada gösterin */}
      <div className="h-[200px]"></div>
      <InterestedTours/>
      <div className="h-[200px]"></div>
      <BlogCarousel/>
      <div className="h-[200px]"></div>
      <div>
      
    </div>
    </div>
  )
}
