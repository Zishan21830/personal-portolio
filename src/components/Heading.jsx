import React from 'react'

const Heading = ({heading}) => {
  return (
    <div className='flex justify-center'>
        <p className='text-3xl font-bold font-edensor text-gray py-4 md:text-4xl lg:text-5xl'>{heading}</p>
    </div>
  )
}

export default Heading