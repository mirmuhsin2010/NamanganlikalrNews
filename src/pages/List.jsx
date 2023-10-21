import React from 'react'
import Optimize from '../assets/optimize2.png'
import { vmiredata2 } from '../store/data'
import image6 from '../assets/image-6.png'
import { Link } from 'react-router-dom'


const List = () => {
  return (
    <>





      <div className='container'>

        <img className='w-full mb-6 ' src={Optimize} alt="" />

        <div>

          <h2 className='text-[24px] mb-6'>Qiziqarli</h2>


          <div className='flex justify-between '>

            <div className='flex flex-col'>

              {
                vmiredata2.map((vmiredata2) => {
                  return (
                    // < className='flex flex-col  space-y-6'>

                    <div key={vmiredata2.id} className='flex justify-between items-center bg-[#f6f6f6] rounded-lg p-4 space-x-4 mb-4'>

                      <Link to={`/carddata/${vmiredata2.id}`}>
                        <img className='' src={vmiredata2.img} width={350} height={380} alt="vmiredata2" />
                      </Link>

                      <div>
                        <p className='text-[20px]'>{vmiredata2.title}</p>
                        <p className='text-[16px]'>
                          {vmiredata2.poragraf}
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

                <a href="#">  <img className='w-[330px] h-[490px] ml-4' src={image6} alt="chegirma" /></a>

              </div>
            </div>


          </div>



        </div>


      </div>

    </>
  )
}

export default List