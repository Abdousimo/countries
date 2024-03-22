import React, { useState } from 'react'

const Header = () => {
    
    const [dark,setDark] = useState(false)

  return (
    <div className='w-full h-16 relative top-0 z-1 flex justify-between items-center px-3 shadow-md'>
        <h1 id='logo' className='text-xl'>Country Finder</h1>
        <button onClick={()=>{setDark(!dark)}}>
            {dark }
        </button>
    </div>
  )
}

export default Header