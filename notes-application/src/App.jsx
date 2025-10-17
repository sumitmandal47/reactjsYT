import { useState } from 'react'


const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  
  
  const [task, setTask] = useState([]);

  
  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...task]
    copyTask.push({ title, details })
    setTask(copyTask)
    setTitle('')
    setDetails('') 
    
    // setTask((prev)=>({...prev,title,details}))
  }

  const deleteNotes= (idx)=> {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
}
 
  return (
    <div className="h-screen lg:flex bg-black  text-white  ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex  gap-5 lg:w-1/2 items-start p-10 flex-col "
      >
        <h1 className="text-3xl font-bold">Add notes</h1>
        <input
          className="px-5 w-full  py-3 border-2 font-medium rounded outline-none"
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="px-5 w-full py-3 border-2 h-20 font-medium rounded  outline-none "
          type="text"
          placeholder="Write Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="px-5 py-3 lg:border-2 w-full items-center text-black font-medium rounded-full bg-white  outline-none ">
          Add Notes
        </button>
      </form>

      <div className=" lg:w-1/2 p-10 gap-10 border-l-2">
        <h1 className="text-3xl font-bold">Recent notes</h1>
        <div className="flex   flex-wrap items-start justify-start gap-5 mt-6 overflow-auto h-[90%]">
          {task.map(function (elem,idx){
            return (
              <div
                key={idx}
                className=" flex flex-col justify-between relative h-60 w-50 py-6 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover object-cover rounded text-black"
              >
                <div className="">
                  <h3 className="font-bold text-xl leading-tight">
                    {elem.title}
                  </h3>
                  <p className="mt-2 leading-tight font-medium text-gray-600">
                    {elem.details}
                  </p>
                </div>
                <button onClick={() => {
                  deleteNotes(idx)
                }} className=" w-full py-1 tetx-xs rounded font-bold bg-red-500 text-white active:scale-95 cursor-pointer  ">
                  Delete
                </button>
              </div>
            );
         })}
         
        </div>
      </div>
    </div>
  );
}

export default App
