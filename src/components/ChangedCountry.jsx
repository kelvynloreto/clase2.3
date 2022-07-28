import React from 'react'

export const ChangedCountry = ({changedCountry, target}) => {

  return (
    <div className='container_text-button'>
     <input type="text" onChange={target} onKeyUp={changedCountry} placeholder="Change Country" />
    
    </div>
  )
}
