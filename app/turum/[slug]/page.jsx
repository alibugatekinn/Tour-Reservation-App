


import Reservation from '@/app/components/reservation';
import { turlarimiz } from '../../utils/turlardan';
import TourTabs from '@/app/components/tourTabs';
import InterestedTours from '@/app/components/interested tours';






export async function generateStaticParams() {
    
   
    return turlarimiz.map((tur) => ({
      slug: tur.slug,
    }))
  }

// Return a list of `paths` to statically generate pages for
const posts = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json());

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }) {
    
    
    const { slug } = params;
    
    // Slug değerine göre ilgili turu bul
    const turuBul = turlarimiz.find(t => t.slug === slug);

    // Eğer ilgili tur bulunamazsa bir hata mesajı göster
    if (!turuBul) {
        return <div>Tur bulunamadı!</div>;
    }
    

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
        <div className='text-[90px] font-bold'>Tur Adı</div>
        <div className='text-[20px] w-2/3 text-center font-semibold flex flex-row items-center '>Istanbul &rarr; Fiumicino Airport, Colosseum, Roman Forum, Pantheon...</div>
        <div className='text-[20px] font-light flex flex-row items-center gap-1'>
              <img className='h-[22px] text-white' src="https://img.icons8.com/?size=512&id=ZjvNAkHXtjKW&format=png" alt="" />
              <div>7 Gece 8 Gün</div>
            </div>
            <div className='w-full h-2/3 flex flex-row justify-center items-center opacity-80 gap-1'>
              <div className=' w-1/5 px-[8px] py-[16px] h-1/5 bg-red-100 text-red-500 flex flex-row justify-center items-center rounded-xl'>2023</div>
              <div className='w-1/5 px-[8px] py-[16px] h-1/5 bg-green-100 text-green-500 flex flex-row justify-center items-center rounded-xl'>Yaz</div>
              <div className='w-1/5 px-[8px] py-[16px] h-1/5 bg-blue-100 text-blue-500 flex flex-row justify-center items-center rounded-xl'>Yurt Dışı</div>
            </div>
        </div>
      </div>
      
      <Reservation/>
      
      <div className="h-[100px] bg-transparent"></div>
      <TourTabs/>
      <div className="h-[300px] bg-transparent"></div>
      <InterestedTours/>
      <div className="h-[300px] bg-transparent"></div>
    </div>
    );
}
