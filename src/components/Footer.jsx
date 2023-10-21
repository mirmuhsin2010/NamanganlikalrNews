import React from 'react'
import facebook from '../assets/facebook.svg'
import telegram from '../assets/telegram.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'

const Footer = () => {
  return (
    <>

        <footer className='bg-[#7297EF] mt-10 p-10 bottom-0 w-full'>

            <div className='w-full max-w-7xl px-5 mx-auto'>

               <div className='flex justify-between mb-5'>

                <div>
                <h2 className='text-[24px] text-white mb-4'>NAMANGANLIKLAR 24</h2>
                <p className='text-white text-[12px]'>
                Воспроизводство, копирование, <br /> использование информации с сайта <br /> «NAMANGANLIKLAR24.UZ» возможно <br /> только с предварительного <br /> письменного разрешения редакции.
                </p>

                </div>

               <div className='space-y-6 text-white text-[16px]'>
                <br /><br />
                <span>Информация о сайте</span><br />
                <span>  Напишите нам</span><br />
                <span>Реклама</span><br />
                <span>Прислать новость</span>
               </div>

               <div className='text-white text-[16px] ' >
                <br /><br />
                <span>Использование материалов</span> <br />
                <span>Темы дня</span><br />
                <span>Наша команда</span>
               </div>

               </div>
               <hr className='mb-5' />

               <div className='flex justify-between'>

                <div className='text-[16px] text-white'>
                Наши <br /> социальные сети
                </div>

                <div className='flex space-x-4'>
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={telegram} alt="" />
                    <img src={youtube} alt="" />
                </div>

               </div>

            </div>

        </footer>
    
    </>
  )
}

export default Footer