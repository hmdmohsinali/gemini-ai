import React from "react";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleKeyDown = (e)=>{
    if(e.key==='Enter'){
      onSent();
    }
  }

  return (
    <div className="main min-h-lvh flex-1 pb-[15vh] relative ">
      <div className="nav flex items-center justify-between text-[22px] p-[20px] decoration-[#585858]">
        <p>Gemini</p>
        <img className="w-[40px] rounded-[50%]" src={assets.user_icon} alt="" />
      </div>
      <div className="main-container max-w-[900px] m-auto">

        {!showResult
        ?<>
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
        </>
        :
        <div className="result py-0 px-[5%] max-h-[70vh] overflow-y-scroll">
          <div className="result-title my-[40px] mx-0 flex items-center gap-[20px]">
            <img className="w-[40px] rounded-[50%]" src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data flex items-start gap-[20px]">
            <img src={assets.gemini_icon} alt="" />
            {loading
            ? 
            <div className="loader w-[100%] flex flex-col gap-[10px]">
              <hr />
              <hr />
              <hr />
            </div>
            :
            <div dangerouslySetInnerHTML={{__html:resultData}} className="text-[17px] font-[300] leading-[1.8]"></div>
          }
            
          </div>
          
        </div>

        }

        
        <div className="main-bottom absolute bottom-0 w-[100%] max-w-[900ps] py-[0px] px-[20px] m-auto">
          <div className="search-box flex items-center justify-between gap-[20px] bg-[#f0f4f9] py-[10px] px-[20px] rounded-[20px]">
            <input
              className="flex-1 bg-transparent border-none outline-none text-[18px] p-[8px]"
              type="text"
              placeholder="Enter a prompt here"
              onChange={(e)=>setInput(e.target.value)}
              value={input}
              onKeyDown={handleKeyDown}
            />
            <div className="flex items-center gap-[15px]">
              <img
                className="w-[24px] cursor-pointer"
                src={assets.gallery_icon}
                alt=""
              />
              <img
                className="w-[24px] cursor-pointer"
                src={assets.mic_icon}
                alt=""
              />
              <img
                className="w-[24px] cursor-pointer"
                src={assets.send_icon}
                alt=""
                onClick={()=>onSent()}
              />
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
