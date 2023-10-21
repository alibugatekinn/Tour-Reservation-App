import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
export default function TourCard(props) {


  const router = useRouter();  // useRouter hook'unu çağırarak router nesnesini elde edin

  const handleCardClick = () => {
    router.push(`/turum/${props.slug}`);  // Kart tıklanınca yönlendirme yap
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
            <div className='text-[20px] text-left font-semibold flex flex-row items-center gap-1'>Istanbul &rarr; Fiumicino Airport, Colosseum, Roman Forum, Pantheon...</div>
            <div className='text-[20px] font-light flex flex-row items-center gap-1'>
              <img className='h-[22px]' src="https://img.icons8.com/?size=512&id=ZjvNAkHXtjKW&format=png" alt="" />
              <div>7 Gece 8 Gün</div>
            </div>
            <div className='text-[20px] font-light flex flex-row items-center gap-1'>
              <img className='h-[22px]' src="https://img.icons8.com/?size=512&id=14035&format=png" alt="" />
              <div>17 Eylül 2023 - 15 Ekim 2023 arası 5 tur</div>
            </div>
          </div>
          <div className='w-1/3 h-full  flex flex-col justify-between'>
            <div className='w-full h-2/3 flex flex-col justify-start items-end  gap-1'>
              <div className=' w-1/2 px-[8px] py-[16px] h-1/6 bg-red-100 text-red-500 flex flex-row justify-center items-center rounded-xl'>2023</div>
              <div className='w-1/2 px-[8px] py-[16px] h-1/6 bg-green-100 text-green-500 flex flex-row justify-center items-center rounded-xl'>Yaz</div>
              <div className='w-1/2 px-[8px] py-[16px] h-1/6 bg-blue-100 text-blue-500 flex flex-row justify-center items-center rounded-xl'>Yurt Dışı</div>
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
