import React from "react";
import calender from "./images/calender.webp";
import social from "./images/social.webp";
import comment from "./images/comment.webp";
import fivestar from "./images/fivestar.webp";
import growth from "./images/growth.webp";
import people from "./images/people.webp";
import post from "./images/post.webp";
import schedule from "./images/schedule.webp";
const Bento: React.FC = () => {
  return (
    <div className=" tracking-tighter w-screen">
      <div className="bg-gray-100 w-full h-full py-10 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 auto-rows-[40px]  grid-flow-dense">
          <div
            className="rounded-lg shadow-md p-4 text-white flex flex-col text-center items-center justify-center  col-span-2 row-span-5
          sm:order-1
          md:order-2 
          
          bg-[hsl(256,67%,59%)]"
          >
            <p className="text-[54px]/12 font-semibold mx-5 my-6 md:my-2">
              Social Media <span className="text-amber-200">10x</span>{" "}
              <span className="italic">Faster</span> with AI
            </p>
            <img className="w-50 mt-4 mb-2" src={fivestar} alt="no img" />
            <p>Over 4,000 5-star reviews</p>
          </div>
          <div
            className="rounded-lg shadow-md p-4 text-black flex  flex-col items-center font-semibold col-span-2 row-span-3
          
          sm:col-span-1 sm:row-span-4 sm:order-2
          md:col-span-1 md:row-span-4 md:order-4
          
          bg-[hsl(0,0%,100%)]"
          >
            <img
              className="w-85 sm:mt-6 rounded-4xl shadow-md"
              src={social}
              alt=""
            />
            <p className="text-[27px]/7 px-3 py-6 ">
              Manage multiple accounts and platforms.
            </p>
          </div>
          <div
            className="rounded-lg shadow-md  text-black flex flex-col  text-lg font-semibold col-span-2 row-span-4
          overflow-hidden
          sm:col-span-1 sm:row-span-4 sm:order-3
          
          md:col-span-1 md:row-span-4 md:order-5 
          
          bg-[hsl(39,100%,71%)]"
          >
            <p className="text-[33px]/8 sm:text-[23px]/6 p-5">
              Maintain a consistant posting schedule.
            </p>
            <img className="w-66 mt-1 px-5  " src={calender} alt="" />
          </div>

          <div
            className="rounded-lg shadow-md text-black flex flex-col items-center text-lg font-semibold col-span-2 row-span-8 text-center overflow-hidden

            sm:col-span-1 sm:row-span-7 sm:order-4
            md:col-span-1 md:row-span-9 md:order-3
            bg-[hsl(254,88%,90%)]"
          >
            <p className="p-4 text-[30px]/7">Schedule to social media.</p>
            <div className="w-full flex justify-center">
              <img
                className="w-[450px] sm:w-[300px] md:w-[460px] md:px-1 md:ml-47 px-4 py-2 md:scale-150 md:py-15 "
                src={schedule}
                alt=""
              />
            </div>

            <p className="font-normal text-[21px]/6 py-4 px-9 tracking-wide sm:tracking-normal sm:px-2 md:pt-10">
              Optimize post timings to publish content at the perfect time for
              your audience.
            </p>
          </div>

          <div
            className="rounded-lg shadow-md text-white flex flex-col sm:flex-row items-center text-center font-semibold col-span-2 row-span-6 
          
          sm:row-span-4 sm:order-6
          md:col-span-2 md:row-span-4 md:order-8
          
          bg-[hsl(256,67%,59%)]"
          >
            <img
              className="w-70 sm:w-60 sm:ml-5 md:w-45 p-3 "
              src={growth}
              alt=""
            />
            <p className="p-6 sm:p-4 text-[35px]/9 md:p-1 md:text-[24px]">
              Grow followers with non-stop content.
            </p>
          </div>
          <div
            className="rounded-lg shadow-md p-4  flex flex-col text-black font-semibold col-span-2 row-span-4 
          sm:col-span-1 sm:row-span-4 sm:order-7
          md:col-span-1 md:row-span-4 md:order-7
          
          bg-[hsl(0,0%,100%)]"
          >
            <p className="text-[46px]">{`>56%`}</p>
            <p className="text-[20px]/9 font-normal tracking-wide">
              {" "}
              Faster audience growth
            </p>
            <img className="w-62 mt-3" src={people} alt="" />
          </div>
          <div
            className="rounded-lg shadow-md  text-black flex flex-col  font-semibold col-span-2 row-span-4
          
          sm:col-span-1 sm:row-span-4 sm:order-8
          
          md:col-span-1 md:row-span-6 md:order-1
          
          bg-[hsl(31,66%,93%)]"
          >
            <p className="text-[36px]/9 sm:text-[27px]/9 mx-5 mt-9">
              create and schedule content{" "}
              <span className="text-violet-600 italic">quicker.</span>
            </p>
            <img className="p-8 w-65 sm:w-55" src={post} alt="" />
          </div>
          <div
            className="rounded-lg shadow-md  text-black flex flex-col p-8  justify-center text-lg font-semibold col-span-2 row-span-5
          
          sm:col-span-1  sm:row-span-7  sm:order-5
          md:col-span-1 md:row-span-7 md:order-6
          
          bg-[hsl(39,100%,71%)]"
          >
            <p className="text-[32px]/9  pr-13">write your content using AI.</p>
            <img className="w-53 sm:py-6 py-3 sm:w-60" src={comment} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
