import React from 'react'

const CoverLetter = async({params}) => {
    const  {id} = await params;
  return (
    <div className='pt-20'>
      <h1>Single Cover Letter Page  {id}</h1>
    </div>
  )
}

export default CoverLetter
