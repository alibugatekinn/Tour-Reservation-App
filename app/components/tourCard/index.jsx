"use client"
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useStore from '../../state management/store';

export default function TourCard(props) {

  console.log(props);
  const colors = [
    'bg-red-100 text-red-500', // İlk genre için renk
    'bg-green-100 text-green-500', // İkinci genre için renk
    'bg-blue-100 text-blue-500' // Üçüncü genre için renk
  ];
  const router = useRouter();  // useRouter hook'unu çağırarak router nesnesini elde edin

  const handleCardClick = () => {
 
    useStore.getState().setSelectedTourId(props.key2);
    useStore.getState().setSelectedTourName(props.name);
    useStore.getState().setSelectedTourSlug(props.slug);
    useStore.getState().setSelectedTourRoutes(props.routes);
    useStore.getState().setSelectedTourGenres(props.genres);
    useStore.getState().setSelectedTourProgram(props.program);
    useStore.getState().setSelectedTourDestinations(props.destinations);
    useStore.getState().setSelectedTourPhotos(props.generalPhotos);
    useStore.getState().setSelectedTourInfo(props.generalInformation);
    // Yönlendirme yap
    localStorage.setItem('selectedTour', JSON.stringify(useStore.getState().selectedTourId));
    router.push(`/turum/${props.slug}`);
  };
  

  return (

    <div onClick={handleCardClick} className='w-[65%] h-[340px] p-5 gap-5 border-[1px] shadow-sm rounded-3xl flex flex-row justify-center items-center m-5 cursor-pointer'>
      <div className='w-[35%] h-full  bg-blue-400 rounded-2xl'>
        <img className='w-full h-full rounded-2xl' src="https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div>
      <div className='w-[65%] h-full  rounded-2xl flex flex-row justify-center items-center p-5 gap-8'>
        <div className='w-2/3 h-full  flex flex-col justify-between'>
          <div className='flex flex-row items-center gap-4'>
            <h1 className='text-[30px] font-bold'>{props.name}</h1>
            <div className='flex flex-row justify-center items-center gap-1'>
              <img className=' h-[15px]' src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="" />
              <p className='text-[20px] h-[30px]'>6.2</p>
            </div>
          </div>
          <div className='text-[20px] text-left font-semibold flex flex-row items-center gap-1 flex-wrap'>
            {props.routes.map((route, index) => (
              <span className='w-fit h-fit flex flex-row justify-center items-center whitespace-nowrap overflow-hidden truncate flex-wrap' key={index}>
                {route}
                {index === 0 && props.routes.length > 1 ? <span> &rarr; </span> : null}
                {index > 0 && index !== props.routes.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>            <div className='text-[20px] font-light flex flex-row items-center gap-1'>
            <img className='h-[22px]' src="https://img.icons8.com/?size=512&id=ZjvNAkHXtjKW&format=png" alt="" />
            <div>{props.program.length} gün</div>
          </div>
          <div className='text-[20px] font-light flex flex-row items-center gap-1'>
            <img className='h-[22px]' src="https://img.icons8.com/?size=512&id=14035&format=png" alt="" />
            <div>Tarih aralıkları güncellenecektir</div>
          </div>
        </div>
        <div className='w-1/3 h-full  flex flex-col justify-between'>
          <div className='w-full h-2/3 flex flex-col justify-start items-end  gap-1'>
            <div className="flex flex-row justify-center items-center gap-4">
              {props.genres.slice(0, 3).map((genre, index) => (
                <div
                  key={index}
                  className={`w-1/2 px-[8px] py-[16px] h-1/6 ${colors[index]} flex justify-center items-center rounded-xl`}
                >
                  {genre}
                </div>
              ))}
            </div>
          </div>
          <div className='w-full h-1/3 flex flex-col justify-center items-center text-white bg-red-500 rounded-2xl'>
            <p className='text-[28px]'>1325€</p>
            <p className='text-[18px]'>Başlangıç Fiyatı</p>
          </div>
        </div>
      </div>
    </div>


  )
}
