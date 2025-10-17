import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
      intro: "",
      color: "loyalblue",
      tag: " Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1507206130118-b5907f817163?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
      intro: "",
      color: "lightseagreen",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
      intro: "",
      color: "pink",
      tag: "Underbanked",
    },
    {
      img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
      intro: "",
      color: "orange",
      tag: "Underground",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661281292577-27c65307ac42?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000",
      intro: "",
      color: "black",
      tag: "Underware",
    },
  ];

  return (
    <div className=''>
      <Section1 users={users} />
      <Section2/>
    </div>
  )
}

export default App
