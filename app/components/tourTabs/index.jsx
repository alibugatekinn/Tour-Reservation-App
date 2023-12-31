"use client"
import React from 'react';
import { Tabs,Image } from 'antd';




export default function TourTabs({veri}) {

  const items = [
    {
      key: '1',
      label: <div className=' my-button  transition-all ease-in-out duration-300 w-[200px] h-[50px] rounded-3xl bg-red-500 flex flex-row justify-center gap-2 items-center text-white'>
          <img className='w-[20px] h-auto' src='https://cdn-icons-png.flaticon.com/512/854/854996.png'/> 
          <div>Tur Programı</div>
      </div>,
      children: <div className='w-full flex flex-col justify-center items-center gap-10'>
        {
  veri && veri.program && veri.program.map((programDay, index) => (
    <div className='w-full flex flex-row justify-between items-center ' key={programDay.day}>
      <div className='w-[100px] h-[100px] flex-shrink-0 rounded-full mr-10 bg-red-500 flex justify-center items-center text-white'>
        {programDay.day}. Gün
      </div>
      <div className='w-full'>
        {programDay.description}
      </div>
    </div>
  ))
}
      </div>
      ,
    },
    {
      key: '2',
      label: <div className=' my-button  transition-all ease-in-out duration-300 w-[200px] h-[50px] rounded-3xl bg-red-500 flex flex-row justify-center gap-2 items-center text-white'>
          <img className='w-[20px] h-auto' src='https://cdn-icons-png.flaticon.com/512/927/927667.png'/> 
          <div>Destinasyonlar</div>
      </div>,
      children: <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {veri.destinations && veri.destinations.map((destination, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img 
              src={destination.photos[0]} 
              alt={destination.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{destination.name}</h3>
              <div className="h-32 overflow-auto text-gray-700">
                {destination.description}
              </div>
            </div>
          </div>
        ))}
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
        {veri.destinations && veri.destinations.map((destination, index) => (
        <div key={index} className='w-full flex justify-center items-center'>
          <Image
        className='rounded-md '
      width={300}
      height={200}
      src={destination.photos[1]} 
    /></div> ))}
        
    
    
   
    
      </div>,
    },
    {
      key: '4',
      label: <div className=' my-button  transition-all ease-in-out duration-300 w-[200px] h-[50px] rounded-3xl bg-red-500 flex flex-row justify-center gap-2 items-center text-white'>
          <img className='w-[20px] h-auto' src='https://cdn-icons-png.flaticon.com/512/471/471662.png'/> 
          <div>Genel Bilgiler</div>
      </div>,
      children: <div class="container mx-auto">
      <div class="w-full flex flex-col justify-center items-center gap-10">
        <div class="w-full bg-white shadow-lg rounded-lg overflow-hidden p-4">
          <h2 class="font-bold text-xl mb-2">Genel Şartlar</h2>
          <div class="text-gray-700">
            <h3 class="font-bold text-lg">Ücrete Dahil Olan Hizmetler</h3>
            <ul>
              <li>Türk Havayolları ile İstanbul Havalimanından Paris Charles De Gaulle Havalimanına gidiş dönüş ekonomi sınıfı uçak bileti</li>
              <li>Belirtilen otel kategorisinde 3 gece kahvaltı dahil konaklama</li>
              <li>Havalimanı – otel arası çift yön transfer</li>
              <li>Panoramik Paris şehir turu</li>
              <li>Türkçe rehberlik hizmeti</li>
            </ul>
            
            <h3 class="font-bold text-lg">Ücrete Dahil Olmayan Hizmetler</h3>
            <ul>
              <li>Yurt dışı çıkış harcı</li>
              <li>Dahil olduğu belirtilmeyen tüm müze ve örenyeri giriş ücretleri</li>
              <li>Ekstra turlar</li>
              <li>Kişisel harcamalar</li>
              <li>Schengen vizesi</li>
              <li>Seyahat sağlık sigortası (25 EUR)</li>
              <li>Tur programında dahil olduğu açıkça belirtilmemiş tüm servisler</li>
              <li>Bahşişler (İsteğe bağlı)</li>
            </ul>
          </div>
        </div>
    
        <div class="bg-white shadow-lg rounded-lg overflow-hidden p-4">
          <h2 class="font-bold text-xl mb-2">Tur Lideri</h2>
          <div class="text-gray-700">
            <p>*İlgili tur, bölge karşılamalı olup, farklı acente misafirlerinin katılımına açık bir programdır. BUGASOFT TUR misafirleri, BUGASOFTTUR sorumluluğundadır. Rehberlik hizmeti varılan ülke başlangıçlıdır.</p>
            <p>*Tur programı dâhilinde, havalimanı transferleri ve panoramik şehir turu süresince Türkçe rehberlik & asistanlık hizmeti mevcuttur.</p>
            <p>*Programda belirtilen panoramik şehir turları, şehirlerin genel tanıtımı için düzenlenen ve araç içinden rehber anlatımıyla panoramik olarak yapılan müze, ören yeri girişlerini içermeyen en fazla 2-3 saatlik turlardır.</p>
            <p>* Panoramik turlar ve programda belirtilen diğer turlar, tura denk gelen gün ve saatte yerel otoriteler tarafından gezilecek yerlerin kapatılması, herhangi bir etkinlik nedeniyle güzergâh üzerindeki yolların kapalı olması ya da hava şartları nedeniyle turun yapılması imkânsız hale geldiği durumlarda bahse konu turların yapılamamasından acentamız sorumlu değildir.</p>
            <p>*Tur programında belirtilen ekstra turlara yeterli katılım sağlandığı takdirde yapılmaktadır. Yeterli katılım sağlanamadığı takdirde tur fiyatlarında değişiklik söz konusu olabilir. Rehber içeriği aynı kalmak şartı ile extra turların günlerinde değişiklik yapabilir.</p>
          </div>
        </div>
    
        <div class="bg-white shadow-lg rounded-lg overflow-hidden p-4">
          <h2 class="font-bold text-xl mb-2">İptal Şartları</h2>
          <div class="text-gray-700">
            <p>Turun Kalkış tarihinden 30 gün öncesine kadar cezasız iptal hakkı bulunmaktadır.</p>
            <p>Gezi için yeterli katılım sağlanamadığı takdirde; acentanın son iptal bildirim tarihi, gezi hareket tarihinden 20 gün öncesi olarak belirlenmiştir. Böyle bir durum geliştiğinde iptal bilgisi misafire iletilir. BUGASOFTtur, misafirin doğrudan otel ile iletişime geçerek yaptığı herhangi bir değişiklik veya iptal işlemi için sorumluluk kabul etmeyecektir. Bu durumda BUGASOFTtur ’un iptal koşulları geçerli olacaktır.</p>
          </div>
        </div>
    
        <div class="bg-white shadow-lg rounded-lg overflow-hidden p-4">
          <h2 class="font-bold text-xl mb-2">Vize</h2>
          <div class="text-gray-700">
            <p>Umama mahsus pasaport sahibi T.C. vatandaşları için vize uygulaması vardır.</p>
            <p>Pasaportların dönüş tarihinden itibaren minimum 6 ay geçerlilik süresinin olması gerekmektedir.</p>
            <p>Gümrük geçişlerinde ve sınır kapılarında, pasaportunuza giriş-çıkış kaşesi basılabilmesi için, pasaportunuzda en az 6 boş sayfa olması gerekmektedir.</p>
            <p>Vize alınmış olması veya vize gerektirmeyen pasaporta sahip olunması, ülkeye giriş ve çıkış yapılabileceği anlamına gelmeyip, pasaport polisinin sizi ülkeye giriş izni vermeme veya ülkeden çıkarmama yetkisi bulunmaktadır.</p>
            <p>18 yaşından küçük misafirlerin tek başlarına ya da anne ve babadan sadece bir tanesi ile seyahat etmesi durumunda hem anneden hem de babadan noter onaylı muvafakatname alması gerekmektedir.</p>
          </div>
        </div>
    
        
      </div>
    </div>
    ,
    },
  ];
  

  return (
    <Tabs className='w-[60%] gap-5' defaultActiveKey="1" items={items}  />
  )
}
