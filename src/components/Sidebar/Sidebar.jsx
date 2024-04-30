import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context'

const Sidebar = () => {

  const [extended, setExtended] = useState(false)

  const {onSent, prevPropmts, setRecentPrompt,newChat} = useContext(Context)

  const loadPrompt = async (prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }



  return (
    <div className='sidebar min-h-lvh inline-flex flex-col justify-between bg-[#f0f4f6] py-[25px] px-[15px]'>
        <div className="top">
            <img className="cursor-pointer " onClick={()=>setExtended(prev=>!prev)} src={assets.menu_icon} alt="menu-icon" />
            <div onClick={()=>newChat()} className="new-chat mt-[50px] inline-flex items-center gap-[10px] py-[10px] px-[15px] bg-[#e6eaf1] rounded-[50px] text-[14px] cursor-pointer decoration-gray-400">
              <img className='menu block  cursor-pointer ' src={assets.plus_icon} alt="chat-plus-icon" />
              {extended?<p>New Chat</p>:null }
            </div>
            {extended? 
            <div className="recent flex flex-col ">
            <p className="recent-title mt-[30px] mb-[20px]">Recent</p>
            {prevPropmts.map((item,index)=>{
              return(
                <div onClick={()=>loadPrompt(item)} className="recent-entry flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] decoration-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
              <img src={assets.message_icon} alt="" />
              <p>{item.slice(0,18)}...</p>
            </div>
              )
            })}
            
          </div>
            : null}
            
        </div>
        <div className="bottom flex flex-col">
          <div className="bottom-item  recent-entry flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
            <img src={assets.question_icon} alt="" />
           {extended?<p>Help</p>: null } 
          </div>
          <div className="bottom-item recent-entry flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
            <img src={assets.history_icon} alt="" />
           {extended?<p>Activity</p> :null} 
          </div>
          <div className="bottom-item recent-entry flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
            <img src={assets.setting_icon} alt="" />
            {extended? <p>Setting</p>: null} 
          </div>
        </div>
    </div>
  )
}

export default Sidebar