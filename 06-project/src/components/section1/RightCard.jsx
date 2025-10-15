import "remixicon/fonts/remixicon.css";

const RightCard = () => {
  return (
    <div className="h-full overflow-hidden relative w-80 bg-red-500  rounded-4xl">
      <img
        className="h-full w-full object-cover "
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000"
      />

      <div className="absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between ">
        <h2 className="bg-white p-5 rounded-full w-10 h-10 flex justify-center items-center">
          1
        </h2>
        <div className="">
          <p className="text-xl font-semibold text-white leading-normal">
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its is that it has a
            more-or-less normal distribution
          </p>
          <div className="flex justify-between items-center">
            <button className="py-3 px-8 text-xl bg-blue-500 rounded-full text-white ">
              Satisfied
            </button>
            <button className="py-3 px-5 text-xl bg-blue-500 rounded-full text-white ">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
