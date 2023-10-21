import React from 'react'
import { useParams } from 'react-router-dom'
import { carddata, vmiredata } from '../store/data'
import image6 from '../assets/image-6.png'


const Homedata = () => {
  const { id } = useParams()

  const data = carddata.find(e => e.id === parseInt(id))
  return (
    <div >
      <div className='container flex justify-between'>
     <div>
      <h2 className='text-[22px]'>{data.title}</h2>
      <span>17:06 / 09.08.2023</span>
     <img src={data.img} width={1400} height={300} alt="" /><br />
     <p>{data.matn}</p>
     </div>


      <div className='flex flex-col'>

              <div className='flex space-y-2 ml-4 bg-[#F6F6F6] rounded-[15px] p-4 mb-4 flex-col'>

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

                <a href="#">  <img className=' w-[385px] h-[385px] ml-4' src={image6} alt="chegirma" /></a>

              </div>
            </div>
      </div>
    </div>
  )
}

export default Homedata