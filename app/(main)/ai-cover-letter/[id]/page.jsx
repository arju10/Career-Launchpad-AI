import React from 'react'

export default CoverLetter = async({params}) => {
    const  id= await params.id;
  return (
    <div className='pt-20'>
      <h1>Single Cover Letter Page  {id}</h1>
    </div>
  )
}


