import React, { useEffect, useState } from 'react'
// imgs
import Optimize from '../assets/optimize1.png'
import { carddata, vmiredata } from '../store/data'
import image5 from '../assets/image6.png'
import { Link } from 'react-router-dom'



const Home = () => {

  const [modal, setModal] = useState(false)

  const set = setTimeout(() => {

  }, 5000);



  // useEffect(() => {
  //    setTimeout(() => {
  //     setModal(true)
  //   }, 10000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>

      <div className='container'>

        <img className='w-full mb-8' src={Optimize} alt="Optimize" />

        <section className='flex flex-col space-y-8 mb-10'>

          <div className='grid grid-cols-3 gap-2.5'>
            {
              carddata.map((carddata) => {
                return (
                  <div key={carddata.id} className='p-4 bg-[#f6f6f6] rounded-lg'>
                    <Link to={`/homedata/${carddata.id}`}>

                      <img className='mb-4 w-96 h-56 rounded-lg' src={carddata.img} alt="img" />
                    </Link>

                    <h3>{carddata.title}</h3>
                  </div>
                )
              })
            }
          </div>


        </section>

        <div className='flex justify-center mb-10'>
          <div className='flex max-w-[1050px] w-full bg-vkluchit p-6 bg-no-repeat justify-between '>
            <h2 className='text-[20px]  left-6'>Eng so'nggi yangiliklardan xabardor bo'lishni <br /> xohlaysizmi? Bildirishnomalarni yoqing!</h2>
            <button className='bg-[#F78B3B] px-6 py-2 text-white text-[20px] rounded-xl right-6'>Yoqish</button>
          </div>
        </div>

        <section className='container '>
          <h2 className='text-[24px] mb-10'>Dunyoda</h2>
          <div className='flex justify-between '>

            <div className='flex flex-col'>


              {
                vmiredata.map((vmiredata) => {
                  return (

                    <div key={vmiredata.id} className='flex justify-between items-center bg-[#f6f6f6] rounded-lg p-4 space-x-4 mb-4'>


                      <Link to={`/vmiredata/${vmiredata.id}`}>

                        <img className='w-[200px] h-[130px]' src={vmiredata.img} alt="vmiredata" />
                      </Link>
                      <div>
                        <p className='text-[20px]'>{vmiredata.title}</p>
                        <p className='text-[16px]'>
                          {vmiredata.poragraf}
                        </p>
                      </div>

                    </div>

                  )
                })
              }


            </div>
            <div className='flex flex-col'>

              <div className='flex space-y-1 ml-4 bg-[#F6F6F6] rounded-[15px] p-4 mb-4 flex-col'>

                <h2 className='text-[24px]'>Asosiy</h2>

                <p className='text-[18px]'>Farg‘onada O‘zbekiston-Pokiston universiteti tashkil etiladi</p>

                <span className='text-[13px] text-[#5E5F61]'>Sputnik Oʻzbekiston 14:09</span>

                <hr />

                <p className='text-[18px]'>O‘zbekiston MDH davlatlarida bandlikka ko‘maklashish to‘g‘risidagi bitimni tasdiqladi</p>

                <span className='text-[13px] text-[#5E5F61]' >IA Qizil bahor 10:19</span>

                <hr />

                <p className='text-[18px]'>O‘zbekistonda avtomobillar uchun navbatlar ko‘paydi UzAuto</p>

                <span className='text-[13px] text-[#5E5F61]' >Северная газета (Армянск) 13:50</span>

                <hr />

                <p className='text-[18px]'>Turizm vazirligi qadamlar uchun to‘lovlar to‘xtatilganini rad etdi</p>

                <span className='text-[13px] text-[#5E5F61]' >Sputnik Oʻzbekiston 14:32</span>

                <hr />

              </div>

              <div>

                <a href="#">  <img className=' w-[378px] h-[245px] ml-4' src={image5} alt="" /></a>

              </div>
            </div>


          </div>

        </section>

      </div>

      {modal && <div className='fixed top-0 left-0 w-full h-full bg-slate-600/50 flex justify-center items-center '>
        <div className='bg-white rounded-2xl text-center font-medium text-2xl max-w-[650px] w-full flex py-12 relative items-center flex-col'>
          <span onClick={() => setModal(false)} className='font-bold cursor-pointer absolute right-5 top-3 text-gray-500 text-lg'>⨉</span>
          <h3 className='max-w-[515px] w-full text-center mb-6'>Хотите быть в курсе свежих новостей?  Включите уведомления!  </h3>

          <button className='py-4 px-10 rounded-lg text-white bg-[#F78B3B]'>Включит </button>
        </div>
      </div>
      }

    </>
  )
}

export default Home