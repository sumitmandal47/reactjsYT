// import React, { useState } from 'react'

// const App = () => {
//   const [num, setnum] = useState(0)
//   function increNum() {
//     setnum(num + 1);
    
//   }
  
//   function decreNum() {
//      setnum(num-1)
//   }

//   return (
//     <div className='counter'>
//       <h1>value is {num}</h1>
     
//      <button onClick={increNum}>increase</button>
//      <button onClick={decreNum}>decrease</button>
//     </div>
//   )
// }

// export default App


// useState advance


import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState({user:"sumit",age:20})
  
  const btnClicked = () => {
    // const newNum = { ...num }
    // newNum.user = "deepak"
    // setnum(newNum)


    setnum(prev => ({ ...prev, user: "rupa", age: 30 }))
    
    // setnum(prev(prev+1))
    // setnum(prev(prev+1))
    // setnum(prev(prev+1))
  }
  return (
    <div>
      <h1>{num.user} { num.age}</h1>
      <button onClick={btnClicked}>click </button>
    </div>
  )
}

export default App
