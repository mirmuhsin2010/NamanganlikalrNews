import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import SiteLogo from '../assets/logo.svg'
import Hamburger from '../assets/hamburger-menu.png'
import ExitIcon from '../assets/icon-exit.png'

const Header = () => {


  const [showMeniu, setShowMeniu] = useState(false)

  return (
    <>

      <header className=' bg-[#f6f6f6]'>

        <div className='py-5 md:py-10 flex items-center justify-between container'>

          <div className=' flex items-center justify-between space-x-6'>
            <Link to='/' ><div className='p-2 bg-[#fff] rounded-[7px] '><img src={SiteLogo} alt="" /></div></Link>


            <div className='space-x-6 hidden md:inline-block'>
              <span className='text-[16px] text-[#555]'><span className='text-[#2959CE] '>$</span> 10137.2</span>
              <span className='text-[16px] text-[#555]'><span className='text-[#2959CE] '>P</span> 138.26</span>
            </div>
          </div>

          <div className='space-x-6 flex items-center'>

            <select className='bg-[#DCE6FF] rounded-[15px] px-2 py-1 hidden md:inline-block' id="">

              <option value="">uz</option>
              <option value="">ru</option>

            </select>

            <Link to='Войти' className='py-2 hidden md:block px-3 bg-[#2959ce] rounded-[10px] text-white '>Войти</Link>

            <button onClick={() => setShowMeniu(true)} className='inline-block lg:hidden'>
              <img src={Hamburger} width={45} height={45} alt="burger" />
            </button>

          </div>



        </div>
        <div className="container">
          <div className='flex justify-between md:hidden py-3 mb-8 '>
            <div>
              <div className='space-x-6 '>
                <span className='text-[16px] text-[#555]'><span className='text-[#2959CE] '>$</span> 10137.2</span>
                <span className='text-[16px] text-[#555]'><span className='text-[#2959CE] '>P</span> 138.26</span>
              </div>

            </div>
            <div className="">
              <select className='bg-[#DCE6FF] rounded-[20px] px-2 py-1 mr-5 ' id="">
                <option value="">uz</option>
                <option value="">ru</option>
              </select>
              <Link to='Войти' className='py-2  px-3 bg-[#2959ce] rounded-[10px] text-white '>Войти</Link>
            </div>
          </div>
        </div>

        {showMeniu && <div className='fixed w-full h-full bg-gray-400 top-0 left-0 lg:hidden'>
          <nav className=' text-white mt-4 mb-4  p-2  '>
            <div className="container ">

              <div className="flex justify-between items-center mb-5">

                <Link onClick={() => setShowMeniu(false)} to='/' ><div className=' flex justify-center p-2 bg-[#fff] rounded-[7px] '><img src={SiteLogo} alt="" /></div></Link>

                <button onClick={() => setShowMeniu(false)} className=''>
                  <img src={ExitIcon} width={45} height={45} alt="" />
                </button>
              </div>

              <ul className='text-white mb-2 '>
                <li>
                  <Link onClick={() => setShowMeniu(false)} to='/'>Asosiy</Link>
                </li>
                <li>
                  <Link onClick={() => setShowMeniu(false)} to='list'> Qiziqarli</Link>
                </li>
                <li>
                  <Link onClick={() => setShowMeniu(false)} to='list'> Iqtisodiyot</Link>
                </li>
                <li>
                  <Link onClick={() => setShowMeniu(false)} to='list'>Siyosat</Link>
                </li>
                <li>
                  <Link onClick={() => setShowMeniu(false)} to='list'>Jamiyat</Link>
                </li>
                <li>
                  <Link onClick={() => setShowMeniu(false)} to='list'>d</Link>
                </li>
                <li>
                  <Link onClick={() => setShowMeniu(false)} to='list'>Спорт</Link>
                </li>
                <li>
                  <Link onClick={() => setShowMeniu(false)} to='list'>Культура</Link>
                </li>
                <li>
                  <Link onClick={() => setShowMeniu(false)} to='list'>Происшествия</Link>
                </li>
                <li>
                  <Link onClick={() => setShowMeniu(false)} to='list' href="">Наука</Link>
                </li>
              </ul>


            </div>

          </nav>
        </div>
        }

        <nav className=' mt-4 mb-4 bg-white p-2 hidden lg:block'>
          <div className="container">

            <ul className='flex justify-between mb-2 '>
              <li>
                <Link to='/'>Главное</Link>
              </li>
              <li>
                <Link to='list'> Интересное</Link>
              </li>
              <li>
                <Link to='list'> Экономика</Link>
              </li>
              <li>
                <Link to='list'>Политика</Link>
              </li>
              <li>
                <Link to='list'> Общество</Link>
              </li>
              <li>
                <Link to='list'> Технологии</Link>
              </li>
              <li>
                <Link to='list'>Спорт</Link>
              </li>
              <li>
                <Link to='list'>Культура</Link>
              </li>
              <li>
                <Link to='list'>Происшествия</Link>
              </li>
              <li>
                <Link to='list'>Наука</Link>
              </li>
            </ul>
          </div>

          <hr />
        </nav>

      </header>

    </>
  )
}

export default Header