import React from 'react'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main min-h-lvh flex-1 pb-[15vh] relative '>
        <div className="nav flex items-center justify-between text-[22px] p-[20px] decoration-[#585858]">
            <p>Gemini</p>
            <img className="w-[40px] rounded-[50%]" src={assets.user_icon} alt="" />
        </div>
        <div className="main-container max-w-[900px] m-auto">
            <div className="greet my-[50px] mx-[0px] text-[56px] text-[#c4c7c5] font-[500] p-[20px] ">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards grid grid-cols-4 gap-[15px] p-[20px]">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly decribe this concpt: Urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Improve the radability of the following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main