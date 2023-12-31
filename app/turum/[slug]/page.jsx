"use client"
import Reservation from '@/app/components/reservation';
import { turlarimiz } from '../../utils/turlardan';
import TourTabs from '@/app/components/tourTabs';
import InterestedTours from '@/app/components/interested tours';
import useStore from '../../state management/store';
import { useEffect, useState } from 'react';
import { loginUser } from '@/app/Actions/userActions';
import UserSign from '@/app/components/userSign';






export async function generateStaticParams() {


  return turlarimiz.map((tur) => ({
    slug: tur.slug,
  }))
}

// using the `params` returned by `generateStaticParams`
export default function Page({ params }) {

  const colors = [
    'bg-red-100 text-red-500', // İlk genre için renk
    'bg-green-100 text-green-500', // İkinci genre için renk
    'bg-blue-100 text-blue-500' // Üçüncü genre için renk
  ];


  const { slug } = params;
  const { 
    selectedTourId,
  selectedTourName,
  selectedTourSlug,
  selectedTourRoutes,
  selectedTourGenres,
  selectedTourProgram,
  selectedTourDestinations,
  selectedTourPhotos,
  selectedTourInfo, setSignIn
  } = useStore();
  const [veri2, setVeri2] = useState([]);

  useEffect(() => {
    const localselected = JSON.parse(localStorage.getItem('selectedTour') || 'null');
    if (localselected) {
      fetch('https://seashell-app-8ha6z.ondigitalocean.app/api/tours/list')
        .then(response => response.json())
        .then(data => {
          if (data && data.tours) {
            const filteredTour = data.tours.find(tour => tour._id === localselected);
            if (filteredTour) {
              setVeri2(filteredTour);
              console.log(filteredTour);
            }
          }
        })
        .catch(error => console.error('Hata:', error));
    }
  }, []);
  


  // İlgili turun detaylarını göster
  return (
    <div className='w-full h-fit  font-inter flex flex-col items-center '>
      <div className=' flex flex-col items-center justify-center text-white' style={{
        width: '100%',
        height: '500px',
        backgroundImage: `url('https://images.pexels.com/photos/17366637/pexels-photo-17366637/free-photo-of-peyzaj-daglar-kadin-bulutlar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: 'cover',      // Resmin div'i tamamen kaplamasını sağlar
        backgroundPosition: 'center', // Resmin merkezde olmasını sağlar
        backgroundRepeat: 'no-repeat' // Resmin tekrarlanmamasını sağlar
      }}>
        <div className='flex flex-col justify-center items-center gap-2'>
          <div className='text-[90px] font-bold'>{veri2.name}</div>
          <div className='text-[20px] w-full text-center font-semibold flex flex-row justify-center items-center '>
          {veri2 && veri2.routes && veri2.routes.map((route, index) => (
  <span className='w-fit h-fit flex flex-row justify-center items-center whitespace-nowrap overflow-hidden truncate flex-wrap' key={index}>
    {route}
    {index === 0 && veri2.routes.length > 1 ? <span> &rarr; </span> : null}
    {index > 0 && index !== veri2.routes.length - 1 ? ', ' : ''}
  </span>
))}

          </div>
          <div className='text-[20px] font-light flex flex-row items-center gap-1'>
            <img className='h-[22px] text-white' src="https://img.icons8.com/?size=512&id=ZjvNAkHXtjKW&format=png" alt="" />
            <div>{veri2 && veri2.program ? `${veri2.program.length} Gün` : 'Yükleniyor...'}</div>
          </div>
          <div className='w-fit h-2/3 flex flex-row justify-center items-center opacity-80 gap-1'>
          {veri2 && veri2.genres && veri2.genres.slice(0, 3).map((genre, index) => (
  <div
    key={index}
    className={`w-1/2 px-[8px] py-[16px] h-1/6 ${colors[index]} flex justify-center items-center rounded-xl`}
  >
    {genre}
  </div>
))}

          </div>
        </div>
      </div>

      <Reservation />

      <div className="h-[100px] bg-transparent"></div>
      <TourTabs veri={veri2} />
      <div className="h-[300px] bg-transparent"></div>
      <InterestedTours />
      <div className="h-[300px] bg-transparent"></div>
      
    </div>
  );
}
