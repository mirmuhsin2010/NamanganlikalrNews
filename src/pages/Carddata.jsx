import React from 'react'
import { useParams } from 'react-router-dom'
import { vmiredata2 } from '../store/data'
import image6 from '../assets/image-6.png'


const Carddata = () => {

  const { id } = useParams()
  
  const data = vmiredata2.find(e => e.id === parseInt(id))
  return (
    <div>
      <div className="container flex ">

       <div className='max-w-[700]'>
       <h2 className='text-[20px]'>{data.poragraf}</h2>
        <img src={data.img} className='w-full h-[430px]' alt="" />

        <p>{Text.Text}</p>
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

            <a href="#">  <img className=' w-[345px] h-[385px] ml-4' src={image6} alt="chegirma" /></a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Carddata