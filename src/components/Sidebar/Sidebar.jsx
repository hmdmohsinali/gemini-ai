import React, { useState } from 'react'
import {assets} from '../../assets/assets'

const Sidebar = () => {

  const [extended, setExtended] = useState(false)



  return (
    <div className='sidebar min-h-lvh inline-flex flex-col justify-between bg-[#f0f4f6] py-[25px] px-[15px]'>
        <div className="top">
            <img className="cursor-pointer" onClick={()=>setExtended(prev=>!prev)} src={assets.menu_icon} alt="menu-icon" />
            <div className="new-chat mt-[50px] inline-flex items-center gap-[10px] py-[10px] px-[15px] bg-[#e6eaf1] rounded-[50px] text-[14px] cursor-pointer decoration-gray-400">
              <img className='menu block  cursor-pointer' src={assets.plus_icon} alt="chat-plus-icon" />
              {extended?<p>New Chat</p>:null }
            </div>
            {extended? 
            <div className="recent flex flex-col ">
            <p className="recent-title mt-[30px] mb-[20px]">Recent</p>
            <div className="recent-entry flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] decoration-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
              <img src={assets.message_icon} alt="" />
              <p>What is React...</p>
            </div>
          </div>
            : null}
            
        </div>
        <div className="bottom flex flex-col">
          <div className="bottom-item  recent-entry flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] decoration-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
            <img src={assets.question_icon} alt="" />
           {extended?<p>Help</p>: null } 
          </div>
          <div className="bottom-item recent-entry flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] decoration-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
            <img src={assets.history_icon} alt="" />
           {extended?<p>Activity</p> :null} 
          </div>
          <div className="bottom-item recent-entry flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] decoration-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
            <img src={assets.setting_icon} alt="" />
            {extended? <p>Setting</p>: null} 
          </div>
        </div>
    </div>
  )
}

export default Sidebar