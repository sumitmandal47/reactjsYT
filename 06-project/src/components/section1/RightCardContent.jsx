import React from 'react'

const RightCardContent = (props) => {
  return (
    <div  className="absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between ">
      <h2 className="bg-white p-5 rounded-full w-10 h-10 flex justify-center items-center font-bold">
        {props.id+1}
      </h2>
      <div className="">
        <p className="text-xl text-shadow-2xs font-semibold text-white leading-normal mb-10">
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its is that it has a
          more-or-less normal distribution
        </p>
        <div className="flex justify-between ">
          <button style={{backgroundColor:props.color}} className="py-3 px-8 text-xl rounded-full text-white ">
            {props.tag}
          </button>
          <button className="py-3 px-5 text-xl  rounded-full text-white ">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightCardContent
