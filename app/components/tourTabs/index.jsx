"use client"
import React from 'react';
import { Tabs,Image } from 'antd';

const items = [
  {
    key: '1',
    label: <div className=' my-button  transition-all ease-in-out duration-300 w-[200px] h-[50px] rounded-3xl bg-red-500 flex flex-row justify-center gap-2 items-center text-white'>
        <img className='w-[20px] h-auto' src='https://cdn-icons-png.flaticon.com/512/854/854996.png'/> 
        <div>Tur Programı</div>
    </div>,
    children: <div className='w-full flex flex-col justify-center items-center gap-10'>
      <div className='w-full flex flex-row justify-between items-center '>
      <div className='w-[100px] h-[100px] flex-shrink-0 rounded-full mr-10 bg-red-500 flex justify-center items-center text-white'>1. Gün</div>
        <div className='w-full'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
      <div className='w-full flex flex-row justify-between items-center '>
      <div className='w-[100px] h-[100px] flex-shrink-0 rounded-full mr-10 bg-red-500 flex justify-center items-center text-white'>2. Gün</div>
        <div className='w-full'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
      <div className='w-full flex flex-row justify-between items-center '>
      <div className='w-[100px] h-[100px] flex-shrink-0 rounded-full mr-10 bg-red-500 flex justify-center items-center text-white'>3. Gün</div>
        <div className='w-full'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
    </div>
    ,
  },
  {
    key: '2',
    label: <div className=' my-button  transition-all ease-in-out duration-300 w-[200px] h-[50px] rounded-3xl bg-red-500 flex flex-row justify-center gap-2 items-center text-white'>
        <img className='w-[20px] h-auto' src='https://cdn-icons-png.flaticon.com/512/927/927667.png'/> 
        <div>Destinasyonlar</div>
    </div>,
    children: <div class="container mx-auto ">
    
    <div class="grid grid-cols-3 gap-4">
        
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src="https://images.pexels.com/photos/1144271/pexels-photo-1144271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="İtalya" class="w-full h-48 object-cover"></img>
    <div class="p-4">
        <h3 class="font-bold text-xl mb-2">İtalya</h3>
        <div class="h-32 overflow-auto text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. Integer nec felis purus. Nulla facilisi. Nam finibus tortor id pulvinar laoreet. Morbi quis mi quis justo interdum efficitur a nec eros. Praesent at erat in lorem consequat pellentesque. Donec nec vulputate lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam vehicula mi velit, in aliquet ligula fermentum nec.
        </div>
    </div>
</div>
        
       
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Ülke 2" class="w-full h-48 object-cover"></img>
            <div class="p-4">
                <h3 class="font-bold text-xl mb-2">Amerika</h3>
                <p class="text-gray-700">Ülke 2 hakkında bilgi...</p>
            </div>
        </div>
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Ülke 2" class="w-full h-48 object-cover"></img>
            <div class="p-4">
                <h3 class="font-bold text-xl mb-2">Fransa</h3>
                <p class="text-gray-700">Ülke 2 hakkında bilgi...</p>
            </div>
        </div>
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Ülke 2" class="w-full h-48 object-cover"></img>
            <div class="p-4">
                <h3 class="font-bold text-xl mb-2">Amerika</h3>
                <p class="text-gray-700">Ülke 2 hakkında bilgi...</p>
            </div>
        </div>
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Ülke 2" class="w-full h-48 object-cover"></img>
            <div class="p-4">
                <h3 class="font-bold text-xl mb-2">Fransa</h3>
                <p class="text-gray-700">Ülke 2 hakkında bilgi...</p>
            </div>
        </div>
        
    </div>
</div>

    
  },
  {
    key: '3',
    label: <div className=' my-button  transition-all ease-in-out duration-300 w-[200px] h-[50px] rounded-3xl bg-red-500 flex flex-row justify-center gap-2 items-center text-white'>
        <img className='w-[20px] h-auto' src='https://cdn-icons-png.flaticon.com/512/833/833281.png'/> 
        <div>Fotoğraflar</div>
    </div>,
    children: <div class="grid grid-cols-3 gap-4 bg-transparent ">
      <div className='w-full flex justify-center items-center'>
        <Image
      className='rounded-md '
    width={300}
    height={200}
    src="https://images.pexels.com/photos/17366637/pexels-photo-17366637/free-photo-of-peyzaj-daglar-kadin-bulutlar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  /></div>
      
  <div className='w-full flex justify-center items-center'>
  <Image
      className='rounded-md'
    width={300}
    height={200}
    
    src="https://images.pexels.com/photos/1851481/pexels-photo-1851481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  />
  </div>
  <div className='w-full flex justify-center items-center'>
  <Image
      className='rounded-md'
    width={300}
    height={200}
    src="https://images.pexels.com/photos/2249780/pexels-photo-2249780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  />
  </div>
  <div className='w-full flex justify-center items-center'>
  <Image
      className='rounded-md'
    width={300}
    height={200}
    src="https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  />
  </div>
  <div className='w-full flex justify-center items-center'>
  <Image
      className='rounded-md'
    width={300}
    height={200}
    src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  />
  </div>
    </div>,
  },
  {
    key: '4',
    label: <div className=' my-button  transition-all ease-in-out duration-300 w-[200px] h-[50px] rounded-3xl bg-red-500 flex flex-row justify-center gap-2 items-center text-white'>
        <img className='w-[20px] h-auto' src='https://cdn-icons-png.flaticon.com/512/471/471662.png'/> 
        <div>Genel Bilgiler</div>
    </div>,
    children: <div class="flex flex-col justify-center items-center gap-10">
      <div className='grid grid-cols-2 gap-10 bg-transparent '>
      <div className='flex flex-col justify-center '>
        <h2 className='text-center font-bold text-[25px]'>Pakete Dahil Olan Hizmetler</h2>
        <ul className='flex flex-col justify-center items-center gap-2'>
          <li className='text-center'>
          Air Montenegro ile İstanbul Yeni Havalimanı – Tivat –İstanbul Yeni Havalimanı Gidiş Dönüş Ekonomi Sınıfı Uçak Biletleri
          </li>
          <li className='text-center'>
          Şehir Turu
          </li>
          <li className='text-center'>
          Havalimanı Vergileri
          </li>
          <li className='text-center'>
          Tercih edilen otelde 4 Gece Oda Kahvaltı Konaklamalar
          </li>
          <li className='text-center'>
          Havalimanı / Otel / Havalimanı Arası Transferler
          </li>
          <li className='text-center'>
          Türkçe Rehberlik Hizmeti
          </li>
        </ul>
        
      </div>
      <div className='flex flex-col justify-center '>
        <h2 className='text-center font-bold text-[25px]'>Pakete Dahil Olan Hizmetler</h2>
        <ul className='flex flex-col justify-center items-center gap-2'>
          <li className='text-center'>
          Air Montenegro ile İstanbul Yeni Havalimanı – Tivat –İstanbul Yeni Havalimanı Gidiş Dönüş Ekonomi Sınıfı Uçak Biletleri
          </li>
          <li className='text-center'>
          Şehir Turu
          </li>
          <li className='text-center'>
          Havalimanı Vergileri
          </li>
          <li className='text-center'>
          Tercih edilen otelde 4 Gece Oda Kahvaltı Konaklamalar
          </li>
          <li className='text-center'>
          Havalimanı / Otel / Havalimanı Arası Transferler
          </li>
          <li className='text-center'>
          Türkçe Rehberlik Hizmeti
          </li>
        </ul>
        
      </div>
      <div className='flex flex-col justify-center '>
        <h2 className='text-center font-bold text-[25px]'>Pakete Dahil Olan Hizmetler</h2>
        <ul className='flex flex-col justify-center items-center gap-2'>
          <li className='text-center'>
          Air Montenegro ile İstanbul Yeni Havalimanı – Tivat –İstanbul Yeni Havalimanı Gidiş Dönüş Ekonomi Sınıfı Uçak Biletleri
          </li>
          <li className='text-center'>
          Şehir Turu
          </li>
          <li className='text-center'>
          Havalimanı Vergileri
          </li>
          <li className='text-center'>
          Tercih edilen otelde 4 Gece Oda Kahvaltı Konaklamalar
          </li>
          <li className='text-center'>
          Havalimanı / Otel / Havalimanı Arası Transferler
          </li>
          <li className='text-center'>
          Türkçe Rehberlik Hizmeti
          </li>
        </ul>
        
      </div>
      </div>
      <div className='flex flex-col justify-center '>
        <h2 className='text-center font-bold text-[25px]'>Pakete Dahil Olan Hizmetler</h2>
        <ul className='flex flex-col justify-center items-center gap-2'>
          <li className='text-center'>
          Air Montenegro ile İstanbul Yeni Havalimanı – Tivat –İstanbul Yeni Havalimanı Gidiş Dönüş Ekonomi Sınıfı Uçak Biletleri
          </li>
          <li className='text-center'>
          Şehir Turu
          </li>
          <li className='text-center'>
          Havalimanı Vergileri
          </li>
          <li className='text-center'>
          Tercih edilen otelde 4 Gece Oda Kahvaltı Konaklamalar
          </li>
          <li className='text-center'>
          Havalimanı / Otel / Havalimanı Arası Transferler
          </li>
          <li className='text-center'>
          Türkçe Rehberlik Hizmeti
          </li>
        </ul>
        
      </div>
      
    </div>,
  },
];



export default function TourTabs() {
  return (
    <Tabs className='w-[60%] gap-5' defaultActiveKey="1" items={items}  />
  )
}
