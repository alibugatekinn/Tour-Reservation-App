'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link';
import { MenuOutlined,CloseOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { usePathname } from 'next/navigation'
export default function Header() {

  const items = [
    {
      key: '1',
      label: (
        <div className='m-0' target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          <div>Ali Buğatekin</div>
          <div className=' text-gray-500'>alibugatekin@gmail.com</div>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div className=' m-0 w-[200px]' target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          <div>Profil</div>

        </div>

      ),


    },
    {
      type: 'divider',
    },
    {
      key: '3',
      label: (
        <div className=' m-0' target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          <div>Oturumu Kapat</div>

        </div>
      ),

    },

  ];
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState('right-[-216px]');

  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.style.visibility = 'visible';
    document.documentElement.style.opacity = '1';
  }, []);
  useEffect(() => {
    function handleOutsideClick(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen('right-[-216px]');
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);



  return (
    <header className='w-full h-[100px] text-white bg-gradient-black-transparent absolute top-0 left-0 z-[100] font-inter'>

      <div className='flex flex-row items-center  justify-between px-14 py-5 '>

        <img className=' h-[60px] w-auto' src='/images/logo.webp' />

        <nav className="lg:block hidden sm:hidden md:hidden  bg-transparent p-4 text-[18px]">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className={` ${pathname === '/' ? ' bg-red-500 p-2 rounded ' : ' text-white transition-all duration-[300ms] ease-in-out hover:bg-red-500 hover:p-2 rounded'}`}>
                Anasayfa
              </Link>
            </li>
            <li>
              <Link href="/search" className={` ${pathname === '/search' ? ' bg-red-500 p-2 rounded ' : ' text-white transition-all duration-[300ms] ease-in-out hover:bg-red-500 hover:p-2 rounded'}`}>
                Turlarımız
              </Link>
            </li>
            <li>
              <Link href="/kurumsal" className={` ${pathname === '/kurumsal' ? ' bg-red-500 p-2 rounded ' : ' text-white transition-all duration-[300ms] ease-in-out hover:bg-red-500 hover:p-2 rounded'}`}>
                Kurumsal
              </Link>
            </li>
            <li>
              <Link href="/blog" className={` ${pathname === '/blog' ? ' bg-red-500 p-2 rounded ' : ' text-white transition-all duration-[300ms] ease-in-out hover:bg-red-500 hover:p-2 rounded'}`}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className={` ${pathname === '/iletisim' ? ' bg-red-500 p-2 rounded ' : ' text-white transition-all duration-[300ms] ease-in-out hover:bg-red-500 hover:p-2 rounded'}`}>
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
        <div className='flex flex-row items-center gap-5'>
          <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()}>
              <img className=' h-[30px] w-auto cursor-pointer' src='/images/user.png' />

            </a>
          </Dropdown>
          <MenuOutlined onClick={() => { setMenuOpen('right-0') }} className=' lg:hidden sm:block md:block cursor-pointer' style={{ fontSize: '30px' }} />
        </div>


      </div>

      <div ref={menuRef} className={`flex flex-col items-center h-screen block xl:hidden lg:hidden fixed ${menuOpen} transition-all duration-[500ms] ease-in-out top-0 w-[200px] bg-white bg-opacity-90 backdrop-blur-md bg-[rgba(255,255,255, 0.5)] shadow-2xl m-2 rounded-xl  `}>

            <div className=' w-full h-[100px] flex flex-col justify-center items-center'>
            
            <div onClick={()=>{setMenuOpen('right-[-216px]')}} className=' shadow-sm border px-[8px] py-[8px]  border-opacity-50 transition-all duration-[300ms] ease-in-out cursor-pointer  flex flex-row text-black text-[14px] bg-white p-1 px-2 rounded-lg justify-center items-center gap-1'>
              <div className=' border flex flex-col justify-center items-center rounded-full border w-[15px] h-[15px]'>
              <CloseOutlined style={{fontSize:'9px'}} />
              </div>
              <span>kapat</span>
            </div>

            
            
            </div>
      

        <nav className="bg-transparent text-[18px] w-full">
          <ul className="flex flex-col items-center text-center w-full">
            <Link href="/" className='w-[80%]'>
              <li className={` ${pathname === '/' ? ' shadow-inner w-full bg-red-500 rounded-xl   my-1 p-2' : 'w-full p-2 text-black hover:text-white transition-all duration-[300ms] ease-in-out hover:bg-red-500 hover:shadow-inner  rounded-xl  my-1'}`}>
                Anasayfa
              </li>
            </Link>

            <Link href="/search" className='w-[80%]'>
              <li className={` ${pathname === '/search' ? ' shadow-inner w-full bg-red-500 rounded-xl  my-1 p-2' : 'w-full p-2 text-black hover:text-white transition-all duration-[300ms] ease-in-out hover:bg-red-500 hover:shadow-inner rounded-xl  my-1'}`}>
                Turlarımız
              </li>
            </Link>

            <Link href="/kurumsal" className='w-[80%]'>
              <li className={` ${pathname === '/kurumsal' ? ' shadow-inner w-full bg-red-500 rounded-xl  my-1 p-2' : 'w-full p-2 text-black hover:text-white transition-all duration-[300ms] ease-in-out hover:bg-red-500 hover:shadow-inner rounded-xl  my-1'}`}>
                Kurumsal
              </li>
            </Link>

            <Link href="/blog" className='w-[80%]'>
              <li className={` ${pathname === '/blog' ? ' shadow-inner w-full bg-red-500 rounded-xl  my-1 p-2' : 'w-full p-2 text-black hover:text-white transition-all duration-[300ms] ease-in-out hover:bg-red-500 hover:shadow-inner rounded-xl  my-1'}`}>
                Blog
              </li>
            </Link>

            <Link href="/iletisim" className='w-[80%]'>
              <li className={` ${pathname === '/iletisim' ? ' shadow-inner w-full bg-red-500 rounded-xl  my-1 p-2' : 'w-full p-2 text-black hover:text-white transition-all duration-[300ms] ease-in-out hover:bg-red-500 hover:shadow-inner rounded-xl  my-1'}`}>
                İletişim
              </li>
            </Link>
          </ul>
        </nav>


      </div>


    </header>
  )
}