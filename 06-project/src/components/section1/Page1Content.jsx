import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='py-10 flex items-center  h-[90vh]  gap-10'>
      <LeftContent />
      <RightContent/>
    </div>
  )
}

export default Page1Content
