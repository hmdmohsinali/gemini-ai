import React from "react";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main min-h-lvh flex-1 pb-[15vh] relative ">
      <div className="nav flex items-center justify-between text-[22px] p-[20px] decoration-[#585858]">
        <p>Gemini</p>
        <img className="w-[40px] rounded-[50%]" src={assets.user_icon} alt="" />
      </div>
      <div className="main-container max-w-[900px] m-auto">
        <div className="greet my-[50px] mx-[0px] text-[56px] text-[#c4c7c5] font-[500] p-[20px] ">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards grid grid-cols-4 gap-[15px] p-[20px]">
          <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-[17px]">
              Suggest beautiful places to see on an upcoming road trip
            </p>
            <img
              className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
              src={assets.compass_icon}
              alt=""
            />
          </div>
          <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-[17px]">
              Briefly decribe this concpt: Urban planning
            </p>
            <img
              className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
              src={assets.bulb_icon}
              alt=""
            />
          </div>
          <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-[17px]">
              Brainstorm team bonding activities for our work retreat
            </p>
            <img
              className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
              src={assets.message_icon}
              alt=""
            />
          </div>
          <div className="card h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#585858] text-[17px]">
              Improve the radability of the following code
            </p>
            <img
              className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
              src={assets.code_icon}
              alt=""
            />
          </div>
        </div>
        <div className="main-bottom absolute bottom-0 w-[100%] max-w-[900ps] py-[0px] px-[20px] m-auto">
          <div className="search-box flex items-center justify-between gap-[20px] bg-[#f0f4f9] py-[10px] px-[20px] rounded-[20px]">
            <input className="flex-1 bg-transparent border-none outline-none text-[18px] p-[8px]" type="text" placeholder="Enter a prompt here" />
            <div className="flex items-center gap-[15px]">
              <img className="w-[24px] cursor-pointer" src={assets.gallery_icon} alt="" />
              <img className="w-[24px] cursor-pointer" src={assets.mic_icon} alt="" />
              <img className="w-[24px] cursor-pointer" src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info text-[13px] my-[15px] mx-auto text-center font-[300]">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
            <a
              href="https://support.google.com/gemini/answer/13594961?visit_id=638500040128002788-1307986721&p=privacy_notice&rd=1#privacy_notice"
              target="_blank"
            >
              Your privacy & Gemini Apps
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
